const { Plugin, Modal, Setting, Notice, PluginSettingTab, requestUrl } = require("obsidian");

const RESOURCES_FOLDER = "resources";
// Match http/https URLs anywhere in text (not only line-by-line)
const URL_REGEX = /https?:\/\/[^\s)\]"']+/g;
// Trailing characters to strip (punctuation and brackets that often follow URLs in prose)
const TRAILING_TRIM = /[.\]"'>;:,)\]\s]+$/;

const DEFAULT_SETTINGS = {
  templatePath: "",
  outputDir: "",
};

function extractUrlsFromText(text) {
  const urls = new Set();
  const full = (text || "").replace(/\r\n/g, "\n");
  let m;
  URL_REGEX.lastIndex = 0;
  while ((m = URL_REGEX.exec(full)) !== null) {
    urls.add(m[0].replace(TRAILING_TRIM, ""));
  }
  return [...urls];
}

function sanitizeFilename(title) {
  if (!title || typeof title !== "string") return "Untitled";
  const s = title
    .replace(/[/\\:*?"<>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return (s.slice(0, 200) || "Untitled") + ".md";
}

function parsePublishedDate(value) {
  if (!value || typeof value !== "string") return null;
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
}

function getMetaContent(html, propertyOrName) {
  const regex = new RegExp(
    `<meta[^>]+(?:property|name)=["']${propertyOrName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'][^>]+content=["']([^"']*)["']`,
    "i"
  );
  const m = html.match(regex);
  if (m) return m[1].trim();
  const regex2 = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]+(?:property|name)=["']${propertyOrName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`,
    "i"
  );
  const m2 = html.match(regex2);
  return m2 ? m2[1].trim() : "";
}

function getTitle(html) {
  const og = getMetaContent(html, "og:title");
  if (og) return og;
  const tw = getMetaContent(html, "twitter:title");
  if (tw) return tw;
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return titleMatch ? titleMatch[1].trim() : "";
}

function extractMeta(html) {
  const title = getTitle(html);
  const description =
    getMetaContent(html, "og:description") ||
    getMetaContent(html, "description") ||
    getMetaContent(html, "twitter:description") ||
    "";
  const image =
    getMetaContent(html, "og:image") ||
    getMetaContent(html, "twitter:image") ||
    "";
  const published =
    parsePublishedDate(getMetaContent(html, "article:published_time")) ||
    parsePublishedDate(getMetaContent(html, "og:article:published_time")) ||
    null;
  const authorRaw =
    getMetaContent(html, "og:article:author") ||
    getMetaContent(html, "author") ||
    getMetaContent(html, "twitter:creator") ||
    "";
  const authors = authorRaw
    ? authorRaw.split(/[,;|]/).map((a) => a.trim()).filter(Boolean)
    : [];
  return { title, description, image, published, authors };
}

function escapeYaml(s) {
  return (s || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
}

function buildFrontmatter(meta, sourceUrl, indexedDate) {
  const lines = [
    "---",
    "type: resource",
    `title: "${escapeYaml(meta.title || "Untitled")}"`,
    `source: "${escapeYaml(sourceUrl)}"`,
  ];
  if (meta.description) lines.push(`description: "${escapeYaml(meta.description)}"`);
  else lines.push("description:");

  if (meta.authors && meta.authors.length) {
    lines.push("author:");
    meta.authors.forEach((a) => lines.push(`  - "${escapeYaml(a)}"`));
  } else {
    lines.push("author:");
  }

  lines.push(meta.published ? `published: ${meta.published}` : "published:");
  lines.push(`indexed: ${indexedDate}`);
  lines.push(`created: ${indexedDate}`);
  lines.push("tags: []");
  if (meta.image) lines.push(`image: "${escapeYaml(meta.image)}"`);
  lines.push("---");
  return lines.join("\n");
}

function normalizeUrl(u) {
  try {
    const p = new URL(u);
    p.hash = "";
    return p.toString().replace(/\?$/, "");
  } catch {
    return u;
  }
}

/**
 * Apply a template file's content by:
 * 1. Replacing {variable} tokens with scraped meta values
 * 2. Executing <%* code %> script blocks (tR accumulator pattern, like Templater)
 *
 * Available simple variables:
 *   {title}, {source}, {description}, {author}, {published}, {indexed}, {created}, {image}
 *
 * Script block context: meta (object with title, description, image, published, authors)
 */
function applyTemplate(templateContent, meta, sourceUrl, indexedDate) {
  const vars = {
    title: meta.title || "",
    source: sourceUrl || "",
    description: meta.description || "",
    author: (meta.authors || []).join(", "),
    published: meta.published || "",
    indexed: indexedDate,
    created: indexedDate,
    image: meta.image || "",
  };

  // Step 1: replace {variable} tokens
  let result = templateContent.replace(/\{(\w+)\}/g, (match, key) => {
    return Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : match;
  });

  // Step 2: execute <%* code %> script blocks
  result = result.replace(/<%\*([\s\S]*?)%>/g, (match, code) => {
    try {
      const fn = new Function("meta", `let tR = ""; ${code}; return tR;`);
      return fn(meta);
    } catch (e) {
      return `[script error: ${e.message}]`;
    }
  });

  return result;
}

class IndexResourcesModal extends Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
    this.urlsText = "";
    this.templatePath = plugin.settings.templatePath;
    this.outputDir = plugin.settings.outputDir;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h2", { text: "Index URLs as resources" });
    contentEl.createEl("p", {
      text: "Paste any text (paragraphs, notes, lists). All http/https URLs will be detected and each will get a markdown file in resources/ with frontmatter from the page.",
      cls: "index-resources-hint",
    });

    new Setting(contentEl)
      .setName("Template file path")
      .addText((text) => {
        text
          .setPlaceholder("_templates/resource.md")
          .setValue(this.templatePath)
          .onChange(async (v) => {
            this.templatePath = v.trim();
            this.plugin.settings.templatePath = this.templatePath;
            await this.plugin.saveSettings();
          });
        text.inputEl.style.width = "100%";
      });

    new Setting(contentEl)
      .setName("Output directory")
      .addText((text) => {
        text
          .setPlaceholder("resources")
          .setValue(this.outputDir)
          .onChange(async (v) => {
            this.outputDir = v.trim();
            this.plugin.settings.outputDir = this.outputDir;
            await this.plugin.saveSettings();
          });
        text.inputEl.style.width = "100%";
      });

    const textArea = contentEl.createEl("textarea", {
      attr: {
        rows: 10,
        placeholder: "Paste any block of text; URLs starting with http or https will be extracted.",
      },
    });
    textArea.style.width = "100%";
    textArea.style.boxSizing = "border-box";
    textArea.value = this.urlsText;
    textArea.addEventListener("input", (e) => (this.urlsText = e.target.value));

    const resultDiv = contentEl.createDiv({ cls: "index-resources-result" });

    new Setting(contentEl).addButton((btn) =>
      btn
        .setButtonText("Process")
        .setCta()
        .onClick(() => this.process(resultDiv))
    );
  }

  async process(resultDiv) {
    const urls = extractUrlsFromText(this.urlsText);
    if (!urls.length) {
      new Notice("No URLs found. Paste text that contains http or https links.");
      return;
    }

    resultDiv.empty();
    resultDiv.createEl("p", { text: "Processing…" });

    const report = { written: [], skipped: [], failed: [] };
    const indexedDate = new Date().toISOString().slice(0, 10);
    const vault = this.app.vault;

    // Load template content once if a path is configured
    let templateContent = null;
    if (this.templatePath) {
      try {
        const templateFile = vault.getAbstractFileByPath(this.templatePath);
        if (templateFile) {
          templateContent = await vault.cachedRead(templateFile);
        } else {
          new Notice(`Template file not found: ${this.templatePath}. Using default format.`);
        }
      } catch (e) {
        new Notice(`Could not read template: ${e.message}. Using default format.`);
      }
    }

    const outputDir = this.outputDir;

    // Ensure output folder exists (skip if writing to vault root)
    if (outputDir) {
      let outputFolder = vault.getAbstractFileByPath(outputDir);
      if (!outputFolder) {
        await vault.createFolder(outputDir);
        outputFolder = vault.getAbstractFileByPath(outputDir);
      }
      if (!outputFolder) {
        new Notice(`Could not create output folder: ${outputDir}`);
        return;
      }
    }

    // Build set of existing source URLs (read from existing .md in output dir)
    const existingSources = new Set();
    const existingFiles = vault.getMarkdownFiles().filter((f) =>
      outputDir ? f.path.startsWith(outputDir + "/") : !f.path.includes("/")
    );
    for (const f of existingFiles) {
      try {
        const raw = await vault.cachedRead(f);
        const start = raw.indexOf("---");
        if (start !== -1) {
          const end = raw.indexOf("---", start + 3);
          if (end !== -1) {
            const fm = raw.slice(start + 3, end);
            const m = fm.match(/source:\s*["']?([^"'\n]+)["']?/);
            if (m) existingSources.add(normalizeUrl(m[1].trim()));
          }
        }
      } catch (_) {}
    }

    for (const url of urls) {
      try {
        const res = await requestUrl({
          url,
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; gov-acc-indexer/1.0)",
          },
        });
        const html = res.text;
        const finalUrl = res.url || url;
        const meta = extractMeta(html);
        const filename = sanitizeFilename(meta.title);
        const normalized = normalizeUrl(finalUrl);

        if (existingSources.has(normalized)) {
          report.skipped.push(finalUrl);
          continue;
        }

        let content;
        if (templateContent !== null) {
          content = applyTemplate(templateContent, meta, finalUrl, indexedDate);
        } else {
          const frontmatter = buildFrontmatter(meta, finalUrl, indexedDate);
          const body = `[View original](${finalUrl})\n\nIndexed on ${indexedDate}.\n`;
          content = frontmatter + "\n" + body;
        }

        const path = outputDir ? outputDir + "/" + filename : filename;
        await vault.create(path, content);
        existingSources.add(normalized);
        report.written.push({ url: finalUrl, file: filename });
      } catch (e) {
        report.failed.push({ url, error: e.message || String(e) });
      }
    }

    resultDiv.empty();
    if (report.written.length)
      resultDiv.createEl("p", {
        text: `Written: ${report.written.map((r) => r.file).join(", ")}`,
      });
    if (report.skipped.length)
      resultDiv.createEl("p", { text: `Skipped (already indexed): ${report.skipped.length}` });
    if (report.failed.length) {
      const failEl = resultDiv.createEl("p", { text: "Failed:" });
      report.failed.forEach(({ url, error }) => {
        failEl.createEl("br");
        failEl.appendText(` ${url}: ${error}`);
      });
    }
    if (report.written.length) new Notice(`Created ${report.written.length} resource(s) in ${outputDir || "vault root"}`);
  }

  onClose() {
    this.contentEl.empty();
  }
}

class IndexResourcesSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Index Resources" });

    new Setting(containerEl)
      .setName("Template file path")
      .setDesc(
        "Vault-relative path to a .md template file used when indexing URLs (e.g. _templates/resource.md). " +
        "The template may use {variable} tokens ({title}, {source}, {description}, {author}, {published}, {indexed}, {created}, {image}) " +
        "and <%* code %> script blocks where tR is the output accumulator and meta is available in scope."
      )
      .addText((text) => {
        text
          .setPlaceholder("_templates/resource.md")
          .setValue(this.plugin.settings.templatePath)
          .onChange(async (v) => {
            this.plugin.settings.templatePath = v.trim();
            await this.plugin.saveSettings();
          });
        text.inputEl.style.width = "100%";
      });

    new Setting(containerEl)
      .setName("Output directory")
      .setDesc("Vault-relative folder where indexed resource files are created (default: resources).")
      .addText((text) => {
        text
          .setPlaceholder("resources")
          .setValue(this.plugin.settings.outputDir)
          .onChange(async (v) => {
            this.plugin.settings.outputDir = v.trim();
            await this.plugin.saveSettings();
          });
        text.inputEl.style.width = "100%";
      });
  }
}

module.exports = class IndexResourcesPlugin extends Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new IndexResourcesSettingTab(this.app, this));
    this.addCommand({
      id: "index-urls",
      name: "Index URLs as resources",
      callback: () => {
        new IndexResourcesModal(this.app, this).open();
      },
    });
  }

  onunload() {}

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
};

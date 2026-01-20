import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Meridian-Quartz Configuration
 * 
 * Key differences from vanilla Quartz:
 * - Content sourced from parent directory (workspace root)
 * - Meridian-specific ignore patterns
 * - Pre-configured for .quartz/ installation location
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Gov/acc Knowledge Base",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: undefined,
    ignorePatterns: [
      // Quartz infrastructure
      ".quartz/**",
      ".quartz-cache/**",
      
      // Meridian infrastructure  
      ".meridian/**",
      
      // Development infrastructure
      ".git/**",
      ".gitignore",
      "node_modules/**",
      "package*.json",
      "yarn.lock",
      "tsconfig*.json",
      "*.config.{js,ts}",
      "vite.config.{js,ts}",
      "rollup.config.{js,ts}",
      "webpack.config.{js,ts}",
      
      // Build and temporary
      "dist/**",
      "build/**", 
      "cache/**",
      "*.log",
      "tmp/**",
      "temp/**",
      ".cache/**",
      
      // IDE and system
      ".vscode/**",
      ".idea/**",
      "*.swp",
      "*.swo", 
      ".DS_Store",
      "Thumbs.db",
      
      // Backup files
      "*~",
      "*.bak",
      "*.tmp",
      
      // Private content
      "private/**",
      "templates/**",
      ".obsidian/**",
      
      // Common documentation that shouldn't be published
      "CHANGELOG.md",
      "CONTRIBUTING.md",
      "INSTALL.md",
      "TODO.md",
      "ROADMAP.md",
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "rgba(143, 159, 169, 0.25)",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "rgba(143, 159, 169, 0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({ 
        theme: { light: "github-light", dark: "github-dark" }, 
        keepBackground: false 
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // TODO: Add Meridian-specific plugins once implemented
      // MeridianPlugin.CollatePlugin(),
      // MeridianPlugin.ArchivePlugin(),
      // MeridianPlugin.BroadcastPlugin(),
    ],
  },
}

export default config

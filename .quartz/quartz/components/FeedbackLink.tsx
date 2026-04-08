import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  repo: string
}

const feedbackTemplates: Record<string, (title: string, url: string) => string> = {
  problem: (title, url) =>
    `**Page:** ${title}
**Type:** Problem
**URL:** ${url}

**What's wrong or missing?** (check all that apply)
- [ ] Inaccurate claim or statistic
- [ ] Missing evidence or example
- [ ] Outdated information
- [ ] Important perspective not represented

**Details:**


**Source (if any):**
`,
  solution: (title, url) =>
    `**Page:** ${title}
**Type:** Solution
**URL:** ${url}

**What's wrong or missing?** (check all that apply)
- [ ] Maturity assessment is wrong (more/less mature than stated)
- [ ] Missing actor or project working on this
- [ ] I have deployment experience to share
- [ ] Inaccurate description of how it works

**Details:**


**Source (if any):**
`,
  default: (title, url) =>
    `**Page:** ${title}
**URL:** ${url}

**What's wrong or missing?**


**Suggested correction (if any):**
`,
}

export default ((opts: Options) => {
  const FeedbackLink: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title
    if (!title) return null

    const tags = fileData.frontmatter?.tags as string[] | undefined
    const isPublished = fileData.frontmatter?.publish === true

    // Only show on published content pages
    if (!isPublished) return null

    // Skip index pages
    const slug = fileData.slug ?? ""
    if (slug === "index" || slug.endsWith("/index")) return null

    // Determine page type from tags
    const type = tags?.includes("problems")
      ? "problem"
      : tags?.includes("solutions")
        ? "solution"
        : "default"

    const baseUrl = cfg.baseUrl ? `https://${cfg.baseUrl}` : ""
    const pageUrl = `${baseUrl}/${slug}`
    const body = feedbackTemplates[type](title, pageUrl)

    const issueUrl = `https://github.com/${opts.repo}/issues/new?title=${encodeURIComponent(`Feedback: ${title}`)}&labels=${encodeURIComponent("wiki-feedback")}&body=${encodeURIComponent(body)}`

    return (
      <div class="feedback-link">
        <a href={issueUrl} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Report an issue with this page
        </a>
      </div>
    )
  }

  FeedbackLink.css = `
.feedback-link {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--lightgray);
}
.feedback-link a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--gray);
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.feedback-link a:hover {
  opacity: 1;
  color: var(--secondary);
}
`

  return FeedbackLink
}) satisfies QuartzComponentConstructor<Options>

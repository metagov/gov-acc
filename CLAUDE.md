# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

gov/acc knowledge base — a Quartz wiki for governance acceleration research in web3, deployed at **gov-acc.metagov.org**. Part of the Harmonica ecosystem, conducted with Metagov.

Uses **Meridian-Quartz** (a Quartz fork) installed in `.quartz/`. Content lives in the **root directory**, not inside `.quartz/`.

## Build & Dev Commands

```bash
# Build site (outputs to .quartz/public/)
npm run build

# Serve locally with hot reload
npm run serve

# Direct Quartz CLI access
npm run quartz -- build --directory ..
```

Requires **Node >= 22**. Install deps with `cd .quartz && npm install --legacy-peer-deps`.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys on push to `main`:
1. Installs deps in `.quartz/`
2. Builds Quartz (content from root via `--directory ..`)
3. Copies `phase1/` static HTML dashboards into `.quartz/public/phase1/`
4. Deploys `.quartz/public/` to GitHub Pages

CNAME: `gov-acc.metagov.org`. Repo: `metagov/gov-acc`.

## Content Architecture

### Where content goes

Markdown files in the root directory are published. Key structure:

- `index.md` — Homepage
- `Phase 1 Results.md` — Research findings summary
- `Research Program Plan.md` — Methodology
- `problems/` — 11 governance problem articles + index
- `solutions/` — 31 governance solution articles + index
- `resources/` — Curated research (NOT published, ignored in config)
- `phase1/` — Static HTML dashboards (copied as-is, not Quartz-processed)
- `media/` — Images

### Frontmatter

Every published page needs:

```yaml
---
publish: true
title: "Page Title"
tags:
  - category
created: 2026-02-10
---
```

Pages with `publish: false` (or missing `publish`) are filtered by `RemoveDrafts`.

### Wiki links

Uses Obsidian-flavored wiki links with shortest-path resolution:
- `[[Page Title]]` — links to matching page anywhere
- `[[folder/Page|Display Text]]` — explicit path with custom label

Cross-references between problems and solutions use exact file names (without `.md`):
- Problems: `[[Token Voting Failure]]`, `[[Governance Theater]]`, etc.
- Solutions: `[[Conviction Voting]]`, `[[Soulbound Reputation Tokens]]`, etc.

### Callouts

Quartz supports Obsidian callouts: `> [!info]`, `> [!warning]`, `> [!abstract]`, `> [!caution]`.

## Key Architecture Details

**Content source**: Quartz reads from the parent directory (`--directory ..`), not from `.quartz/`. Never put content pages inside `.quartz/`.

**Ignore patterns** (in `.quartz/quartz.config.ts`): `resources/**`, `phase1/**`, `.quartz/**`, `.meridian/**`, `README.md`, and standard dev files are excluded from Quartz processing.

**Static dashboards**: The `phase1/` directory contains standalone HTML data visualizations (D3/Plotly). These are NOT processed by Quartz — they're copied into the build output by GitHub Actions and served at `/phase1/`. The v2 dashboard files live in the sibling `gov-acc-research/` directory and are deployed separately to `gov-acc-research.netlify.app`.

**Layout** (`.quartz/quartz.layout.ts`): Content pages have Explorer (left), Graph + TOC + Backlinks (right). Search and dark mode toggles in left sidebar.

**Theme**: Schibsted Grotesk headers, Source Sans Pro body, IBM Plex Mono code. Teal accent (`#04cb99`).

## Research Data

Problem and solution data originates from HTML dashboard files in `../gov-acc-research/`:
- `problems-v2.html` — 11 problems with breadth/depth scores, participant lists
- `solutions-v2.html` — 31 solutions with maturity (x), category, actors, problem mappings
- `solutions-wardley-v2.html` — Wardley map positions and dependency relationships

Urgency scoring formula: `(breadth/26) * 0.6 + (depth/5.8) * 0.4`

Phase 1 is ongoing — current findings are preliminary, from the Harmonica structured interview track. Other research streams will contribute additional data.

## Legacy Files

- `_config.yml` — Old Jekyll config, unused by Quartz
- `index.html` — Old static homepage, overridden by `index.md`
- `.obsidian/` — Local Obsidian vault metadata, not committed

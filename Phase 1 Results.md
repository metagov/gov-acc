---
publish: true
title: "Phase 1 Preliminary Results"
tags:
  - research
  - phase-1
created: 2026-02-10
---

> [!abstract] Preliminary Findings — Harmonica Interview Track
> 27 structured interviews · 11 governance problems · 29 proposed solutions · 41 actors
> January–February 2026 · Phase 1 is ongoing

## Overview

These are preliminary findings from one track of Phase 1 research — structured interviews conducted via the [Harmonica platform](https://app.harmonica.chat). Phase 1 encompasses multiple data-gathering efforts, and these results will be expanded and refined as additional research streams contribute their findings.

Through the Harmonica interview track, we conducted 27 in-depth structured conversations with DAO operators, protocol governance participants, delegates, academic researchers, governance infrastructure builders, and ecosystem actors.

The result is an initial mapping of the governance problem space as experienced by practitioners — not a theoretical taxonomy, but a ground-level picture of what governance challenges look like from inside organizations trying to make decentralized decision-making work.

**[Explore the interactive Phase 1 dashboard →](https://gov-acc-research.netlify.app)**

## Methodology

Each interview followed a structured format:
1. **Problem identification** — What governance challenges have you observed or experienced?
2. **Problem evidence** — Specific examples and supporting evidence
3. **Solution mapping** — What approaches or tools could address these problems?
4. **Actor identification** — Who is building, researching, or experimenting with solutions?

Responses were analyzed to extract and codify:
- **11 governance problems** with breadth (how many raised it) and depth (how extensively it was discussed) metrics
- **29 proposed solutions** with maturity assessment and problem mappings
- **41 actors** working across the governance landscape

### Urgency Scoring

Problems are ranked by a composite urgency score:

$$\text{Urgency} = \frac{\text{breadth}}{27} \times 0.6 + \frac{\text{depth}}{6.5} \times 0.4$$

- **Breadth** (60% weight): How many of 27 interviewees raised the problem — measures how widespread the concern is
- **Depth** (40% weight): Average messages per discussion — measures how much engagement the topic generates

This formula surfaces problems that are both widely recognized AND deeply discussed, while allowing specialist concerns with high depth to still rank prominently.

## Preliminary Findings

### Token Voting is the #1 Governance Concern

[[Token Voting Failure]] was raised by 20 out of 27 participants — nearly three-quarters of all interviewees. With an urgency score of 86 (Critical), it is the most widely recognized and consistently discussed governance failure. Twelve distinct solutions have been proposed to address it, more than any other problem.

### Two Problems Reach Critical Urgency

Only two problems scored above 70: [[Token Voting Failure]] (86) and [[Governance Theater]] (71). These represent the most acute failures in the current governance landscape — the mechanisms themselves are broken (token voting) and the processes designed to fix them are often performative (governance theater).

### The Execution Layer Leads; Deliberation Lags

Financial mechanisms like [[VE Buyback Models]] (Commodity maturity) and [[Contributor Streams]] (Product maturity) are the most evolved solutions. Structural approaches like [[Specialized Committees]] and [[Optimistic Governance]] are also well-established. By contrast, sensemaking tools ([[Signals Protocol]], [[Updraft]]) and knowledge infrastructure ([[Governance Memory System]], [[Reference Identifiers]]) remain in early stages.

This asymmetry suggests the ecosystem has focused on *executing* governance decisions more than on *making better decisions in the first place*.

### Knowledge Infrastructure is a Critical Gap

Despite [[Institutional Amnesia]] ranking as a High urgency problem (score 54, with 5.8 average message depth — the second highest), the solutions addressing it are almost entirely in Genesis or Custom stages. [[Governance Memory System]], [[Reference Identifiers]], and [[Telescope Bot]] represent promising but early-stage approaches. This is perhaps the largest gap between problem urgency and solution maturity.

### AI Governance is Emerging Fast

[[AI Governance Agents]] received 5 mentions — unusually strong signal for a Genesis/Custom stage solution. Participants are interested in AI-augmented governance for voter delegation, proposal summarization, and institutional memory. [[AI Dispute Resolution]] adds another dimension with simulated jury systems. This space is likely to evolve rapidly.

### Deep Problems vs. Wide Problems

The urgency formula reveals an interesting pattern:
- **Wide problems** (high breadth, moderate depth): [[Voting Fatigue]] (14/27, 2.8 depth) — universally recognized, well-understood
- **Deep problems** (moderate breadth, high depth): [[Over-Reliance on Game Theory]] (7/27, 6.5 depth) — specialist concern, generates the most extensive discussion
- **Both** (high breadth, high depth): [[Token Voting Failure]] (20/27, 4.2 depth) — #1 by both measures

## Problems at a Glance

| Rank | Problem | Score | Level | Breadth | Depth |
|------|---------|-------|-------|---------|-------|
| 1 | [[Token Voting Failure]] | 86 | Critical | 20/27 | 4.2 |
| 2 | [[Governance Theater]] | 71 | Critical | 16/27 | 3.8 |
| 3 | [[Broken Contributor Economies]] | 61 | High | 10/27 | 5.1 |
| 4 | [[Over-Reliance on Game Theory]] | 61 | High | 7/27 | 6.5 |
| 5 | [[Voting Fatigue]] | 59 | High | 14/27 | 2.8 |
| 6 | [[Informal Power]] | 55 | High | 11/27 | 3.5 |
| 7 | [[Institutional Amnesia]] | 54 | High | 6/27 | 5.8 |
| 8 | [[Technical and Legal Gaps]] | 48 | Medium | 6/27 | 4.8 |
| 9 | [[Grant System Dysfunction]] | 46 | Medium | 6/27 | 4.5 |
| 10 | [[Delegate Sustainability]] | 46 | Medium | 7/27 | 4.0 |
| 11 | [[Lack of Clear Purpose]] | 44 | Medium | 8/27 | 3.2 |

**[[problems/index|Explore all 11 problems →]]**

## Solutions at a Glance

Solutions span 9 categories and 4 maturity stages:

| Category | Count | Maturity Range |
|----------|-------|----------------|
| Structural | 7 | Genesis → Product |
| Financial | 5 | Genesis → Commodity |
| Sensemaking | 4 | Custom → Commodity |
| Reputation | 3 | Genesis → Product |
| Knowledge | 3 | Genesis → Product |
| AI-Augmented | 2 | Genesis → Custom |
| Alternative | 3 | Genesis → Product |
| Verification | 1 | Genesis |
| Voting Reform | 1 | Product |

**[[solutions/index|Explore all 29 solutions →]]**

## What's Next

Phase 1 is ongoing. Additional research streams beyond the Harmonica interviews will contribute further data, expanding and refining these preliminary findings. As Phase 1 progresses:
- **Additional data sources** will be integrated alongside the Harmonica interview findings
- **Community validation** — presenting findings for practitioner feedback
- **Visualization** — building interactive tools for exploring the governance landscape (in collaboration with Coordination Network)
- **Revised "Open Problems in DAOs"** — incorporating Phase 1 findings into the updated paper

The interactive dashboard is available at **[gov-acc-research.netlify.app](https://gov-acc-research.netlify.app)** for exploring the Harmonica interview dataset with problems, solutions, actors, and their relationships.

---

*These preliminary findings are from the Harmonica structured interview track of Phase 1 research, conducted as part of the gov/acc program at [Metagov](https://metagov.org).*

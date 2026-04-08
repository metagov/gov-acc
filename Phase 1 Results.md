---
publish: true
title: "Phase 1 Results"
tags:
  - research
  - phase-1
created: 2026-02-10
---

> [!abstract] Preliminary Findings — Harmonica Interview Track
> 52 structured interviews · 11 governance problems · 41 proposed solutions · 59 actors
> January–March 2026 · Phase 1 is ongoing

## Overview

These are preliminary findings from one track of Phase 1 research — structured interviews conducted via the [Harmonica platform](https://app.harmonica.chat). Phase 1 encompasses multiple data-gathering efforts, and these results will be expanded and refined as additional research streams contribute their findings.

Through the Harmonica interview track, we conducted 52 in-depth structured conversations with DAO operators, protocol governance participants, delegates, academic researchers, governance infrastructure builders, and ecosystem actors.

The result is an initial mapping of the governance problem space as experienced by practitioners — not a theoretical taxonomy, but a ground-level picture of what governance challenges look like from inside organizations trying to make decentralized decision-making work.

**[Explore the interactive Phase 1 dashboard →](https://gov-acc-research.netlify.app)**

## Methodology

Each interview followed a structured format:
1. **Problem identification** — What governance challenges have you observed or experienced?
2. **Problem evidence** — Specific examples and supporting evidence
3. **Solution mapping** — What approaches or tools could address these problems?
4. **Actor identification** — Who is building, researching, or experimenting with solutions?

Responses were synthesized using AI-assisted analysis. Problem descriptions, solution writeups, and relationship mappings were generated from participant responses using language models, then reviewed by the research team. While the data points (which problems were raised, by how many participants, etc.) are faithful to the source material, the narrative descriptions may contain AI-generated elaborations beyond what participants explicitly stated. Original verbatim responses are available on request.

Responses were analyzed to extract and codify:
- **11 governance problems** with breadth (how many raised it) and depth (how extensively it was discussed) metrics
- **41 proposed solutions** with maturity assessment and problem mappings
- **59 actors** working across the governance landscape

### Urgency Scoring

Problems are ranked by a composite urgency score:

$$\text{Urgency} = \frac{\text{breadth}}{28} \times 0.6 + \frac{\text{depth}}{5.0} \times 0.4$$

- **Breadth** (60% weight): How many of 52 interviewees raised the problem — measures how widespread the concern is
- **Depth** (40% weight): Average messages per discussion — measures how much engagement the topic generates

This formula surfaces problems that are both widely recognized AND deeply discussed, while allowing specialist concerns with high depth to still rank prominently.

## Preliminary Findings

### Token Voting is the #1 Governance Concern

[[Token Voting Failure]] was raised by 28 out of 52 participants — over half of all interviewees. With an urgency score of 88 (Critical), it is the most widely recognized and consistently discussed governance failure. Sixteen distinct solutions have been proposed to address it, more than any other problem.

### Token Voting Stands Alone as Critical

Only one problem scores above 80: [[Token Voting Failure]] (88). [[Voting Fatigue]] (71) and [[Governance Theater]] (68) follow as the highest-ranked High urgency problems. Together they represent the most acute failures in the current governance landscape — the mechanisms themselves are broken (token voting), participation is collapsing (voter fatigue), and the processes designed to fix them are often performative (governance theater).

### The Execution Layer Leads; Deliberation Lags

Financial mechanisms like [[VE Buyback Models]] (Commodity maturity) and [[Contributor Streams]] (Product maturity) are the most evolved solutions. Structural approaches like [[Specialized Committees]] and [[Optimistic Governance]] are also well-established. By contrast, sensemaking tools ([[Signals Protocol]], [[Updraft]]) and knowledge infrastructure ([[Governance Memory System]], [[Reference Identifiers]]) remain in early stages.

This asymmetry suggests the ecosystem has focused on *executing* governance decisions more than on *making better decisions in the first place*.

### Knowledge Infrastructure is a Critical Gap

Despite [[Institutional Amnesia]] ranking as a High urgency problem (score 53, with 4.5 average message depth), the solutions addressing it are almost entirely in Genesis or Custom stages. [[Governance Memory System]], [[Reference Identifiers]], [[Telescope Bot]], and the emerging [[Green Goods]] platform (connecting impact attestations to institutional records) represent promising but early-stage approaches. This remains one of the largest gaps between problem urgency and solution maturity.

### AI Governance is Emerging Fast

[[AI Governance Agents]] received 7 mentions — unusually strong signal for a Genesis/Custom stage solution. Participants are interested in AI-augmented governance for voter delegation, proposal summarization, and institutional memory — including Katashe Solutions building governance intelligence as a public good. [[AI Dispute Resolution]] and [[Constitutional Juror Pools]] add another dimension with expertise-based dispute resolution systems. This space is likely to evolve rapidly.

### Deep Problems vs. Wide Problems

The urgency formula reveals an interesting pattern:
- **Wide problems** (high breadth, moderate depth): [[Voting Fatigue]] (25/52, 2.5 depth) — universally recognized, well-understood
- **Deep problems** (moderate breadth, high depth): [[Over-Reliance on Game Theory]] (8/52, 5.0 depth) — specialist concern, generates the deepest discussion in the dataset
- **Both** (high breadth, high depth): [[Token Voting Failure]] (28/52, 3.5 depth) — #1 by both measures

## Problems at a Glance

| Rank | Problem | Score | Level | Breadth | Depth |
|------|---------|-------|-------|---------|-------|
| 1 | [[Token Voting Failure]] | 88 | Critical | 28/52 | 3.5 |
| 2 | [[Voting Fatigue]] | 71 | High | 25/52 | 2.5 |
| 3 | [[Governance Theater]] | 68 | High | 21/52 | 3.2 |
| 4 | [[Broken Contributor Economies]] | 64 | High | 15/52 | 4.2 |
| 5 | [[Informal Power]] | 59 | High | 17/52 | 2.8 |
| 6 | [[Over-Reliance on Game Theory]] | 57 | High | 8/52 | 5.0 |
| 7 | [[Technical and Legal Gaps]] | 55 | High | 12/52 | 4.2 |
| 8 | [[Institutional Amnesia]] | 53 | High | 8/52 | 4.5 |
| 9 | [[Grant System Dysfunction]] | 50 | Medium | 10/52 | 3.6 |
| 10 | [[Lack of Clear Purpose]] | 50 | Medium | 15/52 | 2.5 |
| 11 | [[Delegate Sustainability]] | 48 | Medium | 11/52 | 3.1 |

**[[problems/index|Explore all 11 problems →]]**

## Solutions at a Glance

Solutions span 9 categories and 4 maturity stages:

| Category | Count | Maturity Range |
|----------|-------|----------------|
| Structural | 14 | Genesis → Product |
| Financial | 6 | Genesis → Commodity |
| Sensemaking | 4 | Custom → Commodity |
| Reputation | 3 | Genesis → Product |
| Knowledge | 3 | Genesis → Product |
| AI-Augmented | 3 | Genesis → Custom |
| Alternative | 5 | Genesis → Product |
| Verification | 1 | Genesis |
| Voting Reform | 2 | Custom → Product |

**[[solutions/index|Explore all 41 solutions →]]**

## What's Next

Phase 1 is ongoing. Additional research streams beyond the Harmonica interviews will contribute further data, expanding and refining these preliminary findings. As Phase 1 progresses:
- **Additional data sources** will be integrated alongside the Harmonica interview findings
- **Community validation** — presenting findings for practitioner feedback
- **Visualization** — building interactive tools for exploring the governance landscape (in collaboration with Coordination Network)
- **Revised "Open Problems in DAOs"** — incorporating Phase 1 findings into the updated paper

The interactive dashboard is available at **[gov-acc-research.netlify.app](https://gov-acc-research.netlify.app)** for exploring the Harmonica interview dataset with problems, solutions, actors, and their relationships.

---

*These preliminary findings are from the Harmonica structured interview track of Phase 1 research, conducted as part of the gov/acc program at [Metagov](https://metagov.org).*

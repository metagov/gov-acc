---
publish: true
title: Open Value Accounting with AI
tags:
  - solutions
  - ai-augmented
  - custom
created: 2026-03-02
type: solution
---

> [!abstract] AI-Augmented · Custom
> 2 participant mentions · Addresses 2 governance problems

*AI-synthesized from participant responses. Data points are faithful to source material; narrative descriptions may contain elaborations beyond what participants stated. See [[Phase 1 Results#Methodology|Methodology]]. Original responses available on request.*

AI-assisted fair value accounting for contributions in decentralized organizations. By training AI agents to handle the tedious work of tracking, valuing, and logging contributions, Open Value Accounting with AI addresses the fundamental tradeoff between fairness and leanness that has plagued contributor compensation in DAOs — making detailed value accounting feasible at scale without the social overhead that has historically driven communities apart.

## How It Works

Open value accounting attempts to track all contributions to an organization and assign them fair value, creating the basis for equitable compensation. In traditional implementations (like the Token Engineering Commons' Praise system or Sensorica's open value network), this requires significant manual effort: community members must regularly assess and record each other's contributions, leading to "valuation fatigue" and social friction.

The AI-augmented approach trains an agent on the community's values and contribution patterns, then delegates the routine valuation and logging work to the agent. The community still defines what counts as valuable contribution and sets the parameters, but the tedious per-contribution assessment is automated. This preserves the fairness benefits of detailed value accounting while eliminating the social cost of constant peer evaluation.

Key implementation considerations include: training the AI on community-specific value systems (what one community considers valuable may differ from another), maintaining human oversight for edge cases and disputes, handling the inherent subjectivity of knowledge work valuation, and ensuring the system doesn't inadvertently incentivize legible over meaningful contributions.

## Problems Addressed

- [[Broken Contributor Economies]] — Directly addresses the fairness-leanness tradeoff by making detailed value accounting feasible without the manual overhead that has historically made it unsustainable. Contributors can be compensated proportionally to their actual contributions rather than through flat rates or subjective assessments
- [[Delegate Sustainability]] — Provides an objective mechanism for tracking and valuing delegate contributions across protocols, enabling fair compensation based on actual governance work performed rather than political negotiation

## Key Actors

- **Felix Fritsch** — Proposed the AI-augmented approach based on extensive research into the Token Engineering Commons (2021-2023), where the Praise system for value accounting created both benefits and significant social friction, documented in an 80-page case study
- **Sensorica** — Pioneer of open value accounting in collaborative networks, providing the methodological foundation that AI augmentation builds upon
- **Token Engineering Commons (TEC)** — Real-world testing ground for value accounting through the Praise system, providing both positive evidence (fair compensation) and cautionary lessons (community conflict from valuation burden)
- **Green Goods (EAS attestations)** — Using Ethereum Attestation Service to create on-chain value accounting records, where contributors attest to work and approved attestations are bundled into hypercerts as verifiable impact certificates

## Maturity Assessment

At Custom stage (ex 2.0), the conceptual foundations are well-established through Sensorica's work and the TEC's practical experience. The AI augmentation component is emerging — large language models are increasingly capable of the nuanced assessment required, but training them on community-specific values remains an open challenge. Moving to Pilot stage requires testing AI-assisted valuation in a live community context and comparing outcomes with manual approaches.

## Participant Mentions

Referenced in 2 out of 52 interviews. Felix Fritsch's detailed account of the TEC's experience — initial enthusiasm, growing friction from valuation overhead, and eventual community conflict — provides a compelling evidence base for why AI augmentation is needed. The insight that value accounting is conceptually sound but socially expensive to implement manually positions AI assistance as a necessary enabler rather than a nice-to-have.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

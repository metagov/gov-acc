---
publish: true
title: "QGOV"
tags:
  - solutions
  - structural
  - genesis-to-custom
created: 2026-04-08
---

> [!abstract] Structural · Genesis → Custom
> 1 participant mention · Addresses 1 governance problem

*AI-synthesized from participant responses. Data points are faithful to source material; narrative descriptions may contain elaborations beyond what participants stated. See [[Phase 1 Results#Methodology|Methodology]]. Original responses available on request.*

A hybrid governance enforcement model combining an elected enforcement committee with external dispute resolution. QGOV addresses the fundamental gap between governance rules that require human interpretation and the lack of reliable mechanisms to enforce them onchain.

## How It Works

QGOV operates on the principle that subjective rule enforcement requires a dual structure: an internal committee with legitimacy and context, plus an external dispute resolution layer for appeals and checks on committee power.

The elected committee handles day-to-day enforcement decisions — interpreting rules, investigating potential violations, and issuing rulings. Because committee members are elected by the community, they have democratic legitimacy. Because they serve defined terms, there is accountability.

The external dispute resolution layer — potentially leveraging systems like Kleros or UMA — provides an appeal mechanism and prevents the committee from becoming a captured enforcement monopoly. This addresses the tension Optimism encountered: enforcement authority is necessary, but any single holder of that authority creates new governance problems.

## Problems Addressed

- [[Technical and Legal Gaps]] — Provides a structured mechanism for enforcing subjective governance rules that cannot be reduced to smart contract logic, bridging the gap between what rules say and what can actually be enforced

## Key Actors

- **Martin Schmidt** — Designing and implementing QGOV as a practical enforcement model for onchain organizations

## Maturity Assessment

At Genesis-to-Custom (ex 2), QGOV is in the design and early experimentation phase. The concept draws on established institutional design principles (elected committees, separation of enforcement and appeals) but applies them in the novel context of onchain governance. The challenge lies in designing election mechanisms that produce competent enforcers and appeal processes that are accessible without being trivially exploitable.

## Participant Mentions

Referenced in 1 out of 52 interviews. Martin Schmidt proposed QGOV as part of a broader analysis of why onchain organizations struggle with subjective rule enforcement. The model represents one of several approaches to the enforcement problem, alongside contestable control and forking protocols.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

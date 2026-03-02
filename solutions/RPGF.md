---
publish: true
title: "RPGF"
tags:
  - solutions
  - financial
  - custom-to-product
created: 2026-02-10
---

> [!abstract] Financial · Custom → Product
> 4 participant mentions · Addresses 2 governance problems

Retroactive Public Goods Funding — compensating contributors after impact is demonstrated rather than funding promises. RPGF uses hybrid input-output valuation to assess contribution value after the fact, inverting the traditional grants model and creating stronger incentive alignment between funders and contributors.

## How It Works

Traditional grants fund promises: a contributor proposes what they'll build, a committee evaluates the proposal, and funding is disbursed upfront (or at milestones). The fundamental problem is that evaluating promises is much harder than evaluating outcomes. RPGF solves this by funding retrospectively — contributors build first, and the community evaluates the actual impact before allocating rewards.

The process typically works in rounds. A pool of funds is set aside for retroactive allocation. Contributors submit their completed work for evaluation. Community members (or a designated evaluation body) assess the impact of each contribution and allocate funds proportionally. The evaluation uses "hybrid input-output valuation" — considering both the effort invested (inputs) and the results achieved (outputs), recognizing that some high-effort work may not produce visible outputs but is still valuable.

Optimism pioneered large-scale RPGF with multiple rounds allocating millions of dollars. Their experience surfaced key design questions: How do you evaluate "impact" objectively? How do you prevent popularity contests from dominating allocation? How do you ensure that contributions to public goods (which are by definition available to everyone, including non-contributors) are valued appropriately?

Some implementations use a badge-holder system where evaluation authority is distributed among community-selected judges. Others use quadratic funding mechanics to amplify small contributions. The field is still converging on best practices for evaluation methodology.

The crucial incentive insight is that if contributors know retroactive funding exists, they are incentivized to build valuable public goods now — effectively creating a market for public goods that didn't previously exist.

## Problems Addressed

- [[Broken Contributor Economies]] — Creates a more accurate and fair compensation mechanism by rewarding demonstrated impact rather than projected promises, reducing the mismatch between funding allocation and actual value creation
- [[Delegate Sustainability]] — Enables retroactive compensation for governance participation and other contributions that are difficult to scope as grants but clearly create value for the organization

## Key Actors

- **Optimism** — Pioneer and largest-scale implementer of RPGF, having conducted multiple rounds that allocated millions in retroactive funding, providing the primary case study for the approach
- **Various** — Multiple ecosystems are implementing or adapting RPGF models, contributing to a growing body of practical experience with retroactive funding design

## Maturity Assessment

At the Custom-to-Product boundary (ex 3), RPGF has moved from theory to substantial real-world implementation, anchored by Optimism's multi-round experience. However, evaluation methodology remains a major challenge — each round surfaces new questions about how to measure impact fairly and prevent gaming. The concept is well-validated; the implementation details are still being refined. RPGF is likely to reach Product maturity once evaluation frameworks stabilize and can be reliably replicated across different organizations.

## Participant Mentions

Referenced in 4 out of 40 interviews. The solid mention count reflects RPGF's prominence in the governance discourse, driven largely by Optimism's visible and well-publicized rounds. Participants generally viewed RPGF favorably as a concept but noted challenges with evaluation fairness and the overhead of running retroactive funding rounds effectively.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

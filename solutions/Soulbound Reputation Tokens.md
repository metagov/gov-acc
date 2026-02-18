---
publish: true
title: "Soulbound Reputation Tokens"
tags:
  - solutions
  - reputation
  - custom-to-product
created: 2026-02-10
---

> [!abstract] Reputation · Custom → Product
> 6 participant mentions · Addresses 4 governance problems

Non-transferable tokens that represent earned reputation and governance weight, decoupling governance power from financial capital. Soulbound reputation tokens (SBTs) can be issued for verified contributions, burned to release voting power through rage quit mechanics, and used for merit-based role assignment. They represent the most comprehensive attempt to build a reputation layer for decentralized governance.

## How It Works

Soulbound reputation tokens are non-transferable — they are bound to the recipient's identity and cannot be bought, sold, or delegated in the traditional sense. Governance weight is earned through demonstrated participation: completing bounties, serving on committees, reviewing proposals, or other verifiable contributions. The key innovation is that governance power accrues to those who do the work rather than those who hold the most capital.

Several implementation patterns have emerged. Some systems use a single reputation token with a numerical score. Others issue different token types for different competencies — a technical review token carries different weight in protocol upgrade votes than a community management token. The most sophisticated implementations include decay mechanisms, where reputation diminishes over time if not maintained through continued participation.

The rage quit mechanic is particularly important: participants can burn their reputation tokens to withdraw proportional assets from a shared treasury, providing an economic exit right that doesn't depend on token markets. This creates a check on governance capture — if a faction gains too much control, dissenters can exit with their fair share rather than being outvoted into submission.

## Problems Addressed

- [[Token Voting Failure]] — Directly addresses plutocracy by making governance power non-purchasable; you cannot buy reputation, only earn it through participation
- [[Broken Contributor Economies]] — Creates tangible recognition for contributions that translates into governance influence, providing non-financial incentives for sustained engagement
- [[Informal Power]] — Makes influence legible and earned rather than emergent from social dynamics; reputation becomes a transparent, on-chain metric
- [[Delegate Sustainability]] — Provides a framework for compensating and empowering active delegates based on their track record rather than their token holdings

## Key Actors

- **Kokonut Network** — Building reputation-weighted governance systems with soulbound mechanics
- **Wasabi** — Implementing non-transferable reputation tokens for community governance
- **Hats Protocol** — Creating role-based access and reputation using token-gated permissions, where "hats" represent responsibilities and authorities
- **DAO Haus** — Pioneering reputation-based DAO frameworks with rage quit mechanics, one of the earliest implementations of non-transferable governance shares

## Maturity Assessment

At the Custom-to-Product boundary (ex 3), soulbound reputation tokens are transitioning from experimental designs to working implementations. The concept gained significant attention after Vitalik Buterin's 2022 paper on soulbound tokens, and multiple teams are now building production systems. However, fundamental challenges remain: identity verification, cross-DAO reputation portability, and the design of fair issuance criteria are all active research areas. The variety of competing approaches suggests the solution space hasn't converged on a dominant design yet.

## Participant Mentions

Referenced in 6 out of 30 interviews, tied with Conviction Voting for the highest mention count. This reflects widespread recognition that separating governance power from financial capital is essential. Multiple participants independently arrived at reputation-based governance as a key piece of the puzzle, though they differed on implementation details — a sign of a solution whose core insight is validated but whose execution is still being refined.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

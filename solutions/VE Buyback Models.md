---
publish: true
title: "VE Buyback Models"
tags:
  - solutions
  - financial
  - commodity
created: 2026-02-10
---

> [!abstract] Financial · Commodity
> 4 participant mentions · Addresses 2 governance problems

Vote-escrowed (VE) token models combined with buyback-and-burn mechanics and revenue distribution. The most mature financial governance mechanism in the ecosystem, pioneered by Curve Finance. VE models align token holder incentives with long-term protocol health through time-locking, creating a direct economic connection between governance participation and financial reward.

## How It Works

Vote-escrowed (VE) token models require participants to lock their governance tokens for a specified period to receive voting power. The longer the lock period, the more voting power the participant receives. A participant who locks tokens for four years receives four times the voting weight of one who locks for one year. This time-locking mechanism creates natural alignment between governance power and long-term commitment.

The buyback-and-burn component uses protocol revenue to purchase governance tokens on the open market and either burn them (reducing supply) or distribute them to VE holders. This creates a direct economic incentive for governance participation: by locking tokens and participating in governance, holders receive a share of protocol revenue. The buyback creates buying pressure that supports token price, while the distribution rewards governance participants.

Curve Finance pioneered this model with veCRV, where locked CRV tokens grant voting rights over gauge weights — the allocation of CRV emissions across different liquidity pools. This created a powerful coordination game: liquidity providers lobby veCRV holders for favorable gauge allocations, creating an entire ecosystem of "vote markets" around governance participation.

The model has been widely copied and adapted. Aerodrome (on Base) and Velodrome (on Optimism) have refined the ve(3,3) variant, which combines vote-escrow mechanics with game-theoretic incentives for cooperative behavior. Aragon has adapted VE mechanics for more general DAO governance contexts.

The economic alignment is the key insight: when governance participation directly improves financial returns, participation rates increase dramatically compared to systems where voting has no personal financial consequence.

## Problems Addressed

- [[Token Voting Failure]] — VE mechanics address the "governance as afterthought" problem by making governance participation economically rewarding, dramatically increasing participation rates and aligning voter incentives with long-term protocol health
- [[Governance Theater]] — When governance decisions (like gauge weight allocation) have direct economic consequences, participants take them seriously, reducing performative voting

## Key Actors

- **Curve** — Creator of the veCRV model, the original and most influential VE token implementation, which spawned an entire ecosystem of vote markets and governance coordination
- **Aerodrome** — Implementing refined ve(3,3) models on Base, advancing the VE model with improved game-theoretic properties
- **Aragon** — Adapting VE mechanics for broader DAO governance beyond DeFi, generalizing the model from protocol-specific applications

## Maturity Assessment

At Commodity stage (ex 4.5), VE buyback models are the most mature financial governance mechanism in the web3 ecosystem. The core design is well-understood, extensively battle-tested, and widely replicated. Multiple independent implementations exist across different chains and protocol types. The model has survived adversarial conditions, market crashes, and governance attacks, demonstrating remarkable resilience. Remaining challenges are largely in parameter optimization and adaptation to new contexts rather than fundamental design questions.

## Participant Mentions

Referenced in 4 out of 30 interviews. The mention count is notable given that VE models are often discussed in financial rather than governance contexts. Participants who mentioned them recognized the powerful insight that economic incentives for governance participation can solve the engagement problem that plagues most DAOs. However, some noted the risk of reducing governance to financial optimization, where voters maximize their yield rather than making decisions that serve the broader community.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

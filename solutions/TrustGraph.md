---
publish: true
title: "TrustGraph"
tags:
  - solutions
  - reputation
  - genesis-to-custom
created: 2026-02-10
---

> [!abstract] Reputation · Genesis → Custom
> 1 participant mention · Addresses 2 governance problems

Trust-based governance scoring that maps and quantifies trust relationships between participants. TrustGraph enables governance weight to reflect social trust rather than financial capital, creating a fundamentally different basis for decision-making power in decentralized organizations.

## How It Works

TrustGraph builds a directed graph of trust relationships between participants. Each participant can indicate varying levels of trust in other participants, across different domains. For example, Alice might highly trust Bob on technical matters but moderately trust him on treasury management. These trust signals are aggregated to create a network-wide trust map.

Governance weight is then derived from the trust graph rather than from token holdings. A participant's influence on a particular decision is determined by how much trust the community has placed in them for that domain. This creates a form of contextual, reputation-based governance where influence is earned through social trust rather than purchased through token accumulation.

The graph structure enables transitive trust — if Alice trusts Bob and Bob trusts Carol, there's an inferred (though attenuated) trust path from Alice to Carol. This allows the trust network to scale beyond direct personal relationships while maintaining a grounded connection to real interpersonal knowledge.

Several design choices distinguish TrustGraph from simpler reputation systems. First, trust is domain-specific rather than global, preventing a single dimension of reputation from dominating all governance contexts. Second, trust is directed and asymmetric — Alice trusting Bob doesn't imply Bob trusts Alice. Third, the graph is continuously updated, reflecting the dynamic nature of trust in real communities.

The approach draws on academic research in social trust networks and reputation systems, applying these concepts to the specific challenge of allocating governance power fairly in decentralized organizations.

## Problems Addressed

- [[Token Voting Failure]] — Provides an alternative basis for governance power that reflects social trust rather than financial capital, directly addressing the plutocratic dynamics of token-weighted voting
- [[Informal Power]] — Makes trust relationships explicit and measurable, transforming informal social capital into a visible and accountable governance input

## Key Actors

- **Jake Hartnell / TrustGraph** — Creator and lead developer of the TrustGraph system, designing the algorithms and interfaces for trust-based governance scoring in decentralized contexts

## Maturity Assessment

At Genesis-to-Custom (ex 2), TrustGraph has a clear design vision and early prototypes but hasn't been deployed in production governance systems. The core technical challenge is building trust elicitation interfaces that are intuitive enough for broad adoption — asking people to quantify their trust in others is socially awkward and cognitively demanding. The core social challenge is ensuring that trust graphs don't simply replicate existing social hierarchies, which would perpetuate rather than address informal power dynamics. These challenges are solvable but require careful design iteration.

## Participant Mentions

Referenced in 1 out of 40 interviews. The single mention reflects the solution's early-stage status and its technical specificity. However, the underlying desire — for governance power to reflect community trust rather than financial holdings — was expressed much more broadly. TrustGraph offers one of the most rigorous approaches to this widely-shared aspiration, and may gain attention as the limitations of token-weighted governance become more widely acknowledged.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

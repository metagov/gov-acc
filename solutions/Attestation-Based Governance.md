---
publish: true
title: Attestation-Based Governance
tags:
  - solutions
  - structural
  - product
created: 2026-03-10
type: solution
---

> [!abstract] Structural · Product
> 1 participant mention · Addresses 2 governance problems

*AI-synthesized from participant responses. Data points are faithful to source material; narrative descriptions may contain elaborations beyond what participants stated. See [[Phase 1 Results#Methodology|Methodology]]. Original responses available on request.*

Agora's protocol decouples identity from voting power through an attestation-based framework. Instead of requiring on-chain execution (which creates technical barriers), proposals are declarative attestations. Voting power is pushed into Merkle trees on a per-proposal basis, separating "who voted" from "how much power they had." This removes the OpenZeppelin Governor assumption that identity = token balance = voting weight.

## How It Works

The protocol records "this identity voted this way" rather than "this identity with X voting power voted this way." DAOs declare proposal types and who can vote through configuration. The framework can later be composed with on-chain execution but doesn't require it upfront. This dramatically lowers the barrier for communities with off-chain identities (GitHub handles, email lists, X accounts) to participate in governance.

By pushing voting power into Merkle trees, the system achieves a clean separation of concerns: the governance layer handles proposal semantics and vote recording, while the power-allocation layer is modular and configurable per proposal. This means a single DAO can run different proposal types with different voter eligibility criteria and weighting schemes — all without redeploying contracts or auditing complex governance configurations.

## Problems Addressed

- [[Technical and Legal Gaps]] — Removes the on-chain execution complexity barrier that requires proposers to compile call data and DAOs to audit governance configurations
- [[Governance Theater]] — Enables genuinely decentralized proposals by removing technical gatekeeping that concentrates proposal creation among a small set of technically sophisticated actors

## Key Actors

- **Agora (Vote Agora)** — The primary developer of the attestation-based governance protocol, actively deployed with multiple DAOs and innovating on different optimization targets compared to the OpenZeppelin standard

## Maturity Assessment

At Product stage (ex 3.0), attestation-based governance is actively deployed with multiple DAOs. Agora has moved beyond theoretical design into working implementations that challenge the dominant OpenZeppelin Governor paradigm. The protocol is innovating on fundamentally different optimization targets — accessibility and composability rather than on-chain execution guarantees — representing a meaningful architectural departure in the governance tooling landscape.

## Participant Mentions

Referenced in 1 out of 49 interviews (Jeffrey McLarty, Agora). While mentioned by only one participant, the solution represents a significant architectural innovation that challenges widely held assumptions about how on-chain governance must work.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

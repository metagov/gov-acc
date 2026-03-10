---
publish: true
title: "Green Goods"
tags:
  - solutions
  - financial
  - product
created: 2026-03-10
---

> [!abstract] Financial · Product
> 1 participant mention · Addresses 2 governance problems

*AI-synthesized from participant responses. Data points are faithful to source material; narrative descriptions may contain elaborations beyond what participants stated. See [[Phase 1 Results#Methodology|Methodology]]. Original responses available on request.*

A mobile-first, offline-capable impact reporting platform connecting on-chain attestations to capital formation. Built on Arbitrum, Green Goods uses EAS (Ethereum Attestation Service) to attest to work, bundles approved attestations into hypercerts as impact certificates, then connects to yield-generating vaults where funders provide capital and yield creates buy pressure for impact certificates.

## How It Works

Contributors attest to work using EAS. Work gets approved and bundled into hypercerts — tokenized impact certificates that represent verified contributions. Conviction voting (via Gardens integration) lets community members signal support for specific impact areas, directing resources where sustained community attention accumulates.

Yield from funder vaults is distributed for operational costs and impact certificate purchases, creating a self-sustaining loop: funders deposit capital, yield generates buy pressure for impact certificates, and contributors receive compensation proportional to their verified impact. The platform is a PWA that works fully offline with no API — it's local-first with only the on-chain aspect requiring connectivity. This design choice reflects the reality that many contributors operate in environments with unreliable internet access.

## Problems Addressed

- [[Broken Contributor Economies]] — Creates a verifiable path from contribution to compensation through the attestation → impact certificate → funding pipeline, replacing ad hoc bounty systems with structured capital formation
- [[Institutional Amnesia]] — On-chain attestation trail creates an immutable record of what was done, by whom, and what outcomes resulted, preserving organizational knowledge that would otherwise be lost to contributor turnover

## Key Actors

- **Greenpill Dev Guild** — The development team building and maintaining the Green Goods platform
- **Green Goods** — The platform itself, deployed on Arbitrum and actively used by Greenpill local chapters
- **Gardens** — Provides the conviction voting mechanism integrated into the platform for community-driven resource allocation

## Maturity Assessment

At Product stage (ex 3.0), Green Goods is deployed on Arbitrum and actively used by Greenpill local chapters for impact reporting and contributor compensation. The platform combines several mature primitives (EAS attestations, hypercerts, conviction voting) into a coherent product that addresses the full lifecycle from work verification to capital allocation. The offline-first architecture demonstrates thoughtful product design for real-world deployment conditions.

## Participant Mentions

Referenced in 1 out of 49 interviews (Afolabi Aiyeloja, Greenpill). The solution stands out for its end-to-end integration of attestation, impact certification, and capital formation — an unusually complete implementation of the contributor economy stack.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

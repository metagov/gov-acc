---
publish: true
title: "Token-as-Equity"
tags:
  - solutions
  - financial
  - custom
created: 2026-02-10
---

> [!abstract] Financial · Custom
> 3 participant mentions · Addresses 2 governance problems

*AI-synthesized from participant responses. Data points are faithful to source material; narrative descriptions may contain elaborations beyond what participants stated. See [[Phase 1 Results#Methodology|Methodology]]. Original responses available on request.*

Creating on-chain guarantees for claims over infrastructure revenue through programmatic distributions. Token-as-Equity treats governance tokens as equity-like instruments with real economic rights, bridging the gap between crypto-native governance and traditional corporate finance — and addressing the fundamental question of what a governance token actually represents.

## How It Works

Most governance tokens suffer from an existential ambiguity: they grant voting power but no clear economic rights. Unlike equity in a corporation (which represents ownership of assets and a claim on future earnings), governance tokens typically have no legal or programmatic claim on protocol revenue. Token-as-Equity addresses this by creating on-chain mechanisms that give token holders explicit, enforceable economic rights.

The core mechanism involves programmatic revenue distribution. When a protocol generates revenue (through fees, interest, or other sources), a defined portion is automatically distributed to token holders through a smart contract. This isn't a discretionary dividend — it's a programmatic guarantee embedded in the protocol's code. Token holders have a claim on revenue that exists independently of any governance vote or foundation decision.

More sophisticated implementations include multiple types of economic rights. Some token-as-equity models differentiate between voting rights, revenue rights, and liquidation rights (the right to a proportional share of treasury assets if the organization dissolves). These rights can be bundled or unbundled, creating flexible economic structures.

The approach also opens the door to traditional financial analysis of governance tokens. If tokens have defined cash flow rights, they can be valued using discounted cash flow models, making governance token valuation more rigorous and reducing speculative excess. This creates a healthier market environment where token prices reflect fundamental value rather than pure narrative.

The legal dimension is significant. Token-as-equity models sit in a gray area between unregistered securities and utility tokens. Some implementations use legal wrappers (foundations, cooperatives, or special-purpose vehicles) to provide regulatory clarity. Others rely on the argument that programmatic revenue distribution is fundamentally different from corporate dividends.

## Problems Addressed

- [[Token Voting Failure]] — Gives governance tokens genuine economic value beyond speculation, attracting participants who care about the protocol's long-term revenue generation rather than short-term price appreciation
- [[Technical and Legal Gaps]] — Pioneers new legal and economic structures for on-chain organizations, bridging the gap between crypto-native governance and established legal frameworks for economic rights

## Key Actors

- **ivan / Aragon** — Developing token-as-equity frameworks within the Aragon ecosystem, creating infrastructure for on-chain economic rights and revenue distribution
- **Gbiri / Aragon** — Developing ownership tokens through Aragon that give holders explicit economic rights and governance power, bridging token-based governance with equity-like ownership structures
- **a16z (framework)** — Publishing frameworks for how tokens can incorporate equity-like properties while navigating regulatory constraints, drawing on their experience in both venture capital and crypto governance

## Maturity Assessment

At Custom stage (ex 2.5), Token-as-Equity has a clear conceptual framework and some early implementations but faces significant regulatory uncertainty. The technical infrastructure for programmatic revenue distribution exists (VE models already implement a version of it), but the legal framework for tokens-with-economic-rights is still developing. Different jurisdictions are taking different approaches, creating a fragmented regulatory landscape. The solution will likely reach Product stage once regulatory clarity improves in major jurisdictions.

## Participant Mentions

Referenced in 3 out of 49 interviews. The modest mention count reflects the specialized, finance-focused nature of this solution. However, the underlying question — what economic rights should governance tokens convey? — was implicitly present in many more conversations about token voting and governance incentives. As the space matures and regulatory frameworks develop, Token-as-Equity is likely to become increasingly central to governance design discussions.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

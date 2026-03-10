---
publish: true
title: "Reference Identifiers"
tags:
  - solutions
  - knowledge
  - custom
created: 2026-02-10
---

> [!abstract] Knowledge Infrastructure · Custom
> 2 participant mentions · Addresses 2 governance problems

*AI-synthesized from participant responses. Data points are faithful to source material; narrative descriptions may contain elaborations beyond what participants stated. See [[Phase 1 Results#Methodology|Methodology]]. Original responses available on request.*

A system for tagging and cross-referencing knowledge objects across Discord, forums, and GitHub — creating connective tissue between fragmented governance conversations. Reference Identifiers (RIDs) enable search and retrieval across platforms, addressing the reality that governance knowledge is scattered across dozens of tools with no shared namespace.

## How It Works

Reference Identifiers assign persistent, unique tags to governance knowledge objects — proposals, decisions, discussion threads, research documents, meeting notes, and any other artifact that carries governance-relevant information. These tags follow a consistent format that can be recognized and linked across platforms.

The core insight is that governance conversations in DAOs are fragmented by platform. A discussion might start in Discord, get formalized in a forum post, be voted on through Snapshot, and have its implementation tracked on GitHub. Without a shared reference system, these related pieces of information become disconnected — and the governance knowledge embedded in their connections is lost.

RIDs create a graph of governance knowledge by linking related objects across platforms. When a proposal references a previous decision, the RID system makes that connection explicit and traversable. When a Discord conversation surfaces an important insight, it can be tagged and later retrieved when a related proposal is being drafted.

The system is designed to work across existing platforms without requiring participants to switch tools. Tags can be embedded in Discord messages, forum posts, and GitHub issues using a lightweight syntax that the RID system recognizes and indexes. This pragmatic approach acknowledges that governance tool migration is extremely difficult — it's easier to layer a reference system on top of existing tools than to replace them.

## Problems Addressed

- [[Institutional Amnesia]] — Creates a searchable, cross-platform knowledge base that persists across participant turnover, making governance history accessible to newcomers and long-time members alike
- [[Informal Power]] — Reduces the information asymmetry that sustains informal power by making governance knowledge discoverable and accessible to anyone, not just those who were "in the room" for key discussions

## Key Actors

- **Metagov KOI group** — The Knowledge Object Identification working group at Metagov, designing the RID specification and building reference implementations for cross-platform governance knowledge management

## Maturity Assessment

At Custom stage (ex 2.5), Reference Identifiers have a clear specification and early prototypes but face significant adoption challenges. The value of a reference system increases with network effects — it becomes truly useful only when a critical mass of governance objects are tagged and linked. Bootstrapping that critical mass in decentralized organizations, where adoption of any new tool requires broad buy-in, is the primary challenge. The Metagov KOI group's approach of building on existing platforms rather than requiring migration is strategically sound but means adoption depends on platform-specific integrations.

## Participant Mentions

Referenced in 2 out of 50 interviews. The low mention count likely reflects both the niche nature of knowledge infrastructure and the reality that most governance practitioners are focused on immediate decision-making challenges rather than long-term knowledge management. However, those who mentioned RIDs understood them as foundational infrastructure — the kind of thing that, once built, would improve the effectiveness of every other governance tool.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

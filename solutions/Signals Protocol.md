---
publish: true
title: "Signals Protocol"
tags:
  - solutions
  - sensemaking
  - custom
created: 2026-02-10
---

> [!abstract] Sensemaking · Custom
> 4 participant mentions · Addresses 3 governance problems

*AI-synthesized from participant responses. Data points are faithful to source material; narrative descriptions may contain elaborations beyond what participants stated. See [[Phase 1 Results#Methodology|Methodology]]. Original responses available on request.*

Board-based on-chain coordination using ERC-20 time-locks to signal support intensity. Signals Protocol creates a pre-governance layer where participants indicate priority and commitment levels before formal proposals are drafted, filtering signal from noise in governance attention.

## How It Works

Signals Protocol introduces a structured signaling phase before the traditional propose-discuss-vote governance cycle. Participants lock ERC-20 tokens to indicate support for a particular topic, initiative, or direction. The amount locked and the duration of the lock together determine signal strength — this captures both the breadth of support (how many people signal) and its intensity (how much they're willing to commit).

The mechanism operates through "boards" — thematic spaces where signals are collected and aggregated. A board might focus on treasury allocation priorities, protocol upgrade directions, or ecosystem funding areas. Within each board, participants can distribute their signals across multiple options, creating a rich priority landscape rather than a binary yes/no vote.

Critically, signaling is not voting. Signals don't directly trigger governance actions — they inform proposal creation. If a particular direction accumulates strong signals, proposal authors can invest time drafting a detailed proposal with confidence that community interest exists. This solves the cold-start problem that plagues many governance systems: well-intentioned participants draft elaborate proposals that nobody votes on because they didn't match community priorities.

The time-lock component prevents flash signaling (the signaling equivalent of flash loans) and creates a cost to participation that filters for genuine interest.

## Problems Addressed

- [[Token Voting Failure]] — Creates a more nuanced expression of preference than binary votes, capturing priority and intensity alongside direction
- [[Voting Fatigue]] — Reduces unnecessary formal votes by pre-filtering which topics actually have community interest and support before proposals are drafted
- [[Lack of Clear Purpose]] — Helps organizations discover their priorities through collective signaling rather than relying on core team assumptions about what the community cares about

## Key Actors

- **Lighthouse Labs** — The primary developer of the Signals Protocol, building the board-based coordination infrastructure and the ERC-20 time-lock signaling mechanics

## Maturity Assessment

At Custom stage (ex 2.5), Signals Protocol has a coherent design and early implementations but has not yet seen widespread adoption. The concept of pre-governance signaling is well-understood, but the specific mechanics — board design, time-lock parameters, signal aggregation — are still being refined through experimentation. The challenge is bootstrapping enough participation in the signaling phase to generate meaningful data before governance decisions need to be made.

## Participant Mentions

Referenced in 4 out of 40 interviews. The mention count suggests meaningful awareness among governance practitioners. Participants who referenced it were typically concerned with the "garbage in, garbage out" problem of governance — if proposals don't reflect community priorities, even perfect voting mechanisms will produce unsatisfying results. Signals Protocol was seen as addressing the upstream problem of priority-setting rather than the downstream problem of decision-making.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

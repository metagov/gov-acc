---
publish: true
title: "Conviction Voting"
tags:
  - solutions
  - voting-reform
  - product
created: 2026-02-10
---

> [!abstract] Voting Reform · Product
> 6 participant mentions · Addresses 3 governance problems

Conviction voting replaces discrete voting events with continuous preference signaling, where vote weight increases the longer a participant holds their position. Rather than snapshot-based governance where whales can swoop in at the last minute, this mechanism rewards sustained engagement and genuine conviction. It represents one of the most significant departures from traditional token-weighted voting.

## How It Works

In a conviction voting system, participants allocate tokens to proposals they support, and the voting power of those allocations grows over time according to a decay function. The longer tokens remain staked on a proposal, the more "conviction" accumulates. When a proposal's accumulated conviction crosses a dynamically calculated threshold — typically based on the amount of funds requested relative to the total pool — the proposal passes automatically.

This creates several important dynamics. First, it eliminates the tyranny of voting deadlines, which tend to favor actors who can mobilize capital quickly. Second, it makes vote buying economically impractical because an attacker would need to sustain their position over time rather than flash-vote. Third, it allows participants to distribute their attention across multiple proposals simultaneously, reducing the cognitive burden of governance.

The threshold mechanism is particularly elegant: proposals requesting small amounts need less conviction to pass, while large funding requests require broader and more sustained support. This creates a natural proportionality between governance effort and resource allocation.

## Problems Addressed

- [[Token Voting Failure]] — Directly counters plutocratic dynamics by weighting time commitment alongside capital, making last-minute vote manipulation economically irrational
- [[Voting Fatigue]] — Eliminates discrete voting events in favor of passive, continuous signaling that requires less active attention from participants
- [[Informal Power]] — Reduces the advantage of coordinated blocs that can mobilize quickly for snapshot votes, leveling the playing field for smaller but committed participants

## Key Actors

- **Gardens** — The primary implementation of conviction voting in production, providing a framework for community-driven resource allocation
- **Various DAOs experimenting** — Multiple organizations have piloted conviction voting mechanisms, contributing to the growing body of practical knowledge about its strengths and limitations

## Maturity Assessment

At Product stage (ex 3.5), conviction voting has moved well beyond theoretical design into working implementations. Gardens has demonstrated the model in production environments, and several DAOs have adopted or experimented with variants. However, it has not yet reached commodity status — adoption remains concentrated among governance-forward organizations, and parameter tuning (decay rates, threshold curves) still requires significant expertise.

## Participant Mentions

Referenced in 6 out of 27 interviews. This high mention count reflects conviction voting's status as perhaps the most well-known alternative to simple token voting. Participants frequently cited it as a proven example that better voting mechanisms are possible, even when discussing other solutions.

---

See also: [[solutions/index|All Solutions]] · [[Phase 1 Results]]

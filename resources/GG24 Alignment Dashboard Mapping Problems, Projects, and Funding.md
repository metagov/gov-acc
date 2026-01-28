---
title: "GG24 Alignment Dashboard: Mapping Problems, Projects, and Funding"
source: "https://gg24-analysis.fly.dev/"
author:
published:
created: 2026-01-26
description:
tags:
  - "gitcoin"
  - "funding mechanism"
  - "grant"
---
---

GG24 is Gitcoin’s largest experiment in problem-first public goods funding, where each domain defines the ecosystem-level gaps it exists to solve. This dashboard brings those problems, the projects addressing them, and the distribution of capital into one place. It helps round operators, donors, and ecosystem stewards see how funding decisions align with the strategic priorities of the Ethereum community.

**📊 Analysis Scope:** This is a WIP analysis covering GG24 rounds that have completed allocations.

**💬 We Welcome Your Feedback:** If you are a round operator, a domain SME, or a project owner, we welcome your feedback on:

- What additional questions should we investigate
- Inputs on how problems have been defined for each round
- Mapping of projects to problems

📄 [Feedback Form](https://forms.gle/3kDCzjMrUZA7RDoG6)

The Developer Tooling & Infrastructure QF Round is dedicated to strengthening the foundation of the Ethereum ecosystem. With a $200,000 matching pool, this round supports the open-source builders, client teams, and researchers whose work ensures that Ethereum remains secure, scalable, and accessible for developers worldwide.

Quadratic Funding

$200,000

48

**Explore how projects align with funding priorities.** This table shows each funded project alongside its allocated amount and problem alignments. Projects are sorted by funding amount (highest first) to help you quickly identify the most heavily funded initiatives. The **Primary Problem Alignment** indicates the main problem area each project addresses, while **Secondary Problem Alignment** shows additional problem areas where the project may contribute.

**Compare project engagement with funding allocation across problem areas.** Each bubble represents a problem area, positioned by the number of participating projects (horizontal axis) and total attributed funding (vertical axis). The bubble size indicates the average funding per project—larger bubbles mean higher average funding. **Key insights:** Problems in the upper-right have both high engagement and high funding; problems in the upper-left receive significant funding with fewer projects; problems in the lower-right have many projects but lower total funding.

**Visualize how funding flows through problem areas to individual projects.** This Sankey diagram shows the complete funding pathway: total funding first distributes across problem areas (middle column), then flows to specific projects (right column) based on their alignments. **How to read:** The width of each flow represents the funding amount. Primary alignments (light purple) receive 60% of a project's funding, while secondary alignments (light yellow) receive 40%. Use this to identify which problem areas attract the most funding and how projects receive funding through their problem alignments.

All

## Problem Definitions

The problem definitions below are grounded in the domain’s sensemaking research and the round’s eligibility guidance. They describe the systemic gaps the domain seeks to address, framed at the right level of abstraction to remain stable across rounds while still allowing clear classification of diverse projects.

keyboard\_arrow\_right

🔍 Underfunded Core Infrastructure

### Underfunded Core Infrastructure

**Problem ID:**`devtool_01`

**Domain:** Developer Tooling & Core Infrastructure

---

#### Problem Statement

Critical Ethereum clients, compilers, libraries, and shared infrastructure remain structurally underfunded despite securing and enabling applications worth billions. Maintainers face unstable resource availability and lack predictable support, forcing tradeoffs between commercial work and sustaining essential public goods.

#### Why It Matters

If core infrastructure remains fragile or under-resourced, developer confidence declines, security incidents rise, and the entire stack becomes less resilient. Long-term ecosystem growth slows as foundational components struggle for maintenance and innovation.

#### Solution Shape

Sustained funding for clients, compilers, languages, critical libraries, and protocol-aligned infrastructure. Support for long-term maintainers, modernization efforts, and improved reliability of ecosystem-wide dependencies.

#### Positive Signals

• long-term maintenance of critical infra • core client or compiler improvements • high dependency usage across the ecosystem • sustainability roadmap for public goods • active contributors maintaining essential libraries

#### Measurement Rubric

**Score 1:** Tangential reference to infrastructure work with no clear relation to core dependencies.

**Score 2:** Touches infrastructure concerns but work focuses mainly on peripheral components.

**Score 3:** Provides meaningful improvements to ecosystem libraries or tooling with moderate dependency relevance.

**Score 4:** Directly strengthens widely used infrastructure with clear maintenance or innovation value.

**Score 5:** Essential, ecosystem-critical infrastructure work with high dependency impact and long-term sustainability benefits.

keyboard\_arrow\_right

🔍 Fragmented Developer Experience

### Fragmented Developer Experience

**Problem ID:**`devtool_02`

**Domain:** Developer Tooling & Core Infrastructure

---

#### Problem Statement

Developers face complex, fragmented workflows across languages, frameworks, debugging tools, and testing environments. Tooling is inconsistent, lacks standardization, and often depends on volunteer-maintained components that evolve slowly or lack coordination.

#### Why It Matters

Fragmentation slows developer onboarding, increases errors, and restricts the growth of Ethereum’s builder base. A poor developer experience pushes teams toward centralized or permissioned solutions that compromise decentralization.

#### Solution Shape

Unified development environments, integrated toolchains, testing frameworks, debugging utilities, and language/tooling improvements that simplify and accelerate Ethereum development.

#### Positive Signals

• workflow simplification • unified toolchain or framework • debugging or testing improvements • usability enhancements for developers • language or compiler UX upgrades

#### Measurement Rubric

**Score 1:** Minimal connection to improving developer workflows or usability.

**Score 2:** Single-purpose tooling with limited scope or unclear impact on developer experience.

**Score 3:** Improves part of the development lifecycle with moderate usability benefits.

**Score 4:** Significantly improves developer workflows with integrated or widely applicable tooling.

**Score 5:** Transforms the end-to-end developer experience with cohesive, high-impact tooling used across the ecosystem.

keyboard\_arrow\_right

🔍 Security Gaps and Safety Risks

### Security Gaps and Safety Risks

**Problem ID:**`devtool_03`

**Domain:** Developer Tooling & Core Infrastructure

---

#### Problem Statement

Developers lack accessible, effective tools to prevent vulnerabilities, validate assumptions, and detect security issues early. Security-critical tooling is underfunded, leaving gaps in auditing, verification, fuzzing, and safe development practices.

#### Why It Matters

Security failures cause loss of funds, erode trust, and slow Ethereum adoption. Without strong security tooling, developers rely on permissioned stopgaps that weaken decentralization and increase systemic risk.

#### Solution Shape

Static analysis tools, fuzzers, formal verification utilities, secure-by-default frameworks, wallet safety tools, and developer-focused security automation.

#### Positive Signals

• prevention of common vulnerabilities • security automation • analysis or verification tooling • wallet or key management safety improvements • protocol-level security enhancements

#### Measurement Rubric

**Score 1:** Security impact is unclear or incidental.

**Score 2:** Security benefits exist but are narrow or secondary to other goals.

**Score 3:** Provides meaningful security improvements for a specific tool or workflow.

**Score 4:** Widely applicable security tooling that materially reduces developer or user risk.

**Score 5:** Core security infrastructure or tooling that significantly strengthens safety across the entire ecosystem.

keyboard\_arrow\_right

🔍 Scalability and Protocol Evolution Gaps

### Scalability and Protocol Evolution Gaps

**Problem ID:**`devtool_04`

**Domain:** Developer Tooling & Core Infrastructure

---

#### Problem Statement

Ethereum’s scaling roadmap requires constant advancement in clients, languages, rollup tooling, data availability systems, statelessness, account abstraction, and protocol readiness. Many of these areas lack the necessary research-to-implementation tooling bridge.

#### Why It Matters

Without strong tooling and infrastructure aligned to the protocol roadmap, scaling improvements stall, developers cannot adopt new capabilities, and fragmentation across L2s increases.

#### Solution Shape

Tooling that supports rollups, sharding, EIPs, execution environments, AA flows, and roadmap-aligned improvements. Research-to-production toolchains that enable adoption of new protocol features.

#### Positive Signals

• roadmap-aligned tooling • support for rollups or sharding • EIP implementation readiness • account abstraction utilities • statelessness or data-availability tooling

#### Measurement Rubric

**Score 1:** Unclear relevance to scalability or protocol evolution.

**Score 2:** Minor or indirect benefits to roadmap-aligned work.

**Score 3:** Provides useful tooling for a scaling component or future protocol feature.

**Score 4:** Directly enables adoption of key roadmap features across the ecosystem.

**Score 5:** Critical enabler of protocol evolution or scaling, with ecosystem-wide utility.

keyboard\_arrow\_right

🔍 Ecosystem Data and Observability Gaps

### Ecosystem Data and Observability Gaps

**Problem ID:**`devtool_05`

**Domain:** Developer Tooling & Core Infrastructure

---

#### Problem Statement

Developers lack accessible, reliable, open-source data analytics, indexing, observability tooling, and onchain insights. Existing data systems are fragmented or proprietary, limiting visibility into application behavior, network performance, and developer productivity.

#### Why It Matters

Poor observability slows debugging, increases operational risks, and reduces developers’ ability to build reliable and scalable applications. A lack of open analytics tools also restricts research and transparency across the ecosystem.

#### Solution Shape

Open data platforms, indexing systems, analytics APIs, monitoring tools, and observability infrastructure that help developers understand onchain behavior and system performance.

#### Positive Signals

• onchain analytics tooling • indexing or data APIs • observability improvements • performance monitoring • developer insights dashboards

#### Measurement Rubric

**Score 1:** Minimal or unclear contribution to data or observability.

**Score 2:** Narrow data features with limited developer relevance.

**Score 3:** Useful analytics or observability tooling addressing specific developer needs.

**Score 4:** Broadly applicable data or monitoring infrastructure that improves reliability and insight.

**Score 5:** Ecosystem-wide observability or data infrastructure that materially enhances transparency and developer capability.

keyboard\_arrow\_right

🔍 Sustainability and Talent Drain

### Sustainability and Talent Drain

**Problem ID:**`devtool_06`

**Domain:** Developer Tooling & Core Infrastructure

---

#### Problem Statement

Critical maintainers lack stable resources and must balance public goods work with commercial activity. Many teams lack fundraising support or business development capabilities. This results in unstable roadmaps, burnout, and a persistent risk of maintainers abandoning essential public goods.

#### Why It Matters

If key maintainers leave or reduce involvement, the entire ecosystem becomes brittle. Innovation slows, technical debt accumulates, and fragmentation increases as teams rebuild tools independently.

#### Solution Shape

Funding models, toolkits, and support structures that strengthen long-term project health. Systems that help maintainers focus on technical work rather than survival, including sustainable pathways for OSS teams.

#### Positive Signals

• maintainer support model • sustainability roadmap • long-term OSS commitments • contributor growth • community governance improvements

#### Measurement Rubric

**Score 1:** No clear relevance to maintainer sustainability or talent retention.

**Score 2:** Minor contribution to team longevity or contributor support.

**Score 3:** Provides moderate support for ongoing development or maintainer health.

**Score 4:** Creates strong and durable sustainability mechanisms for teams.

**Score 5:** Directly prevents talent drain and meaningfully strengthens long-term viability of core infrastructure.
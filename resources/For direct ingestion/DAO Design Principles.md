---
title: "DAO Design Principles"
source: "https://plaid-cement-e44.notion.site/DAO-Design-Principles-1a8f325a993948e185adf2fbc553e845"
author:
  - "[[plaid-cement-e44 on Notion]]"
published:
created: 2026-03-26
description: "A tool that connects everyday work into one space. It gives you and your teams AI tools—search, writing, note-taking—inside an all-in-one, flexible workspace."
tags:
  - "clippings"
---
🍥

[EthDenver Presentation 2024](https://drive.google.com/file/d/1usz9s8xFme_BjZ6JyQ_U3FLr-VQS1qvc/view?usp=sharing)

## DAO Design Principles

Use magic numbers for designing teams

How big should a team or Council be?

Magic numbers are real; Target team size of of 7-14, not bigger

There seems to be an upper limit of ~50 full(ish) time contributors, which should inform the number of Councils that can be supported (~5)

Most DAOs evolve into an end state of ~5 critical business functions

Technical advisory or evaluation

Treasury management

Finance

Grants program

Governance operations

Define power structures

Power structures cannot be avoided. It is better to acknowledge that and publicly define them than to pretend they don’t exist. Power can be held accountable only when it is transparent.

If it is unclear who has decision making power or who is an expert, the community will fight to define this themselves. This process creates a toxic power struggle at the social layer.

Leadership roles should be fluid, flexible, and revokable (can be removed from leadership position) at any time. Leadership roles can be indicated (informally) or elected (formally.)

When expertise is required, the experts should either be empowered to make decisions or should be easily identifiable by non-experts so non-experts can leverage their expertise.

Delegate convex decisions, make concave decisions directly

When is a Council or Board needed?

“When decisions are convex, decentralizing the process of making that decision can easily lead to confusion and low-quality compromises.” [Vitalik](https://www.figma.com/exit?url=https%3A%2F%2Fvitalik.eth.limo%2Fgeneral%2F2022%2F09%2F20%2Fdaos.html)

Convex decisions should be delegated to smaller groups of experts (Councils or Boards)

Examples: Evaluating individual grant applications, setting technical milestones, etc.

What is the difference between a Council and a Board?

Councils make decisions; Boards only advise others on making decisions and are used when specific expertise is required

The full DAO should still make [concave](https://vitalik.ca/general/2022/09/20/daos.html) decisions!

Examples: Approving budgets, electing candidates, ratifying frameworks, etc.

Distinguish between representatives and contributors

What roles should be elected?

🗳️ Representatives are delegated rights that tokenholders would otherwise exercise or play a role the Foundation otherwise would. They should be elected and held accountable as public officials

⚒️ Contributors merely do work but do not take on tokenholder responsibilities. Contributors should not be elected as they don’t need to be held to the same level of public scrutiny

Design for resilience to churn, not resistance to it

How should DAOs deal with churn?

High context delegates and contributors are a precious resource

DAOs are inherently part-time, highly flexible working environments, which means they are also likely to be high turnover environments. DAOs should try to retain high impact/context delegates but should also design systems that are resilient to any one of them leaving.

❗Leads should never be a central point of failure. Leads should be non-voting members that do not evaluate grants, set strategy, or prioritize work themselves. Leads coordinate, direct, and facilitate the members of their teams. They set up the processes and infrastructure required to allow anyone to step in and contribute effectively.

🔌 Distribute power among many contributors. Community roles should be spread out over many contributors rather than concentrated among 1-3 people. It’s better to have many NERDs than one community manager that can censor people.

Introducing a role as a singular position of power will make it difficult to spread that power among multiple people in the future.

🤚 Establish a talent pipeline + scalable onboarding flows. The Collective’s resignation policy is 7 days; the Collective needs to be able to replace any community leader within 7-14 days.

Avoid the principal-agent problem

Who decides?

Principal-agent problems make organizations work across “us vs. them” lines. DAOs are already managing tenuous relationships among different stakeholders and this makes it worse

⚠️ This occurs everywhere in DAOs but it commonly shows up in waterfall compensation schemes

Community-led initiatives should not be dependent on core teams and core teams should not be required to support community mandated initiatives

Teams should have as much autonomy over their own operations and budgets as possible

Make data driven decisions

How does the DAO make decisions and which decisions should the DAO make?

Some DAOs have relied fully on subjective human decision making, which has led to sub-optimal results. In response, other DAOs have tried to remove humans from the equation entirely, but this has frequently resulted in a low velocity DAO and/or ossified protocol

The number of subjective decisions voters are asked to make should be reduced. Instead, humans should be empowered to override otherwise algorithmic decisions. This usually requires abstracting the level of information the DAO votes on from more granular (individual project evaluation) to higher level decisions (selection of impact metrics)

Examples: calculate over attestation graphs, develop formulaic strategies, and leverage smart defaults

More objective economic frameworks should be developed to reduce self-preservation tendencies that accrue value for the DAO at the expense of the protocol. This principle is usually lacking in DAO treasury allocation strategies, which are usually managed subjectively

Value outputs, not inputs

How does the DAO value work and drive results?

Working Groups don’t usually work. The DAO should instead support specific initiatives, to be completed by the most qualified party, not teams asking for support to do under-defined work.

Instead, decision making about the work to be done should be separated from decision making about the team to complete it ([MIssions](https://gov.optimism.io/t/missions-v2-season-5/6897))

Batch proposals that don’t allow for valuation of specific outputs should be avoided

To the extent possible, work should be valued based on output/impact, and should not be valued on hourly, or other, inputs

Example: See the [Impact = Profit Framework](https://plaid-cement-e44.notion.site/f71c54fc0c3242d190eb7ab06807712c?pvs=25), which is a guideline for RetroPGF impact evaluation

Redundancy creates waste, not competition

How can the DAO promote performance?

A few DAOs have promoted redundant working groups to promote competition but this hasn’t really ever worked well.

Overlapping responsibilities between working groups often results in various process handovers that create inefficiencies and a worse experience for users/contributors

Its unpopular to publicly “fire” someone via governance proposal

Fragmentation can be difficult to navigate for external contributors

External competition seems to work much better than internal competition

✳️ Competitive RFP processes can create healthy competition via performance based accountability

Service Providers competing to execute well scoped start-to-finish initiatives with operational autonomy appears to be an effective model

However, competitive advantages should never be outsourced and mission critical deliverables should never rely on the execution of any one team

Scope should be narrow, not broad

How should the DAO set scopes?

Most working group mandates are extremely broad and oftentimes encompass things that are completely out of the scope of their mandate. These working groups often fail or get repeatedly reorganized

Broad scopes create room for inefficient budgeting or outright fraud

“Meta-workstreams,” which combine multiple teams under one function, don’t usually work in practice. They introduce additional coordination costs, which are already higher in decentralized environments

It is very rare to see work organized into cross-functional pods for the same reason

🎯 Instead, scopes, mandates, and RFPs should be narrowly scoped

Scale via public goods rather than public services

How can the DAO effectively scale work?

Providing service across the DAO suffers from diseconomies of scale as each group’s needs are nuanced and it’s hard to manage capacity across many stakeholders

The DAO as a whole pays for these services, not the individual teams that use them, disrupting the usual accountability mechanism (a form of the principal-agent problem)

However, provisioning public infrastructure to the DAO can effectively scale work across teams

Example:

A team providing data services to other teams in the DAO is likely to struggle

A team building data infrastructure that any other team can use to do their own data analytics is more likely to succeed

Achieve alignment through action not artifacts

How can the DAO achieve strategic alignment?

Many DAO structures are established without any consideration for what these structures should accomplish

Later, strategic artifacts are created to retroactively align the DAO’s efforts

Attempts at strategic alignment are usually made via artifacts that results in more bureaucracy, not more alignment

Strategic alignment must be designed into DAO operations themselves, so merely taking action within the system is inherently aligned

Example:

Grading proposals on a scale of 1-10 based on how much they align with a stated goal vs.requiring proposals to be rank ordered under a specific goal until the corresponding budget runs out
---
title: "DAO Decision Design Framework (Working Model)"
source: "https://plaid-cement-e44.notion.site/DAO-Decision-Design-Framework-Working-Model-1205831e345280bc963dec5d236a4ae6"
author:
  - "[[plaid-cement-e44 on Notion]]"
published:
created: 2026-03-26
description: "A tool that connects everyday work into one space. It gives you and your teams AI tools—search, writing, note-taking—inside an all-in-one, flexible workspace."
tags:
  - "clippings"
---
🔃

This is a working model used by the Optimism Foundation to reason about metagovernance design. This framework can be used to approach the design of the individual decision modules represented in the [Decision Diagram](https://www.figma.com/board/iXqyKmLJeBeplKpJBHDI7G/PUBLIC%3A-Optimism-Decision-Diagram-Working-Model?node-id=0-1&t=GJQguZkCPYWLX7q0-1).

Decentralization Type → How often to we ask this question? (inspired by [Vitalik](https://vitalik.eth.limo/general/2022/12/05/excited.html))

If

Interoperability

→ This decision should be made on an infrequent basis. Friction should be high (the process may be intentionally rigid) so that change is possible only in limited circumstances

Allow for changes every 1-3 years

Examples: Intents, amendments to foundational governing documents (the Law of Chains, the Constitution, etc.)

Decision Stakes → With what level of fidelity do we need to answer this question?

Low stakes or

Reversible

decisions:

Voting is a sufficient aggregation method to determine rough consensus or the prevailing majority stance

Goal: When it is safe to try anything, determine the prevailing majority stance

High stakes or

Irreversible

decisions

True consensus is needed, so voting will be a sub-optimal aggregation method

Aggregation methods that optimize for information aggregation should be considered (non-voting mechanism like NLP, deliberative processes, etc.)

Goal: When lossless compression is needed, more costly and time-intensive processes may be needed

Decision Complexity → How is this question asked?

If

univariate

→ Governance can guess at what the singular parameter should be

The question can be phrased at a low level of granularity. For example, “What is the rate at which inflation should be set?”

If

multivariate

(simultaneous effect of multiple variables) → Governance should only be asked to choose from a list of complete outcomes as individual variables interact with each other and cannot be assessed in isolation.

The question should be phrased as a high level of granularity. For example, “What is the best formula for determining Citizenship?” or “Which of the proposed outcomes is the best?”

Decision Type → How is this question answered?

Measurement

→ This type of question is best answered through experimentation, data collection and observation. With adequate data, this is best answered by a computer

Human judgment is only necessary where the tools of measurement do not suffice

The type of human judgment that is necessary is not a judgment based on values, but based on expertise and context - filling in the blanks of missing data. Individuals with the necessary expertise and context to make this judgment accurately are needed.

Example of a measurement question:

“What is the impact of each project?”

For a given definition of impact there is some truth about the relative impact of different projects. With adequate data, this is measurable by a computer. Without adequate data, humans with the relevant expertise/context must fill in the blanks.

Prediction

→ Prediction questions can only be answered in hindsight, and are best expressed using probabilities

Prediction questions have an objective truth but it is not knowable yet. Therefore we can only say in hindsight if an answer to a prediction question was right.

Prediction questions can be answered as a binary or as a probability. Using probabilities allows us to give more nuanced answers. In cases where paths are non-exclusive, using probabilities for prediction can allow us to take action more effectively.

For example, one prediction question might be about which different initiatives will positively impact sequencer revenue in the future.

Answering the question in terms of probabilities would allow the Collective to distribute resources on the basis of the probability, rather than putting all resources behind only those predictions with a very high probability of coming true.

Prediction markets are one way that a large group of people can be used to derive probabilities of future predictions (see also [futarchy](https://mason.gmu.edu/~rhanson/futarchy.html))

Examples of a prediction question:

“What strategy will have the biggest long-term impact on sequencer revenue?”

“Which Missions will drive the most progress towards Intent 3A?”

You can also think of if→ then statements as prediction problems

Judgement

→ There is no objective answer; this question must rely on human value judgements

This type of question is uniquely human - any human can answer it and there is no right or wrong answer. It is not up to any designated party to decide whose values matter.

It is important to separate these types of questions from measurement-type questions (sometimes one question has a measurement and judgement portion) — because otherwise individuals may conflate the two and use values to answer a measurement type question.

Voters should express their value directly rather than voting for people, projects, or proposals they believe embody these values.

Example of a judgement question:

“What is the value of open source to the Collective?”

“What is important to you as a Citizen?”

Decision Space → Who answers this question?

If

convex

→ high expertise required, delegate the decision to a smaller group of experts or derive from data

Convex decisions suffer from tradeoffs caused by large groups of non-experts compromising. They are better suited to delegation to smaller groups of experts or data-driven decision making.

There are two main ways to derive expertise:

Delegation to human experts (appropriate for [judgement decisions](https://plaid-cement-e44.notion.site/c222e307222b468c8316136afe09cad2?pvs=25#a4053de113b74439b345a23fe87a5deb)). Experts may be needed when:

Leadership level vision required

Professional level analytics required

High context on Collective Values required

Derive from data (appropriate for [measurement decisions](https://plaid-cement-e44.notion.site/c222e307222b468c8316136afe09cad2?pvs=25#47168545a6c7440ca5e541ce54208ab8)). Examples:

Metrics

Formulas

Analytics

If

concave

→ low expertise required, more guesses will result in a better decision

Concave decisions benefit from more inputs or more people guessing and are, therefore, better suited to as many decision makers as possible and do not require specialized expertise

Examples: Individual parameters (ie. %) and budgets

Influence on the system → How much power is in this decision? (inspired by [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/))

Levels 1-4 - high influence

→ decision making rights should be restricted to trusted parties and competition should be incentivized among these parties to balance power

Levels 5-6 - medium influence

→ decision making rights should be restricted to select parties with a proven track record, and accountability mechanisms should be established to balance power

Levels 7-8 - moderate influence

→ decision making rights should map to decision space guidelines. these decisions should optimize for broad access to feedback and information to balance power

Levels 9-12 - some influence

→ decision making rights should map to decision space guidelines. these decisions should optimize for transparency to balance power
---
title: "The Future of Optimism Governance"
source: "https://paragraph.com/@the-optimism-collective/the-future-of-optimism-governance"
author:
  - "[[The Optimism Collective]]"
published: 2023-07-18
created: 2026-03-26
description: "The Optimism Collective is governed by a two-house system. The Token House is made up of OP holders and their delegates, and the Citizens’ House is a one-person-one-vote system based on reputation. This two-house design is intended to help the Collective make good decisions and avoid common pitfalls in token-based governance systems. Tokenholders represent one constituency out of many, and are not always the right unilateral owners for decisions that don’t involve the economics of the system...."
tags:
  - "clippings"
---
The Optimism Collective is governed by a two-house system. The Token House is made up of OP holders and their delegates, and the Citizens’ House is a one-person-one-vote system based on reputation.

This two-house design is intended to help the Collective make good decisions and avoid common pitfalls in token-based governance systems. Tokenholders represent one constituency out of many, and are not always the right unilateral owners for decisions that don’t involve the economics of the system. Creating two distinct branches of governance with different membership criteria allows the Collective to match constituents’ incentives with different types of decisions. It also helps the Collective avoid concentration of power, enact safeguards via checks and balances, and evaluate decisions from broader perspectives.

This is not a new concept. Bi- or tri-cameral governance systems have existed for centuries. With a new iteration of a known pattern, Optimism aims to build a governance system that will stand the test of time and help the Collective flourish.

This post provides an overview of the goals, design principles, and problem spaces of Optimism Governance. It is not a commitment or blueprint for exactly how governance processes will be introduced and implemented: it’s highly likely the Collective will learn from initial experiments and make modifications to the processes outlined here. These “Problem Spaces” are intended as starting points for discussion.

## Governance Goals

There are two primary goals of Optimism’s governance system:

1. **Capture resistance.** Governance plays a key role in securing the anti-capture and censorship resistance of the Optimism protocol. Governance should (a) make it possible for chain or network operation to continue without reliance on any individual entity, and (b) prevent any one entity or small group of entities from being able to control or censor the protocol or its functions.
2. **Resource allocation.** Governance’s second primary responsibility is to allocate resources effectively to support the Collective’s vision and accrue sustainable value to the Optimism Collective. Vision & value may often be in conflict, and allocating resources effectively involves a blend of short- and long-term thinking. This includes allocation of both the token treasury and protocol revenue.

## Design Principles

Design decisions for the Collective’s governance system should be made in line with three key principles:

**Governance minimization**. The set of governance responsibilities that are encoded onchain or formalized in voting processes should remain as minimal as possible. The Collective aims to reduce governance to its essence and to avoid introducing regulation where freedom can achieve the same result. This principle is key to encouraging permissionless innovation. In practice, this looks like a minimal set of (1) onchain governance processes to upgrade Optimism contracts and tune the economic parameters of the system, and (2) offchain social processes to maintain a healthy community.

**Iteration**. Optimism is decentralizing iteratively to increase the chances of building a healthy system that lasts for the long-term. This means the Foundation will play a role in establishing processes, help the Collective through its first few rapid feedback loops in improving those processes, then reduce its role over time. (This also means the design principles and goals outlined in this document may be invalidated or updated along the way.) This iteration gives the Collective a chance to learn how to make thoughtful decisions using an un-intuitive but essential loop: introduce a governance process that involves active participation, then gradually work to automate or minimize it over time. Governance’s responsibility then becomes to adjust the autopilot when necessary, not to keep two hands on the wheel.

**Forking**. The ability to fork and the ability to exit are critical to protect individual freedoms. All of the core software and tooling required to run the Optimism network should be made open source, freely available, and easy to use such that a fork is always a viable alternative. This isn’t just about vibes: in crypto, where credible commitments not to extract are [what makes decentralized platforms valuable](https://a16zcrypto.com/posts/article/when-is-decentralizing-on-a-blockchain-valuable/), this is a competitive advantage. Participants will be more likely to join Optimism if they have the ability to make an alternative.

**Balance**. Influence in governance must extend beyond financial stake to value humanhood and intelligent life. The centralizing force of plutocratic token governance must be balanced with Citizenship. Giving voice and power to different constituents allows the Collective to match decisions with voters’ incentives, rather than building a solely plutocratic system. Checks and balances prevent capture.

**Impact = profit.** A key part of the Optimistic Vision is to ensure that every individual is rewarded in proportion to their positive impact to the Collective. We believe this to be the most important target in the pursuit of solving global coordination problems and creating a better future. Our economy is an expression of our collective needs, wants, and ethics. Optimism Governance is ultimately responsible for enacting this fairness ratio that is key to the Optimistic Vision.

## Design Overview

The responsibilities of Optimism Governance can be categorized into one of the two primary goals of the governance system: **Capture Resistance** and **Resource Allocation**. Within each category, governance responsibilities are identified as (a) the exclusive responsibility of one or the other house, (b) a responsibility where one house drives proposals and the other house may veto, or (c) as a truly shared responsibility subject to approval by each house. This system is designed to help each house play to its strengths and avoid deadlock.

The Optimism **Token House** is made up of OP tokenholders and their delegates. Tokenholders and their delegates are expected to be rational economic actors interested in preserving or increasing the economic well-being of the Optimism Collective. Therefore, the Token House is responsible for decisions that affect business parameters of the system such as inflation or the variables that govern sequencer selection. Token voting is distributed widely and permissionlessly and helps represent the free market in the Collective’s decision making.

In contrast to the Token House, the **Citizens’ House** uses a one-person, one-vote system. Citizens are meant to represent individual human stakeholders of the Collective: builders, users, and community members who are aligned with the project’s values and are interested in the long-term benefit of the Collective. Therefore, the Citizens’ House is responsible for decisions that may require prioritizing long term growth ahead of other goals – decisions like allocating funding to public goods that support the Collective. In the long term, we can expect the Citizens’ House to expand to include the thousands or millions or billions of humans interacting with Optimism.

Governance responsibilities given to each house will change over time as the Collective iterates towards its long-term governance-minimized end state. This includes introducing highly manual governance responsibilities (e.g. inflation adjustments, or Superchain allowlists) that are intended to be replaced by automated smart defaults as the Collective learns how to govern these vectors appropriately. It may also include transitioning powers from the responsibility of the full governance body to a subset of governance participants who are empowered by their broader governance base.

In these early chapters of Collective governance, many of these iterations have been designed or implemented by the Optimism Foundation. Eventually this must transition to the responsibility of Collective governance itself. This meta-governance power marks the end of the Foundation’s stewardship of the evolution of Collective governance and entrusts the governance community with continued experimentation towards a healthy end-state for Optimism.

So: what does governance… well, govern?

## Problem Space #1: Capture Resistance

Optimism Governance’s first responsibility is to ensure that no single party can unilaterally control, censor, halt, or otherwise extract rent from Optimism. A decentralized compute layer is hardly valuable if controlled by a centralized entity. Governance helps the Collective make decisions in the absence of any one person or organization that is “in charge.”

The responsibility to uphold capture resistance can be broken down into two broad categories:

1. **hard powers:** governance powers that are eventually encoded and executed onchain, and
2. **soft powers:** social norms the governance community upholds, not enforced onchain but by the community’s ability to fork.

#### 1/ Hard powers

**Protocol Upgrades** refer to the ability for governance to make changes to the OP Stack protocol itself. This is a crucial responsibility of governance that ultimately makes the community the steward of Optimism’s core protocol functionality.

Protocol upgrades will be approved by the Token House, subject to a Citizens’ House veto. The Token House is the primary approver because of its broad reach and likelihood of representing business interests that depend on the OP Stack’s functionality. The Citizens’ House veto power guards against capture of the Token House and increases the resilience of the overall system.

Today, protocol upgrades are approved by the Token House and executed manually by the Optimism Foundation. In the coming Seasons, the Collective may implement a Security Council responsible for executing upgrades following the will of governance. The Citizens’ House veto power comes online in Season 5 (H2 2023), when the Citizens’ House comes fully online. Eventually, execution of protocol upgrades will be fully onchain. On a far enough time horizon, we can expect protocol upgrades to become less and less common as the protocol nears feature completeness. We can look to protocols like Ethereum and Bitcoin as a model for what mature decentralized protocol upgrades look like.

**Sequencer Selection** is the ability to make choices about which parties may act as sequencers for OP Chains or in shared sequencing schemes.

This begins as an explicit governance power driven by the Token House, with Citizens’ House power to veto. Sequencers are important economic actors for OP Chains and eventually for the Superchain. The Token House is well-incentivized to make sure sequencer selection is fair and beneficial for the Collective. The Citizens’ House veto power guards against the capture of the Token House related to sequencer selection.

Today, OP Chains are sequenced by a handful of different entities. In Season 5, those sequencers will submit proposals to Optimism Governance to be formally included in the Superchain, officially bringing the hard power of sequencer selection into the hands of the Collective. More information about this governance process will be shared in the coming weeks.

Eventually, sequencer selection may be fully automated based on verifiable and pre-agreed upon processes, enabling the sequencer set to be curated and maintained without active governance intervention.

**Citizenship Eligibility** is the responsibility of governance to select new humans to participate in the Citizens’ House of Optimism Governance.

Citizenship Eligibility will be determined by the Citizens’ House; the Token House will have the power to veto. Assuming good long-term values alignment with the Collective, Citizens should be incentivized to grow a set of voters that make quality decisions about RetroPGF allocations. A Token House veto guards against capture of the Citizens’ House or moves to consolidate power.

To date, Citizenship expansion has been administered by the Foundation. In the future, the Foundation will propose an expansion algorithm that Citizens vote to approve. Ultimately, Citizens may govern a citizenship selection algorithm directly that runs across identity data in the Optimism AttestationStation. In its final minimized form, the Citizens’ House has established a battle-tested onchain selection process; updates to the contracts that govern selection can be made as necessary by the Citizens’ House.

#### 2/ Soft powers

**Code of Conduct Enforcement** is the responsibility of governance to uphold and enforce the Optimism Collective Code of Conduct.

Each house may govern the code of conduct for its own members. The best cultural and values-based enforcement for governance communities should come from within that specific community.

Today, CoC violations are processed with administration from the Foundation. In future Seasons, the community will iterate on this approach: Season 4 includes an [RFP for Code of Conduct research](https://github.com/ethereum-optimism/ecosystem-contributions/issues/2), and Season 6 may introduce a new Council to replace the Foundation’s role in this process. As a soft power, Code of Conduct enforcement will not be implemented onchain. For example, if a Token House delegate were to violate the Code of Conduct, that delegate would not be prevented from voting by an update to Optimism’s voting contracts onchain. Rather, the community could enforce its rules and norms on the social layer by choosing to remove the participant from delegation frontends and UIs, or by informing the tokenholders who’ve delegated to the offending party of the breach in conduct.

**Director Removal** is the right of governance to remove a director of the Optimism Foundation.

Director Removals are approved by both the Token House and Citizens’ House. Stewards of the Optimism Foundation should be accountable to the entire community.

This right is enforced and upheld by the legal documents that underpin the Optimism Foundation’s commitment to the Collective. As Directors are not represented onchain, this responsibility does not have onchain enforceability.

## Problem Space #2: Resource Allocation

The second primary responsibility of Optimism governance is to allocate the Collective’s resources to help it achieve its goals. This is a piece of essential governance that requires human intervention, especially in its early stages. Resource allocation in the Collective comes in three forms:

**1/ Allocation of Protocol Revenue2/ OP Treasury Management3/ RetroPGF Funding**

**Allocation of Protocol Revenue** is the responsibility of governance to determine how to direct surplus ETH generated by the Optimism protocol. Optimism generates revenue through transaction fees paid on OP Mainnet and other OP Chains. Part of these transaction fees is used to post data to Ethereum L1 and pay for other expenses associated with running the protocol, and the remainder of the fee is accumulated as surplus revenue that can be directed by the Collective for the benefit of the Collective. In the future, the sequencing and proving networks that help run the Optimism protocol may also provide sources of revenue for the Collective.

By default, surplus protocol revenue will be allocated to RetroPGF. The Token House may vote on proposals to divert a portion of the surplus protocol revenue for other Optimism Collective purposes as they see fit. These proposals will be subject to veto power by the Citizens’ House.

Protocol Revenue is a crucial lever in the Collective. In its early stages, the default allocation to RetroPGF lets the Collective reward projects that grow the Optimism ecosystem. As Optimism matures, the Token House is entrusted to propose deviations from this default for the health of the Optimism Collective. Citizens’ House veto powers help hold the Token House accountable and prevent short term optimization at the expense of long term sustainability.

In a future governance season, a proposal type will be introduced for proposing modifications to the allocation of surplus protocol revenue. These proposals may begin with certain safeguards, like a cap on possible allocations. Proposal powers for high-level budgeting decisions may additionally be delegated to elected representatives as the Token House sees fit. The long term minimized state of this governance responsibility could include some thoughtful automation to determine revenue allocations based on indicators of whether the Collective should be in a “growth” stage or “value” stage.

**OP Treasury Allocation** is the responsibility of governance to direct how the existing OP token treasury is allocated. This has several components:

1. The **Governance Fund**, which is directed by Token House governance.
2. The **RetroPGF Fund**, which is directed by Citizens’ House governance, subject to a Token House veto.
3. The **Seed Fund** and **Unallocated** portions of the token treasury, which are initially administered by the Foundation, and will eventually be directed jointly by both houses.
4. **Foundation Budget Approvals**, which are governed jointly by both houses.
5. **Inflation adjustments**, which are governed by the Token House, subject to a Citizens’ House veto.

This distributed ownership of the OP Treasury allows for flexibility and gives each house a clear mechanism to allocate tokens for the development of the Collective. Today, treasury allocations are administered by the Foundation, and will gradually move onchain as the governance system matures and becomes more resilient. In the long term, as most of the Treasury is circulating, this power will boil down to the governance of inflation, which can be automated to a thoughtful set of defaults based on the economic health of the Collective.

**RetroPGF Grants** are the responsibility of governance to allocate to projects that have provided public good to the Optimism Collective. These grants may refer to either (a) OP tokens from the RetroPGF Fund portion of the token treasury (see OP Treasury Allocation), or (b) Profits generated by the Optimism Protocol in ETH that governance has decided to allocate to RetroPGF (see Allocation of Protocol Revenue). Specifically, this power includes:

a. **RetroPGF Scope**: the ability of governance to update the scope, metrics, and impact evaluation criteria used in determining how RetroPGF Grants are allocated to projects. In line with the principle of governance minimization, this should be a soft power.b. **Project Allocations**: the ability of the Citizens’ House to make specific individual project-level decisions about how the RetroPGF Scope is applied to allocate grants. This is the corresponding hard power for RetroPGF.

Both components of RetroPGF Grants above are the responsibility of the Citizens’ House. Citizens are selected as individual humans who are interested in the long term health of the Optimism Collective, and RetroPGF is a long term investment in Optimism’s growth.

Today, the Foundation identifies RetroPGF scope and Citizens make Project Allocation decisions. Eventually, Citizens will govern RetroPGF scope themselves.

---

Altogether, this looks like the diagram below:

![post image](https://img.paragraph.com/cdn-cgi/image/format=auto,width=3840,quality=85/https://storage.googleapis.com/papyrus_images/a18b98e83a5e65e0dccc16168ca0d31f00d1b7286f42b016c9debe5d2bbd503b.png)

### Additional Notes

**Incompleteness**

The list above does not include all governance powers – it notably excludes governance responsibilities, especially social ones.

The list above is also not a commitment or blueprint for exactly how governance powers will be rolled out and implemented. It is highly likely that the Collective will learn from initial experiments towards this blueprint and may make modifications to the processes outlined here. These “Problem Spaces” are intended as starting points for discussion, not as a prescriptive roadmap.

**Checks, balances, and vetos**

This post also excludes crucial design details about veto power, approval and quorum thresholds, proposal defaults, and failure modes. In particular, it’s important to note that all veto powers are not created equal. A very high veto threshold and quorum create a higher bar for exercising veto power, where a simple majority could make for a relatively easy veto. These thresholds determine the balance of power in responsibilities shared between houses and must be considered carefully.

The Collective will apply the principle of iteration in introducing these checks, balances, and vetos. This allows time to experiment with the right settings and make sure both branches of governance are developing safely.

These details are incredibly important to the design of a well-functioning system, and members of the Collective are consulting with a set of experts, from crypto and beyond, to design a quality set of patterns to increase the chances of Optimism Governance’s success. If you’re interested in contributing to these efforts, you’re welcome to reach out to [bobby@optimism.io](mailto:bobby@optimism.io) or chime in on the governance forums.

**Citizenship and capture**

Since Citizens play a crucial role in the Optimism governance, it’s paramount that the Citizens’ House is qualified and capture-resistant. Several factors come into play here, including the ways identity and contribution history can help inform citizenship eligibility; public and private voting strategies to help prevent collusion and bribery; citizenship incentives; escape hatches and metagovernance in the event of capture; and the iterative path towards growing the set of Citizens and their responsibilities. These important topics will be discussed in greater detail in a future post.

## Key Milestones

Optimism Governance continues to make steady strides towards a robust and sustainable system. Here are some of the next milestones for the Collective in the coming quarters:

### Season 5 \[2024\]

**1\. Sequencer Allowlist / Law of Chains**

Season 5 will introduce the governance system’s power to welcome new Sequencers into the Superchain. More information about sequencer governance (and its relation to chain, user, and platform governance) will be shared in the coming weeks.

**2\. Joint-House voting**

In Season 5, the Collective will bring the Citizens’ House fully online and execute its first set of joint-house votes. After executing three rounds of RetroPGF, this milestone will mark the next stage of maturity for the Citizens’ House as they participate in Optimism Governance beyond RetroPGF grant allocations.

**3\. Security Council v1**

Season 5 will also include the Optimism Security Council. The Security Council is a set of community members tasked with executing protocol upgrades at the will of governance. This replaces the multisig wallet controlled by the Optimism Foundation and marks an important milestone in protocol decentralization.

### Season 6 \[2024\]

**1\. Protocol Revenue Allocation**

Season 6 will introduce the initial process for votes to allocate Protocol Revenue. It’s possible this process will include the introduction of a Treasury Council responsible for making high-level proposals to governance about how to allocate resources; any proposal for protocol revenue allocation will be submitted to the Token House for approval, and to the Citizens’ House for veto.

**2\. Onchain treasury execution**

In Season 6, parts of the Optimism Treasury will move onchain. This means governance will be able to initiate transactions that move tokens from the OP Token Treasury entirely onchain. As noted above, this onchain execution will begin with an emergency safeguard that will be removed in future seasons.

## More from The Optimism Collective

[![Cover image for Governance in Season 8: The Next Phase](https://img.paragraph.com/cdn-cgi/image/format=auto,width=3840,quality=85/https://storage.googleapis.com/papyrus_images/dbc5294c9509204dfa12b4ebf6d3104edb2a206d7e392f72aaabad1ba8262ceb.png)](https://paragraph.com/@the-optimism-collective/governance-in-season-8-the-next-phase)

[The Optimism Collective](https://paragraph.com/@the-optimism-collective/governance-in-season-8-the-next-phase)

[Jun 12

Governance in Season 8: The Next Phase

Just over three years ago, the Optimism Collective embarked on a large-scale experiment in decentralized governance. From the beginning, we’ve been committed to taking “an agile approach to governance—relentlessly iterating until we establish a system which can stand the test of time.” As we experiment, we learn more about the balance of power and other dynamics within our system, an iterative process that allows the Collective to mature and evolve (see Working Constitution). Systems that are...

](https://paragraph.com/@the-optimism-collective/governance-in-season-8-the-next-phase)[![Cover image for Introducing the Optimism Collective](https://img.paragraph.com/cdn-cgi/image/format=auto,width=3840,quality=85/https://storage.googleapis.com/papyrus_images/d3c369d45dee8e02bbf5b7ba64e7facd77bff1d51ef1eda42a97afa7702fd2bd.jpg)

The Optimism Collective

Apr 26

Introducing the Optimism Collective

It’s time for a new chapter. As crypto enters its next wave of adoption, the calls for scalability are deafening. This demand is often answered by centralized layer-1 competitors, who abandon Ethereum’s security and values under the guise of cheap fees and a quick buck. We must not recreate Web2 incentives in our quest for Web3 scalability. Web3 offers the opportunity to rebuild the internet to align with the values of its users. Sacrificing this mission is sacrificing the purpose of crypto....

](https://paragraph.com/@the-optimism-collective/introducing-the-optimism-collective)[![Cover image for Answering the call: How RISC Zero and O(1) Labs are bringing ZK proofs to the OP Stack](https://img.paragraph.com/cdn-cgi/image/format=auto,width=3840,quality=85/https://storage.googleapis.com/papyrus_images/4cfb790764631bfcff5ea8771c588e5aec890398031e9b0d23134caa325ed6d9.png)

The Optimism Collective

Nov 1

Answering the call: How RISC Zero and O(1) Labs are bringing ZK proofs to the OP Stack

In Season 4 of Optimism Governance, the community rallied around Collective Intents, where teams work on tightly scoped, specific initiatives known as Missions. As part of this process, the Optimism Foundation set forth Missions for critical areas of growth and development within the Collective. A key part of building towards the Technical Decentralization Intent is implementing a Zero Knowledge Proof (ZKP) for the OP Stack. For OP Chains in the Superchain, this is an important ingredient to...

](https://paragraph.com/@the-optimism-collective/answering-the-call-how-risc-zero-and-o-1-labs-are-bringing-zk-proofs-to-the-op-stack)
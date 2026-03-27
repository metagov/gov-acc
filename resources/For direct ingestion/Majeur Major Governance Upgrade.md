---
title: "Majeur: Major Governance Upgrade"
source: "https://x.com/z0r0zzz/status/1991909635591409765"
author:
  - "[[ross.wei]]"
published: 2025-11-21
created: 2026-03-26
description:
tags:
  - "clippings"
---
> [What sphinx of cement and aluminum bashed open their skulls and ate up their brains and imagination?](https://www.slatestarcodexabridged.com/Meditations-On-Moloch)

**Majeur** is a mini-maxi\* governance framework for organizing digital assets effectively online. Unlike other systems, which require complex deployments and offchain dependencies, **Majeur can be run 100% onchain**.

It also uniquely combines 3 token standards. **ERC20 shares & loot, ERC721 NFT-ranked membership badges, as well as ERC6909 permits & voting receipts which unlock new game theory and use cases.**

![Image](https://pbs.twimg.com/media/G6SEie9aMAA1dA9?format=jpg&name=large)

\*mini-maxi: minimum dependencies, maximum features

Don't believe me? **Check it all out on ENS:**

[https://majeurdao.eth.limo/](https://majeurdao.eth.limo/)

**or,** [https://majdao.eth.limo/](https://majdao.eth.limo/)

Aside from this new level of “object permanence”, Majeur also further improves on existing DAOs by adding novel membership incentives, like voting bonuses, to help solve for voter apathy and the lack of predictable rewards for good operators. Many great DAOs have been sidelined by fatigue and lack of proper rewards for their core function: Voting on proposals.

![Image](https://pbs.twimg.com/media/G6SSv7xaAAAihZV?format=jpg&name=large)

after all, why shouldn't we tokenize the votes

But Majeur goes further than you might expect, while staying only 1764 loc (<69 KB): it includes an integrated token sale feature (DAICO), as well as a few other twists: (i) split delegations, (ii) NFT badges for top shareholders, (iii) execution “permits” for safety valves or advanced agent permissions, (iv) tokenized voting receipts for futarchy, bribes, governance mining, or “prediction-weighted” distributions, and (v) onchain badge-locked messaging.

There is also a lite paper, whoah: [https://wp.majeurdao.eth.limo/](https://wp.majeurdao.eth.limo/)

![Image](https://pbs.twimg.com/media/G6Sm8OEaEAA6_00?format=png&name=large)

each proposal Id also generates a real-time svg to track proposal status via ERC6909 URI

Majeur otherwise combines classic snapshot token voting flows, proposal timelocks, [@MolochDAO](https://x.com/@MolochDAO) ragequit, and other governance primitives into a single deployment payload that costs very little on mainnet to setup (<$2).

![Image](https://pbs.twimg.com/media/G6ST12gbsAEZmGK?format=jpg&name=large)

badges plus shares plus loot plus receipts plus permits all as collectibles

(Deployment and runtime fees are overall kept very low in Majeur, versus other DAOs, by using new opcodes and tricks, like PUSHO clones, TSTORE guards, and efficient storage techniques, such as bitmaps for member seats.)

![Image](https://pbs.twimg.com/media/G6R83RAbQAAN1VI?format=jpg&name=large)

buy an organization on mainnet for less than the price of a cup of McCafe coffee

**If this sounds like a pitch, it is because it is.** This is really good software I am open sourcing as a completed system that I would like for you to try out yourself and not just talk about it. For small clubs, for your existing tokens (migration supported), venture and protocol projects. Pretty much anything that can be owned as a group online.

![Image](https://pbs.twimg.com/media/G6R9RBfboAAERdI?format=jpg&name=large)

elon fix your damn site

Here are the features unpacked in a bit more depth:

## 1\. NFT badges

![Image](https://pbs.twimg.com/media/G6SFGj3bQAA-2q5?format=png&name=large)

for example, see this SBT on OpenSea: [https://opensea.io/item/ethereum/0x2809a7eb62d5a50e40153080f548c306db01c221/1](https://opensea.io/item/ethereum/0x2809a7eb62d5a50e40153080f548c306db01c221/1)

IN Majeur governance, each top shareholder gets a "soulbound" svg NFT that renders their power level in real-time. There are 256 seats at the top. ([A perfect square](https://en.wikipedia.org/wiki/256_\(number\)#:~:text=256%20is%20a%20perfect%20square%20\(162\).&text=256%20is%20the%20lowest%20number,in%20all%20compositions%20of%207.).) If a new shareholder gets enough voting shares to replace the bottom of the list, they take their seat NFT, and the old one gets burned. All of this gets tracked by share transfer hooks among the Majeur contracts, so no need for manual updates, and images are hosted onchain, so holders can trust the ranking display is correct.

In addition to being, well, cool, NFT badges provide some practical benefits for DAOs. First, members become automatically discoverable without the need to index share transfers offchain. Any dapp or wallet can check the NFT contract to get the list of shareholders (and most DAOs will not typically exceed 256 members, so this effectively works as a global snapshot registry for all members that can't be spoofed). Second-order benefits are also pretty obvious: If you own shares in a DAO, don't you want to collect more so you aren't just a pleb? But rather, a badge-holder in the council of power?

Note: At any time, members can vote to change the renderer contract for their DAO, so if they want more custom art or data displayed in their badges, they can do that very easily (this flexibility applies to the rendering for DAO metadata itself, contractURI(), as well as “permit” and “receipt” ERC6909 Ids, that otherwise will render with default summoning art...)

## 2\. Split delegations

![Image](https://pbs.twimg.com/media/G6SFdaJaAAE4PT1?format=jpg&name=large)

crazy idea but what if you had more than 1 representative onchain...

A limitation in current Governor systems is “all eggs, one basket” delegation. This means that each member can only have one delegate at a time, and this can cause stagnation and incumbent delegations, increasing risk of soft collusion.

It’s obviously better to have more options in governance as it is in finance. Building on the open-source work of [@NoahZinsmeister](https://x.com/@NoahZinsmeister) on the [Franchiser](https://github.com/NoahZinsmeister/franchiser) system, Majeur integrates split-delegation (up to 4, optimized) directly. This will allow you to have several, potentially competing delegates who will be more incentivized to vote and perform according to expectations. Better incentives, Better outcomes.

![Image](https://pbs.twimg.com/media/G6SZBlIbUAAcmdM?format=png&name=large)

it's hard to fill an article with images

## 3\. Permit slip

Many DAOs have benefited from engaging a “guardian” role that can watch votes and contract operations and act to prevent bugs or other unintended problems. These roles are static and often “god mode”, which means they are often discarded as soon as possible. Despite potential long-running benefits if carefully scripted. A more discrete, and observable mode for guardian and other agentic roles that can assist and complement DAO governance can be found in the realm of scoped contract permissions, or “permits”.

In Majeur, these work as incremented rights to call certain functions on other smart contracts, or on the DAO itself.

![Image](https://pbs.twimg.com/media/G6SazRragAA3NjV?format=png&name=large)

the id is a hash of the call to power, so it is easy to ascertain by people and computers alike

Majeur permits are SBT (non-transferrable), render visually onchain for easy tracking, and can be spent based on the amount of units granted by the DAO (which can also just as easily revoke them).

> Some use cases:

(i) trading strategies, (ii) proposal rollback, (iii) asset migrations, (iv) M&A & DAO forks, etc.

Permits in this system can be granted as fixed or multi-call rights to execute certain proposals or operations, and if this assignment is made to a smart account, it can be scoped even further. (E.g., you can only spend the permit if treasury holds a certain balance in X & Y, etc.).

A related feature, are Majeur “allowances”, which serve as granular rights to spend ETH or ERC20s, for example, by a flash-lend contract or trading agent.

Majeur Permits & Allowances will allow interesting use cases to emerge on their own, as their powers can be as complex as peripheral contracts can express. These new abilities will be unpacked in separate articles and posts on the topic of Majeur, as they introduce opportunities, as well as footguns, and should be carefully implemented in practice.

## Prediction governance

![Image](https://pbs.twimg.com/media/G6Sb6NpaQAAEklu?format=jpg&name=large)

what is a vote if not a prediction on what you want the DAO to do etc.

In Majeur voting, each proposal vote is its own token. What this means is that for every proposal, there are three potential answers: (YES), (NO), (ABSTAIN), and when you vote, you get a tokenized receipt representing that answer.

These voting receipts are transferable ERC6909s that can be traded on the [@zamm\_defi](https://x.com/@zamm_defi) orderbook or AMM. But as pure tokens they can of course be used in arbitrary programming. For example, vote tokens might be held as records for future governance accounting and retroactive airdrops, an outcome hedge, used as a voting bonus multiplier offchain, or swapped to trade predictions on how a proposal will resolve.

To make some of these utilities available today, Majeur integrates a pari mutuel-style reward system to offer governance a few knobs to automatically engage and reward good stewardship, on a per proposal, or continuous basis. One of these modes is “auto futarchy”, which when active, can assign voting shares or loot (economic weight) as a percentage of supply in new issuances (or, in non-mint mode, ETH or share/loot claims from treasury) who vote on the winning proposal outcome.

![Image](https://pbs.twimg.com/media/G6ScYUeaMAAI50y?format=jpg&name=large)

each vote receipt can be burned for loot rewards in this config

When used properly, this can lead to a more fair distribution of governance power to voters who actively align and participate, while diluting passive or contrarian voting blocks. Since the ragequit right is maintained in Majeur, alignment can be more credibly channeled this way to the growth of the DAO, while protecting minority voting interests from being unduly punished.

“Governance mining” is also an interesting virality tool at hand here, in which a DAO might start with fairly open and low-supply membership, but grow as more users vote, rewarding this activity at the same time.

On the other side of the equation, the Majeur/Moloch split accounting system, with voting/economic weight in Shares and pure economic rights in Loot, offers Loot as a way to compensate for gas and diligence without diluting or warping governance itself: Vote often and correctly, earn a share of the treasury, not more votes.

Again check out the lite paper for a bit more on this topic, [https://wp.majeurdao.eth.limo/](https://wp.majeurdao.eth.limo/)

![Image](https://pbs.twimg.com/media/G6SdcrDboAEoP1r?format=png&name=large)

wow nice loot

## Legal recognition

![Image](https://pbs.twimg.com/media/G6Sf1q_b0AATBoQ?format=jpg&name=large)

code is law bucko

DAOs have recently received recent boons in positive legislation on their behalf to help avoid [Ooki-like](https://www.fintechanddigitalassets.com/2023/07/whats-next-for-daos-in-the-wake-of-the-ooki-decision/) personal attribution of responsibility for protocol operations merely on account of holding governance shares. More specifically, the [DUNA statutes](https://a16zcrypto.com/posts/article/duna-for-daos/) provide a way for DAOs, many of which are operationally legal associations that pursue public goods, to receive automatic legal protection if they identify with and adhere to its terms.

This kind of casual, but solid legal protection is a win/win for digital organizations that often involve loose associations with strong goals, but which don’t work cleanly within the confines of normal paper accounting or rule-making. They are “living constitutions” in the sense that their operating procedures and control persons naturally evolve with the state of their code. (Or which might be code operatives themselves nowadays.)

The Majeur system accommodates this positive modern legal shielding into its source code, with full optionality, as a template for the rendering of the base “metadata” for each DAO in its contractURI() function. (If this last sentence is confusing just look at the cool image above.) DAOs summoned through the demo dapp ([majeurdao.eth](https://majeurdao.eth.limo/)) will have a template for DUNA resolve automatically their DAO state and membership details onchain, but this form may be upgraded, or wound up through normal proposal-making. Or a different renderer can be input into the summoning step, as well.

This automated legal protection is provided to simplify the cold-start problem for many DAOs, that want some level of bare legal protection to even figure out what they are doing without incurring liability, but want to also forego the kind of formal structuring that might cement their legal status, or the role of certain agents or shareholders, in ways that might be counterproductive to their ability to flexibility evolve and surface their final form over time. This kind of concept might have been considered a paradox for crypto law a few years ago, but now is easily resolved through a lightweight association and private-law ordering format in DUNA, that complements rather than hinders the creation of new productive DAOs.

## Demo Deployments:

I don’t like frameworks that exist in a vacuum. They need the essential substance of real problems and skin in the game. For this reason, Majeur is launched with 3 core organizations to demonstrate some of its unique capabilities in production, and for which DUNA seems like a good wrapper.

![Image](https://pbs.twimg.com/media/G6SBMmtbgAEW36L?format=jpg&name=large)

so summoned

## zOrg (DAO #0)

[@zamm\_defi](https://x.com/@zamm_defi) is an integrated DeFi stack optimized for L1. Including an AMM (zAMM), launchpad system (zICO), and efficient swap aggregator (zRouter). Stakeholder governance of DeFi primitives makes sense insofar as we recognize that most DeFi systems and smart contracts are becoming commodities that will differentiate only in terms of the kinds of value and ownership they provide back to their users. For this reason, ZAMM, as the platform token and ZORG as the DAO share (stake ZAMM for ZORG) will be used to battle-test the first Majeur deployment. ZORG holders will have control and custody of protocol keys, such as the zAMM protocol fee switch and related revenue streams, as well as certain ENS and other domains related to [@zamm\_defi](https://x.com/@zamm_defi). In this way, there can be real stakes and activity of consequence to evaluate and improve Majeur, more rapidly. In terms of incentives, Loot shares are minted automatically for all active voters as a way to engage and reward early participation.

If this particular DAO is of interest to you, I will write more about it this weekend. A lot of work has been put into testing and making sure things are sane, before we really ramp up staking. So give this a moment... ( ;

// But personally I will say this. DeFi DAOs can be so much more and better than noblesse oblige or piggy banks for absent teams. I intend to challenge the space as much as I can to help put DeFi ownership into people's hands. We should try and do better and use DAOs more effectively.

## Moloch (DAO #1)

![Image](https://pbs.twimg.com/media/G6SBylvaEAArqhS?format=jpg&name=large)

throwback into the future

The Original Grant-Giving DAO, [@MolochDAO](https://x.com/@MolochDAO) is given a new form and royal home in the Majeur system, with a replica of existing members deployed with equivalent voting shares. I airdropped myself 1% just so I can operate it for now under the quorum settings to demonstrate how it works to existing members. Members can go ahead and vote to burn me out. It's chill.

## MetaCartel (DAO #2)

The Original Dapp-MetaTX DAO, [@Meta\_Cartel](https://x.com/@Meta_Cartel), is also given fresh roots and a sandbox for more complex ways to grant and grow early Dapp teams through grants. Going far, together, etc. If any members want to help build out the Majeur framework, HMU.

After all, I am an OG.

![Image](https://pbs.twimg.com/media/G6ShsgVa8AAtDsP?format=png&name=large)

80 years ago MetaCartel was formed to make Dapps not suck. Lots of good has been done since then. Dapps kinda still suck. But they are much better.

If you want to use Majeur for your orgs or existing tokens, reach out. It's early days, and I think anyone using this system should do it in small bites. Majeur is not professionally audited, but I can say that I wrote extensive tests, have been testing it in production for the last two weeks, and am personally satisfied right now to use it going forward for my own organizational needs.

Here is the codebase: [https://github.com/z0r0z/majeur](https://github.com/z0r0z/majeur)

I can also promise you: The code is so simple you can read it yourself very quickly. The [entire contract system is a single file](https://github.com/z0r0z/majeur/blob/main/src/Moloch.sol). The [dapp is also a single file](https://github.com/z0r0z/majeur/blob/main/dapp/Majeur.html). This dapp literally runs an entire DAO platform onchain. Have fun, enjoy, let me know if anything is funky.

~z

![Image](https://pbs.twimg.com/media/G6StU9Ya0AAx_ME?format=jpg&name=large)

If you want something done, do it yourself. Yep!
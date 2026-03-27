---
title: "Governing the Commons in the Intelligent Age"
source: "https://www.daviddao.org/posts/regenerative-intelligence/"
author:
  - "[[David Dao]]"
published: 2025-01-25
created: 2026-03-26
description: "From Conservation Data Income to Regenerative Intelligence"
tags:
  - "clippings"
---
From Conservation Data Income to Regenerative Intelligence

All Watched Over By Machines Of Loving Grace

I like to think (and  
the sooner the better!)  
of a cybernetic meadow  
where mammals and computers  
live together in mutually  
programming harmony  
like pure water  
touching clear sky.

  

I like to think  
(right now, please!)  
of a cybernetic forest  
filled with pines and electronics  
where deer stroll peacefully  
past computers  
as if they were flowers  
with spinning blossoms.

  

I like to think  
(it has to be!)  
of a cybernetic ecology  
where we are free of our labors  
and joined back to nature,  
returned to our mammal  
brothers and sisters,  
and all watched over  
by machines of loving grace.

Richard Brautigan

---

## tl;dr

Local communities have proven they can sustainably manage shared resources through self-governance, but self-governance breaks down at larger scales due to cognitive limits and coordination complexity. This essay proposes to study “Regenerative Intelligence” (RI), the theory and practice of designing sociotechnical intelligent systems that preserve or enhance social capital, trust and agency while scaling governance capabilities. Some use cases of RI include (1) paying communities for environmental data collection (Conservation Data Income), (2) impact certificates (hypercerts), (3) AI assistants that help Indigenous communities share knowledge and support Global Majority youth in climate negotiations and (4) our work on Indigenous scientists that ultimately led us to win the XPRIZE Rainforest.

## Introduction

*Can we scale human cooperation through trustworthy machines?*

I have been thinking about this question for many years [^1] . Through the non-profit I co-founded, [GainForest.Earth](https://gainforest.earth/), we’ve researched approaches to human-machine cooperation in order to address arguably our planet’s most critical coordination failure: The climate and biodiversity emergency.

The economic foundation of this crisis was articulated in Garrett Hardin’s infamous [Tragedy of the Commons](https://www.science.org/doi/10.1126/science.162.3859.1243) [^2] . Mankind’s limitless exploitation of limited shared natural resources drives our environmental emergencies and nothing exemplifies this *race to collective ruin* more starkly than global deforestation. Rising economic demand for commodities like beef, palm oil, and soy continues to prioritize short-term profits over environmental preservation. The consequences have been severe: the loss of half the world’s forests, the release of one tenth of global anthropogenic emissions, and the extinction of hundreds of species daily. The stark failure of global coordination is evident in the economics: halting deforestation would cost approximately 200 billion $ annually — a fraction of the estimated 35 trillion $ in ecosystem services at risk. Yet international funding commitments remain stuck at less than 10% of what’s needed. Given the urgency, with some scientists suggesting we may have already crossed planetary tipping points, we need immediate global action.

Fortunately, human nature is not as grim as Hardin paints it. Contrary to Hardin’s pessimistic view, Nobel laureate Elinor Ostrom’s groundbreaking research revealed that local communities can sustainably manage shared resources through effective self-governance. In her book [Governing the Commons](https://archive.org/details/governingthecommons) she uncovered eight robust design principles [^3]  that enable equitable and sustainable commons management, supported by numerous successful examples spanning centuries.

---

| Principle | Local Implementation | Real World Examples |
| --- | --- | --- |
| **Clear Boundaries** | Clear physical borders with known community members | Maine lobster fishing zones marked by harbors; Japanese iriai forests bounded by village territories |
| **Local Rules** | Traditional practices adapted to local conditions | Swiss Alpine pasture rotation by seasons; Spanish huertas water schedules adapted to local soil types |
| **Collective Choice** | Direct participation through community meetings | New England town halls managing common lands; Mexican ejido assemblies governing communal forests |
| **Monitoring** | Community patrols and mutual observation | Nepali community forest guards; Turkish fishers watching designated coastal zones |
| **Graduated Sanctions** | Community-imposed flexible penalties | Tohono O’odham graduated water violation fines; Japanese village penalties for forest overuse |
| **Conflict Resolution** | Local mediators and traditional councils | Valencia’s Water Court resolving irrigation disputes; Korean village elders mediating water conflicts |
| **External Recognition** | Official acceptance of traditional rights | Mexican recognition of ejido lands; Nepal’s legal status for community forests |
| **Nested Systems** | Traditional hierarchies linking local to regional | Swiss cheese cooperatives connecting to markets; Balinese subak temples organizing from village to regional level |

---

***Table 1:** Ostrom’s examples of successful self-governance of the commons. These historical examples demonstrate the effectiveness of her principles in diverse cultural contexts.*

Ostrom’s work revealed that communities possess remarkable capabilities for self-organization and sustainable resource governance when given the appropriate autonomy, tools and institutional support. Despite these hopeful lessons, the tragedy Hardin envisioned emerges at larger scales, where her design principles become increasingly difficult to implement, as we see with global coordination challenges like climate change, ocean pollution, and deforestation of the Amazon rainforest.

However, humanity is not without ingenuity. The rise of web3 brought a paradigm shift, enabling the exploration of new economic incentives with unprecedented precision and speed, down to a single bit. Combined with the likely advent of powerful AI [^4] , computed incentives and machine intelligence could transform our ability as humans to cooperate. If guided thoughtfully, this combination could enable scalable management of natural and digital commons through an emerging discipline we call **regenerative intelligence** (RI).

In this post, I explore regenerative intelligence (RI) and its potential to scale Ostrom’s eight principles in the intelligent age. Drawing from our team’s early pilots in governing natural commons across 30 global communities, from the Philippines to the Amazon Rainforest, and our recent XPRIZE Rainforest victory, I examine how RI could transform the governance of natural commons and present a theory of change for how RI could address the biodiversity and climate emergencies by redirecting humanity’s tragic race to the bottom into a **collective race to the top**.

## Basic assumptions and definitions

Before we dive into the following sections, it is helpful to first define our framework that we use to motivate regenerative intelligence. Let’s begin by revisiting Ostrom’s ideas.

### Ostrom’s principles across different scales

Ostrom derived her eight robust principles from decades of global research. While these principles have successfully informed local policy and management systems, their implementation faces significant challenges at larger scales. Let’s examine this contrast systematically:

---

| Principle | Why It Works Locally | Why It’s Hard At Scale |
| --- | --- | --- |
| Clear Boundaries | Geographic features create clear borders; everyone knows who’s in the community | Resources like air and oceans cross borders; users are anonymous and numerous |
| Local Rules | Communities can adapt rules based on direct experience and local knowledge | Different regions need different rules; one-size-fits-all policies often fail |
| Collective Choice | Face-to-face meetings enable direct participation and quick consensus | Too many stakeholders to coordinate; representation becomes complex |
| Monitoring | Daily interactions make violations easy to spot; monitors are known community members | Vast areas to watch; violations are hard to detect; monitoring is expensive |
| Graduated Sanctions | Everyone knows each other; penalties can be tailored to circumstances | Hard to identify violators; enforcement across jurisdictions is complex |
| Conflict Resolution | Quick, informal, and cheap through local mediators and councils | Multiple jurisdictions involved; high legal costs; cultural differences |
| External Recognition | Traditional rights and authority are clear and respected locally | Legal systems may conflict; international recognition is complicated |
| Nested Systems | Natural hierarchies develop based on local relationships | Complex coordination between many levels; competing interests emerge |

---

***Table 2:** Comparative analysis of Ostrom’s principles across scales, highlighting the key challenges in scaling up traditional governance mechanisms.*

This systematic comparison reveals a crucial insight: the very features that make Ostrom’s principles effective at local scales—direct relationships, shared context, and face-to-face interactions become barriers to implementation at larger scales.

The scaling limitations of Ostrom’s principles can be understood through multiple complementary lenses. One critical perspective relates to a fundamental concept in social anthropology called Dunbar’s number, the cognitive limit to the number of people with whom one can maintain stable social relationships, theorized to be around 150 individuals [^5] . At a local level, when community size aligns with Dunbar’s natural social layers (particularly the 150-person threshold), governance works effectively because everyone can maintain meaningful relationships and direct trust. However, as communities scale beyond these cognitive limits, the complexity grows non-linearly. The number of potential relationships increases combinatorially, in a group of n people, the number of possible relationships is n(n-1)/2. This means that in a community of 150 people, there are 11,175 possible relationships to track, but in a community of 1,500, this explodes to 1,124,250 potential relationships.

### Attention is all we need (and expensive)

Another way to understand the scaling limitations of Ostrom’s principles is through the lens of attention economics, first theorized by Nobel and Turing laureate Herbert A. Simon [^6] . Human attention is a finite resource that’s crucial for decision making. Imagine each person has a limited number of “attention tokens” to spend on governance activities. In local settings, these tokens work efficiently: monitoring involves watching familiar spaces during daily activities, conflict resolution occurs through quick informal chats, and collective decisions emerge through regular face-to-face meetings. However, as systems scale, these attention demands multiply exponentially. A fisher can easily monitor their local coastline for violations while working, but can’t simultaneously track industrial fishing fleets across oceans. A village elder can mediate a dispute between neighbors through personal knowledge, but can’t maintain context for thousands of cases across multiple jurisdictions. Community members can participate meaningfully in local assemblies, but can’t process the complexity of global climate policy decisions. This attention scarcity explains why simply scaling up local governance systems fails, we quickly exhaust our limited attention tokens when trying to maintain the same level of human judgment and oversight at larger scales.

This scarcity of attention becomes even more critical when we consider how human cognition actually works. According to Nobel laureate Daniel Kahneman [^7] , humans rely on two systems of thinking to make judgments: an intuitive “System 1” and a rational “System 2.” Our intuitive system is prone to errors due to cognitive biases like anchoring (over-relying on first impressions), availability bias (overestimating the likelihood of easily remembered events), and confirmation bias (seeking information that confirms existing beliefs). System 1 also employs mental shortcuts called heuristics, such as the representativeness heuristic (making judgments based on stereotypes rather than statistical base rates) and the affect heuristic (letting emotional associations influence decisions). While System 2 can help reduce these errors through careful analysis, it requires significant mental effort.

### Additional scaling challenges

Yet attention scarcity is just one piece of a complex puzzle. As governance systems scale, they face additional challenges: information asymmetries between local and higher-level decision-makers, emerging power dynamics and competing interests, and fundamental transformations in the nature of coordination problems. For instance, while local commons management might primarily require balancing known community members’ needs, global challenges like climate change involve complex negotiations between actors with vastly different interests, capabilities, and information access. This multifaceted scaling challenge helps explain why simply expanding local governance mechanisms often fails, the problems don’t just get bigger, they become fundamentally different in nature.

### Three ways to scale governance

Scaling effective governance requires expanding multiple interlinked capacities that currently constrain human coordination. We can generally categorize three complementary approaches:

**1\. Intelligence Augmentation**: Amplifying human capabilities and judgement

**2\. Intelligent Automation**: Replacing mundane, data-driven requirements through machine protocols

**3\. Capacity Building**: Improving and adding additional capabilities, skills and resources

In the following we will explore how all three approaches are needed due to the diversity and various characteristics of Ostrom’s principles.

---

| Principle | What Needs Improvement? | Why? |
| --- | --- | --- |
| Clear Boundaries | Mostly Technology | We can use digital tools to verify who’s part of the community and control access, this is mainly a technical challenge that computers can handle well. |
| Local Rules | Mostly Community Skills | Rules need to reflect local culture and wisdom, this requires human understanding that can’t be fully automated. |
| Collective Choice | Both Technology and Community Skills | While we can automate voting systems, making complex decisions needs both good digital tools and human judgment. |
| Monitoring | Mostly Technology | Sensors and pattern-detection software can effectively watch over resources with minimal human intervention. |
| Graduated Sanctions | Both Technology and Community Skills | Enforcing rules needs both automated tracking systems and human understanding of context to be fair. |
| Conflict Resolution | Mostly Community Skills | Solving conflicts requires deep understanding of relationships and local context, something machines can’t effectively replicate. |
| External Recognition | Both Technology and Community Skills | Verifying authority requires both technical systems (like digital certificates) and social acceptance. |
| Nested Systems | Mostly Technology | Coordinating between different levels of organization can be handled well by automated systems and smart contracts. |

---

***Table 3:** Analysis of improvement paths for Ostrom’s principles, showing how different governance challenges require distinct combinations of technological and social solutions.*

Table 3 shows us that some principles provide high-leverage opportunities for intelligent automation (e.g., scalable monitoring), while others require intelligence augmentation (e.g., collective choice) or depend primarily on human capacity-building (e.g., conflict resolution). This pattern emerges because many governance tasks require extensive local knowledge, wisdom, and social context, particularly when making decisions with incomplete information (like adapting local rules) or navigating institutional relationships (like policy coordination). Nonetheless, all principles can benefit from *intelligent infrastructure* that supports complex data management and decision-making, provided it is thoughtfully designed to minimize coordination overhead in human-machine interactions.

Importantly, successful scaling isn’t about replacing human governance with automation, but about developing new sociotechnical capabilities that enhance human agency while addressing these fundamental challenges. While technology can help overcome certain limitations, we must acknowledge that fundamental constraints will likely persist due to incomplete information and irreducible uncertainty. This leads us to the core hypothesis of **regenerative intelligence**.

### Defining Regenerative Intelligence

Having examined the challenges of scaling Ostrom’s principles and the potential of technological solutions, we are now ready to define regenerative intelligence more precisely. This new discipline emerges from the intersection of traditional governance wisdom and modern technological capabilities:

---

> **Regenerative Intelligence (RI)**
> 
> The theory and practice of designing sociotechnical intelligent systems that preserve or enhance social capital, trust and agency while scaling governance capabilities

---

This definition directly addresses the scaling challenges we’ve identified. Each component serves a specific purpose:

- *“Sociotechnical”* acknowledges that pure technological or social solutions alone are insufficient
- *“Intelligent systems”* emphasizes the focus on data-driven intelligent infrastructure
- *“Preserve or enhance social capital”* ensures we don’t sacrifice community bonds for efficiency
- *“Trust and agency”* maintains Ostrom’s emphasis on local autonomy and self-governance
- *“Scaling governance capabilities”* targets our core challenge of extending effective governance beyond local contexts

This leads us to RI’s fundamental problem:

---

> **The Fundamental Problem of RI:**
> 
> How can we design sociotechnical intelligent systems that:
> 
> - Augment human governance capabilities across scales
> - Preserve or enhance human agency
> - Maintain legitimate governance and trust
> - Align machines across diverse communities values

---

Regenerative Intelligence (RI) stands apart from fields like human-computer interaction and mechanism design through its integrated focus on scaling human cooperation, maintaining trust, and aligning technology with social values. While traditional approaches often sacrifice social dynamics for efficiency or limit themselves to small-scale interactions, RI tackles the fundamental challenge of preserving effective governance as systems grow beyond natural human limits. By combining technological innovation with social wisdom, RI’s goal is to provide a framework for addressing complex global challenges like climate change – not by replacing human judgment, but by thoughtfully augmenting our collective capacity to coordinate and govern shared resources while providing digital trust.

## GainForest’s framework to scale Ostrom’s principles

The challenge of actualizing RI in practice is immense, it requires creating systems that can systematically scale governance while preserving human agency and digital trust. At GainForest, we’re working to build the foundations for RI through what we call the *“self-improving sociotechnical loop”* or SISL (pronounced "zizzle") in short, a framework designed to continuously evolve governance capabilities.

![A loop](https://www.daviddao.org/assets/ri/loop.png)

The SISL framework consists of five key stages that work together in a continuous cycle:

1. **Gather, collaborate & govern**: Communities engage in direct digital governance and collaboration
2. **Improve data**: These interactions and local data collection help improve our infrastructure and understanding
3. **Improve tools**: Better data enables the development of more effective tools and systems
4. **Capacity-building**: Enhanced tools support capacity building
5. **Utility feedback**: Throughout each cycle, provide rapid feedback on measured utility to all stakeholders

Throughout this cycle, there’s a constant process of reflection, alignment, and improvement that feeds back into each stage. The ultimate goal is to generate increasing utility, making governance more effective and scalable while preserving human agency and social capital.

In this section, we’ll explore how GainForest’s directly maps SISL to concrete implementations using current technologies:

- **Decentralized infrastructure**, particularly through mechanisms like splits contracts, guilds and DAOs, enables borderless community building across local commons and access to governance tooling.
- **Enhanced data infrastructure** like hypercerts and data markets provide the foundation for better collective sense-making and resource allocation.
- These improvements in turn enable more **sophisticated tools** for governance and coordination.
- Finally, the **co-design of powerful AI systems** as “machine classmates” rather than replacements helps build human capacity while preserving agency, social capital and, most importantly, trust.

### Collaborate and Govern with Decentralized Infrastructure

At the time of writing, our non-profit supports **30** grassroots communities around the world. It grew organically, mostly through peer recommendations, which is reflected in our community distribution. Thanks to our local community champions, regional hubs have formed in South-East Asia, East Africa, and South America.

![GainForest's community](https://www.daviddao.org/assets/ri/gf.png)

Not everyone uses our full technology stack. Most of our communities receive funding through a mechanism we call conservation data income (more on this in Chapter "Lessons from real-world deployment"). While many join for our monthly skill-sharing lessons, some utilize our complete stack and have significantly improved their governance through additional funds, capacity building, and monitoring. What unites all these communities is their use of cryptocurrency.

Cryptocurrency has proven invaluable for our cross-border operations [^8] . The global crypto community, especially the Ethereum community, has been at the forefront of designing some of the best tooling in the world around decentralized governance, largely because blockchains are not owned by a single entity but are instead a collaborative effort of node operators around the world.

The demand for robust financial systems in Global Majority [^9]  countries creates an opportunity for communities to adopt newer technologies more rapidly than the Global North. A great example of this is MPESA in Kenya, a (centralized) digital money system that most Kenyans use daily, eliminating the need for more expensive and slower credit cards. Since its launch in 2007, MPESA has grown to process over 15 million transactions daily and is the infrastructure to 59% of Kenya’s GDP, demonstrating how technological leapfrogging can transform an entire economy. As of 2024, Statista estimates global cryptocurrency ownership rates at 653 million cryptocurrencies users worldwide (8% of the world), many from countries of the Global Majority.

![Splits contract](https://www.daviddao.org/assets/ri/boundaries.png)

Thus, the central coordination point of GainForest has always been a shared smart contract that releases funds once certain criteria (e.g., avoided deforestation) are met [^10] . A public wallet address serves as your immutable digital identity that gets registered, receives funds, and maintains reputation. The public wallet is a technological marvel for Ostrom’s first principle, providing clear boundaries with easy tools for granular access control (addresses can own, transfer, or lose access to certain digital resources and privileges in a fraction of a second).

We leverage a decentralized form of a guild, which we term Nature Guild, to help our communities transition to the decentralized web. Dating back to the Sumerian empire around 3000 BCE in the city of Uruk, guilds began as temple-based craft workshops before evolving into associations of artisans and merchants who oversee the practice of their craft/trade in a particular territory. They have shared treasury, member benefits, and self-governance (members decide who should belong or not belong to a guild). Decentralized guilds replicate these systems with tighter feedback loops. Members (identified by their wallet addresses) can recommend and vote for the inclusion or exclusion of other members. Donations to the guild are sent to a smart contract (an automated bank account) that splits the rewards according to weights set quarterly by each member based on certain requirements (e.g., activity within the guild, impact on nature projects, needs basis).

The power of a decentralized guild lies in its modular extensibility. It provides an accessible platform for community members to interact through digital membership-gated forums, while maintaining accountability through quarterly fund releases and programmatic weighting. Because each member and the guild has a unique digital identity, we can integrate better data, tooling and regenerative intelligence to improve the overall decision-making of the guild.

Lastly, being involved in governance through decentralized technologies provides grassroots communities with more than just technical capabilities, it gives them a voice in shaping the future of technology and resource allocation in the crypto space itself. This is particularly significant when considering that the top five DAOs (Decentralized Autonomous Organization) treasuries within the crypto community currently manage a combined value of approximately $25 billion. Our members used their skills as an entry point to these decentralized communities, which in return enabled them in the past to access potential funds that were previously difficult to receive through traditional means.

### Better Data with Hypercerts and Data Markets

Frontline communities around the world suffer from a critical data gap that holds them back from making efficient decisions. From all biodiversity data ever collected, 82.7% comes from North America and Europe [^11] . Only 0.5% of data is from the Amazon rainforest, where scientists estimate most of the world’s biodiversity lives – hosting an estimated 15% of all known species and potentially millions more undiscovered ones. At GainForest, we see this need for high-quality data as an opportunity – local communities can create huge value through collective data collection.

But the same barriers that created this data gap also make it hard to fix: lack of infrastructure, limited digital skills training, and minimal access to computers and hardware all stand in the way of collecting data at scale. We follow the cosmo-local approach – where knowledge flows globally while production stays local – believing that once a community gets connected to the network, digital knowledge can spread effectively within it. That’s why we see access points like SpaceX’s Starlink (which grew from 100,000 users in 2021 to over 4.6 million customers in over 118 countries in 2024) and basic computing devices as crucial first investments and milestones for getting communities onboard. And while these are big challenges, we’re excited by how fast things are moving – the rate at which communities are adopting these technologies is accelerating. Mobile internet adoption continues to increase, with 57% of the world’s population (4.6 billion people) now using mobile internet on their own device, making digital governance for natural commons increasingly possible.

These technological advances in connectivity create an opportunity to address the fundamental challenges in environmental data collection, but infrastructure alone isn’t enough. We need a system that can simultaneously solve multiple challenges: standardizing data collection across diverse communities, ensuring data quality, creating the right incentives for sustained participation, and fairly compensating communities for their efforts. Furthermore, this system must be able to scale globally while remaining locally adaptable, and provide clear verification mechanisms that build trust between data collectors and end users. Traditional data collection and sharing approaches, often relying on centralized databases or informal arrangements, have struggled to meet all these requirements simultaneously. What’s needed is a new paradigm that combines technological innovation with proper economic incentives, this is where ecological hypercerts enter the picture.

![Hypercerts contract](https://www.daviddao.org/assets/ri/hypercert.png)

Ecological [hypercerts](https://hypercerts.org/) are blockchain-based impact certificates that enforce a structured data standard through three key components: identity (who made the impact), formalized claims (what impact was achieved), and provided evidence (proof of impact). This framework creates an immutable record that links to both provided evidence and public datasets. Through this system, a regenerative intelligence can track reputation scores, perform rigorous evaluations, and monitor ongoing impact – all while allowing communities to improve and extend their work through feedback. The beauty of hypercerts lies in their simplicity: by providing clear, standardized interfaces for impact data only when its needed, they make it possible for both communities and machines to collect, share, and interconnect information effectively and without much overhead compared to traditional extensive methodologies. This interoperability layer is crucial for scaling positive impact through data-driven decision-making and collaborative evaluation.

Most importantly, hypercerts serve as digital proof-of-impact, creating a dynamic ecological data marketplace. Just as carbon credits created a data market for measuring and implementing carbon reduction [^12] , hypercerts creates a market for ecological data collection and verification. Communities are incentivized to collect and validate data because hypercerts can attract financial donors who want to support verified impact. This market mechanism can create a virtuous cycle: better data collection leads to more accurate impact measurement, which attracts more donors, which in turn funds more conservation work and data collection. We believe the benefits extend beyond just funding as communities gain access to sophisticated evaluation tools and personalized output on their impact tracking.

### Decentralizing marketplaces for environmental data

To build effective and equitable data markets that leverage hypercerts’ potential, we must first understand the unique economic properties of data itself. These properties fundamentally shape how we can design markets that serve both local communities and global environmental goals.

At its core, data is **non-rivalry** [^13] , meaning it can be consumed simultaneously by multiple users without degradation of its value or quality. However, the data economy presents an interesting paradox: when datasets grow extremely large, the substantial requirements for infrastructure, storage, and processing create de facto barriers to entry. These barriers effectively generate artificial scarcity in the market, often leading to concerning patterns of centralized data concentration.

Furthermore, as datasets grow, their value typically increases due to **network effects**, the utility and insights derived from the data multiply as more users contribute and more datapoints are added. This is particularly relevant for ecological data, where combining diverse datasets can reveal previously hidden patterns in ecosystem health and biodiversity. While the marginal cost of producing additional data decreases with scale, the initial infrastructure investments create significant hurdles for smaller participants, potentially excluding vital local perspectives.

As an **experience good**, data’s true value often remains uncertain until after it has been used and analyzed. This characteristic creates information asymmetries between data collectors (like local communities) and potential buyers or users, making quality assurance and standardization crucial for building digital trust in environmental data markets.

![luca](https://www.daviddao.org/assets/ri/luca.png)

At GainForest, we’re addressing these challenges by building LUCA, a decentralized marketplace system that bridges hypercerts with environmental data providers. LUCA integrates the demand for evidence created by ecological hypercerts with a decentralized data marketplace, allowing hypercert creators, buyers, and evaluators to query and attest available data across geospatial areas. A data router connects users to a decentralized coalition of data providers, including local communities, NGOs, scientific databases, and private companies, enabling comprehensive environmental data access while maintaining local ownership and control. To manage access and create sustainable economics, LUCA implements a token-based query system that creates controlled scarcity while ensuring fair compensation for data providers. The system’s architecture aims to address the tension between accessibility and quality, allowing communities to participate in and benefit from network effects while maintaining control over their data assets.

![luca](https://www.daviddao.org/assets/ri/ecocerteco.png)

We believe that by combining hypercerts’ standardization with decentralized market mechanisms, we can democratize environmental data, decentralized impact attestations around the hypercert, create trust around formalized impact claims, while ensuring that value flows back to the local data collectors, verifiers and grassroots communities.

### Better Tools with Agentic Function Calls

![Tools for Regenerative Intelligence](https://www.daviddao.org/assets/ri/tools.png)

From our work with communities, we’ve observed that despite their diverse projects, they often share common needs and requirements, such as scalable monitoring and biodiversity assessments. At GainForest, we act as translators, transforming these community needs into actionable, automated workflows. For example, counting trees involves a sequence of actions: community members fly drones, upload imagery, stitch the images together, run machine learning classifiers to identify species, publish results through our web interface, and report findings back to their communities. These tools are critical and useful to standardize and scale information processing.

While our organization helps develop these tools, there’s also a critical need to operate them effectively at scale. One solution is implementing AI-powered automated workflows. These AI agents learn from community examples to understand requirements, utilize available tools from our shared inventory, plan workflows independently, and execute them. This approach is optimal because it provides rapid, always-available feedback loops for community members while requiring only a simple chat interface for interaction. We envision a comprehensive ecosystem consisting of a shared tool inventor managed by a regenerative intelligence system that plans and supports community workflows. This intelligence system communicates with communities through prompts and replies, choosing appropriate tools from the shared inventory to accomplish specific tasks.

This vision requires both additional data and strong collaboration between human knowledge and AI system design. We need to understand: What are the most common workflows communities currently use? What do example dialogues look like? How can we make tools more accessible for machine interaction?

The tools we identified include translation services (crucial for climate negotiations), drone image analysis, bioacoustic monitoring, and hypercerts formulation. The key innovation is creating a registry of community-owned digital commons, tools that are collectively maintained and developed by the communities themselves. We also believe efficient tools not only augment existing data but also generate synthetic data that can be used to further train and improve the regenerative intelligence system, creating a positive feedback loop of continuous improvement and community empowerment.

### Capacity Building with Human-Machine Co-Learning

One of the tech industry’s fundamental mistakes is developing solutions without first identifying real problems to solve. This disconnect emerges when the technology development process excludes its intended users. This is particularly problematic for technology aimed at the Global Majority, as frontline communities are often difficult to access, and from a Silicon Valley perspective, there isn’t a compelling business case to present to venture capitalists.

However, fundamentally we observed that: **Talent is equally distributed but opportunity is not.**

Rather than outsourcing technology development to wealthy nations, we focus on building local capacity within communities. This approach develops a highly skilled digital workforce and creates a positive cycle of advancement. By cultivating problem-solvers who are directly connected to local challenges, we ensure that technology reflects diverse worldviews and experiences. Technology inherently embodies the perspectives of its creators, by incorporating pluralistic views, we develop more inclusive and resilient solutions.

Investing in a skilled local workforce is an investment in both present and future. Through our work, we’ve witnessed community members we’ve trained go on to launch their own ventures, achieve financial independence, and reinvest resources back into their communities and the commons. This creates a sustainable cycle of local empowerment and economic development, demonstrating that when given the opportunity, local talent can drive meaningful technological innovation and social change. In fact, the Global Majority encompasses not only 80% of the world’s population but by far the youngest population in the world, eager to develop the world of tomorrow.

However, how can we scale capacity building effectively? The solution lies in creating equitable collaborations between humans and machines. We already use computers as learning tools in our daily lives, from calculators to search engines. But modern AI systems offer something more: the ability to engage in interactive, adaptive learning experiences. At GainForest, we’ve reframed how we think about AI systems in education. Rather than viewing them as either teachers or tools, we see them as “machine classmates”, collaborative learning partners who are discovering and mastering concepts alongside human learners. Just as human classmates can offer different perspectives, ask clarifying questions, and help work through problems, these AI systems can engage in similar collaborative learning behaviors while adapting to each community’s unique context and needs.

![Improving RI and communities](https://www.daviddao.org/assets/ri/sandwhich.png)

This “classmate” paradigm is particularly powerful because it preserves human agency in the learning process. Unlike a traditional teacher-student hierarchy, classmates learn together as equals. We’ve found that when communities view AI systems as fellow learners rather than authoritative instructors, they’re more likely to engage critically with the technology, question its suggestions, and integrate it thoughtfully into their existing knowledge systems.

### Community-Aligned Regenerative Intelligence

As we build and evolve our relationships with regenerative intelligence, aligning its values with respective communities is crucial for establishing trust and preventing misalignment failures. But how do we program such sophisticated machines alongside communities that are relatively new to digital technology?

What initially appears to be an insurmountable challenge is actually quite approachable. The barrier to entry for building machine learning and intelligence models has never been lower. As machines become more sophisticated, humanity can interact with them at increasingly higher levels of abstraction. We’ve evolved from punch cards in the 1950s and low-level assembly code, through higher-level languages like Python, Rust, and Go, to our current ability to program computers using natural human language.

![Collective RI](https://www.daviddao.org/assets/ri/collective_ri.png)

Constitutional AI [^14]  represents a powerful example of this evolution, allowing us to align AI systems through explicit principles, what the AI startup Anthropic calls a “constitution”, that define desired behavior. These direct, principle-based instructions often prove more effective than demonstration-based learning, where AI systems must infer principles from examples of correct and incorrect behavior. Through our collective co-design workshops with communities, we’ve seen this principle in action. Communities have actively participated in crafting the system prompt for regenerative intelligence, enabling our initial system, Taina, to develop a personality that reflects their values and earns their trust.

However, co-designing solutions and creating value-aligned constitutions are just the beginning. As AI models become more capable while requiring less computational resources, we’re witnessing a democratization of AI that was unimaginable even a year ago, powerful models can now run on local machines. Self-hosted AI models empower communities with genuine data sovereignty, allowing them to decide which information to share with the broader commons and which to maintain for private use. When GainForest helped an Indigenous community partner host their first local model, unexpected applications emerged organically, from archiving traditional wisdom to community members using the system to preserve and teach nearly forgotten languages.

Looking ahead, we envision a future populated by regenerative intelligences speaking different dialects, each guided by its respective community. This creates a dynamic ecosystem where data can be selectively shared or kept private, enabling diverse use cases while respecting community autonomy. This approach ensures that AI development remains grounded in community values and needs, while fostering innovation and preservation of cultural knowledge.

## Lessons from real-world deployment

While regenerative intelligence (RI) is still in its early infancy, its real-world impact is already visible through several pilot projects by GainForest and others in the field. Through implementing the SISL framework across diverse communities, we’ve discovered that one of the most critical challenges in scaling regenerative governance is establishing sustainable funding mechanisms that support communities through their growth journey. Each stage of the self-improving loop—from initial data collection to sophisticated AI implementation—requires appropriate financial resources to maintain momentum and build capacity.

This challenge of sustainable funding directly impacts our ability to scale Ostrom’s principles. While local communities often possess the knowledge and commitment needed for effective resource management, they frequently lack the financial resources to implement comprehensive monitoring systems or participate in broader governance networks. Our response has been to develop a multi-tiered approach that grows with communities. We first start by describing how data-centric funding pathways can provide local communities access to four levels of funding that match their data maturity. We then introduce Conservation Data Income (CDI), GainForest’s RI-augmented evolution of universal basic income that tackles the cold start problem by incentivizing critical data and infrastructure. Building on this foundation, we examine how we can expand CDI to then provide downstream analytics and data skills to local communities.

As communities progress through these funding stages, they become increasingly capable of participating in more sophisticated forms of regenerative intelligence. This journey leads to the introduction of our first preliminary RI agents that support our communities. We meet Taina, who emerged from collaborative design sessions with Amazon Rainforest communities, and her agentic sister Polly, who supports climate negotiators from the Global Majority in international climate discussions. Finally, we examine how all these elements—sustainable funding, community capacity building, and AI assistance—came together as a holistic solution during GainForest’s victory in the XPRIZE Rainforest competition.

### Four Levels of Data-Centric Nature Funding

Small, grassroots environmental communities often face a critical challenge for environmental conservation: securing sustainable funding and income. While carbon credit markets present an apparent opportunity, they typically require prohibitive upfront investments—often hundreds of thousands of dollars—for certification through established registries like Verra or Gold Standard. This financial barrier frequently forces small projects into dependent relationships with external project developers, who act as intermediaries and claim a substantial portion of the potential revenue.

We believe that the GainForest SISL framework can enable a more accessible, stepwise approach focusing on data collection and regenerative intelligence development. SISL enables communities to access four levels of funding streams that match their operational maturity while allowing them to build up capacity and financial stability.

---

| Level | Focus | Funding Sources | Market Size | Requirements to Unlock |
| --- | --- | --- | --- | --- |
| 0\. No Data Infrastructure | Building up essential data infrastructure and core skills | Conservation Data Income | Investment return of Nature Guild Principal Fund | No requirements |
| 1\. Data Collection | Field measurements, species monitoring, community impact tracking | Impact philanthropy, retroactive funding platforms, seed grants | $5 billion in climate philanthropy annually | Established data collection methodology with minimum 6 months of consistent field data, documented community participation process, and basic digital infrastructure for data storage |
| 2\. Analytics | Geospatial analysis, ecological modeling, impact assessment | Research grants, corporate partnerships, monitoring contracts, data marketplace | $17.9 billion environmental monitoring market | Demonstrated 12-month data collection track record, partnerships with research institutions, standardized analysis protocols, trained local team, and data validation system |
| 3\. Market Integration | Carbon sequestration, biodiversity metrics, ecosystem services | Carbon markets, compliance mechanisms, ESG investments | $40 billion projected voluntary carbon market by 2030 | Minimum 24 months of validated data, third-party verification, established baseline measurements, permanent monitoring infrastructure, and certified methodologies |

---

***Table 4:** Four levels of funding unlocked for grassroots communities adopting regenerative intelligence.*

The progression through these levels requires building specific capabilities at each stage as seen in Table 4. Organisations without prior data collection expertise traditionally start at Level 0. At Level 1, organizations must demonstrate consistent data collection practices and community engagement. This includes establishing regular monitoring schedules, training local teams, and implementing basic quality control measures. The transition to Level 2 requires developing more sophisticated analytical capabilities, often through partnerships with academic institutions or technology providers. Organizations must show they can not only collect data but also derive meaningful insights that inform conservation strategies. Reaching Level 3 represents the most significant milestone, requiring organizations to have built robust data infrastructure and demonstrated the ability to maintain long-term monitoring programs. This includes establishing permanent sampling plots, implementing advanced verification protocols, and developing relationships with certification bodies.

![Funding pathway](https://www.daviddao.org/assets/ri/data_funding.png)

**Level 0** funding typically ranges from $ 100 to $ 1000 per project, depending on the Nature Guild Fund’s investment return. At GainForest, we deploy novel funding mechanisms such as Conservation Data Income and SINDA to ease a community’s cold start problem.

**Level 1** funding typically ranges from $ 10,000 to $ 50,000 per project, with environmental philanthropy showing steady growth at 12% annually [^15] . The emergence of retroactive funding mechanisms has created new opportunities, with web3 funding platforms like Gitcoin and Optimism that prioritizes good data. This level serves as a critical entry point for grassroots NGOs, providing them with the resources to establish foundational data collection systems.

**Level 2** tackles the environmental monitoring market driven by increasing corporate and government demand for high-quality ecological data and analysis capabilities [^16] . Successful organizations at this level typically secure funding between $ 50,000 and $ 250,000 per year through a combination of grants and service contracts.

**Level 3** offers the largest funding potential but also requires the most significant investment. Successful projects at this level can generate annual revenues exceeding $ 500,000, though initial certification costs typically range from $ 250,000 to $ 1,000,000. McKinsey’s analysis projects that a gigaton carbon removal market could reach $ 1.2 trillion by 2050, with nature-based solutions playing a crucial role [^17] .

The success of our framework depends on local communities maintaining high data quality standards throughout their development. Early investment in robust data collection and management systems pays dividends as organizations move up the funding ladder, particularly when aiming to seek impact certification and market-based mechanisms. We believe, this approach also helps organizations build credibility with funders and stakeholders, as they can demonstrate a clear progression in their capabilities and impact measurement.

### Conservation Data Income (CDI)

![CDI gif](https://www.daviddao.org/assets/ri/cdi.gif)

**GIF 1: A member of Toca do Tatu in the Amazon rainforest receiving CDI from local data collection and paying in a local supermarket using a crypto wallet**

Within this funding framework, Conservation Data Income (CDI) serves as a crucial entry point, specifically designed to address the challenges of Level 0 projects while building capacity for higher levels. CDI serves as GainForest’s primary funding mechanism and offers a dynamic alternative to traditional universal basic income (UBI). While UBI provides unconditional support, CDI creates intentional feedback loops by linking payments to the quality and quantity of environmental data collected. This approach aims to catalyze the SISL (self-improving sociotechnical loop) framework through micropayments that are currently financed through our philantropic endowment fund. CDI incentivizes three crucial elements: the development of digital infrastructure for data collection, the establishment of wallet addresses for identity and governance participation, and continuous capacity building within communities.

We believe the mechanism is simple yet powerful: as communities become digitally connected and begin collecting high-quality environmental data, they receive proportional rewards in stablecoins [^18]  from the nature guild based on their data quality and governance participation. This kicks off the self-improving cycle where participants are motivated to enhance their data collection methods, improve their tools, and expand their capabilities over time, enabling participants to effectively apply for level 1 funding such as grants and donations.

![Deploying audiomoths](https://www.daviddao.org/assets/ri/audiomoth.webp)

**Image 1: GainForest team members supporting local NGOs with the deployment of audiomoth sensors in the Southern Philippines**

Within CDI market price for data is set by the community themselves. Every year, the community votes on a data council [^19]  that governs data ownership, policy and pricing (e.g. 0.01 $ per min of bioacoustic recordings and 0.05 $ per MB of drone imagery collection). GainForest has successfully implemented CDI in some of the world’s most remote regions, including deep in the Amazon rainforest and the Southern Philippines. In these locations, CDI has funded critical digital infrastructure, including monthly Starlink subscription for communities and local NGOs, enabling their participation in the digital commons. As of this writing, the CDI program has distributed over 30,000 $ to communities in the Global Majority.

### Towards Sustainable Income with Nature Data & AI (SINDA)

![cdi_to_sinda](https://www.daviddao.org/assets/ri/cdi_to_sinda.png)

While CDI successfully addresses basic data collection needs, our experience revealed the necessity for a more comprehensive approach that could help communities climb the value ladder in the data economy. While data collection forms the foundation of modern AI, it currently represents the bottom tier of the data economy pyramid and is traditionally characterized by exploitative working conditions, particularly affecting workers in the Global Majority. Major AI labelling companies like Scale.ai and Sama.ai rely heavily on cheap labor of Global Majority workers for data labeling and content moderation, with Scale.ai employing over 100,000+ people for AI training data labeling and Sama.ai managing content moderation for Meta through workers in East Africa.

The disparity in compensation across the data economy pyramid is particularly striking. AI Research Scientists and ML Engineers in the Global North often earn between $150,000 to $1,000,000 annually, while data laborers in the Global Majority typically earn $2–5 per hour for crucial AI development work. OpenAI’s ChatGPT training data, for instance, was largely labeled by workers earning less than $2/hour.

This is why we at GainForest aim to expand CDI into SINDA (Sustainable Income through Nature Data & AI). SINDA represents a comprehensive approach to climbing the data economy pyramid, starting with fair data collection through transparent pricing and data sovereignty, then building digital skills in data analysis and AI fundamentals. The program creates career pathways through mentorship and specialized training in environmental AI, ultimately enabling local innovation through community-led research initiatives.

SINDA’s goal is to build an equitable system where communities in the Global Majority can participate at all levels of the AI development process. The program aims to train our community members in advanced data analysis, establish local AI research hubs, and support Indigenous-led AI research projects, equipping the Global Majority with the necessary skills for level 2-based funding such as environmental monitoring contracts and scientific grants.

### Taina: Developing RI Agents with Local Communities

This vision of empowering local communities through AI development aligns perfectly with our understanding of who manages most of the world’s biodiversity. Indigenous Peoples, who make up only 15% of the world’s population [^20] , protect more than 80% of the world’s biodiversity. However, these communities are also on the frontlines of the climate and biodiversity crisis. We believe that regenerative intelligence, when placed in the hands of nature’s stewards, can create new economic and cultural opportunities for local communities while helping build resilience and preserve biodiversity. This section introduces Taina, our first efforts in building an AI assistant on Meta’s open-source Llama models, designed to facilitate knowledge sharing among Indigenous and local communities.

The deployment of AI technology requires careful consideration of ethical implications. Current AI systems often exhibit unfairness, vulnerability to attacks, and difficulty in control. These systems can amplify existing systematic biases even with balanced training data. As concerning applications of AI technology continue to emerge [^21] , it becomes crucial for Indigenous Peoples to have a voice in AI development. This participation must occur in a sovereign and decentralized manner to ensure trust, maintain data privacy, and address concerns about data colonialism.

![Taina Governance](https://www.daviddao.org/assets/ri/taina.png)

To develop Taina thoughtfully, our team helped establish an Indigenous and Local Data Council comprising four Indigenous and local communities around Manaus. The council helps control the flow and storage of local knowledge while ensuring equitable benefit sharing. This governance model has proven so successful that GainForest has recently expanded it to all global communities.

Through collaborative workshops with the council, we have identified several key challenges in implementing CDI and SINDA for Indigenous communities:

- Current technologies often fail to accommodate traditional knowledge-sharing methods like storytelling
- Communities express concerns about data exploitation and unequal benefit sharing (data colonialism)

In response to these challenges, we co-created Taina with the following features:

- Multilingual support (English, Portuguese, Spanish, Bahasa, and Swahili) to enable inclusive communication
- Data provenance layer to ensure transparency and ownership of shared knowledge
- Multimodal capabilities (text, image, and speech recognition) to accommodate diverse communication styles
- Respectful engagement with local and Indigenous environmental knowledge
- Implementation through Telegram, a widely used messaging platform in Brazil, eliminating the need for additional applications

![Taina](https://www.daviddao.org/assets/ri/taina.webp)

**Image 2: An example dialogue with a community member and Taina, GainForest’s emerging RI assistant**

The technical implementation of Taina prioritizes community sovereignty and data privacy. Local community members operate their own instances of Taina on local machines, with community-specific Telegram bots storing knowledge exclusively for authorized users. The system processes images through a local image-to-text endpoint, while voice messages are transcribed using a privately hosted Whisper API endpoint. These inputs are then processed by an open-source model designed to maintain engaging, respectful conversations through thoughtful questions and friendly interaction.

Data governance follows strict privacy protocols: all data either flows through community-owned local servers or, with explicit community consent, through GainForest-provided endpoints. In the latter case, data is used solely for inference and immediately deleted afterward, ensuring communities maintain control over their knowledge and information.

Looking ahead, Taina [^22]  and its local community versions will play a crucial role for us in democratizing access to AI technologies while supporting communities’ participation in CDI and SINDA programs, and ultimately deploying RI to scale sustainable self-governance. As an open and transparent platform, it will serve as both a capacity-building tool and a sandbox for communities to experiment with emerging RI. Communities can learn and explore technical concepts like constitutional AI fine-tuning or develop system prompts that align with their cultural values and traditional knowledge systems. We believe this hands-on engagement with intelligent systems not only empowers communities to shape the future of AI development but also ensures that regenerative intelligence evolves in harmony with Indigenous perspectives and needs.

### Polly: Developing RI agents that help facilitate global climate coordination

While Taina demonstrates how regenerative intelligence can empower local communities, we recognized that scaling Ostrom’s principles requires addressing coordination challenges at multiple levels simultaneously. This led us to develop Polly, Taina’s sister agent, who extends regenerative intelligence into the realm of international climate policy, a global coordination problem where traditional governance approaches are falling short. Developed through a partnership between GainForest and the Youth Negotiators Academy (YNA), Polly addresses a critical challenge in global environmental governance: the systemic barriers that prevent youth from the Global Majority from effectively participating in international climate negotiations.

The Conference of the Parties (COP) system represents the world’s primary platform for climate action, biodiversity protection, and desertification prevention [^23] . However, the technical complexity of these negotiations, combined with language barriers and procedural intricacies, often excludes crucial voices from the Global Majority. This exclusion perpetuates existing power imbalances in environmental decision-making, particularly affecting young negotiators who bring vital perspectives to climate discussions.

Building on the principles of regenerative intelligence, Polly serves as an AI assistant specifically designed to democratize access to climate diplomacy. The system supports youth negotiators in several key areas through intelligent tooling:

- Navigating technical complexity through simplified explanations of climate finance and policy concepts
- Bridging language barriers with multilingual support for document analysis and communication
- Providing rapid access to relevant historical context and precedents during time-sensitive negotiations
- Supporting the drafting and analysis of interventions in negotiation settings

Polly’s development and deployment exemplify the SISL framework in action. Through continuous feedback loops with youth negotiators at events like COP29 in Baku and UNCCD COP16 in Riyadh [^24], the system evolves to better serve its users’ needs. This iterative improvement process ensures that Polly remains aligned with the goals and challenges of youth negotiators while maintaining high standards of accessibility and ethical AI deployment.

![Taina](https://www.daviddao.org/assets/ri/polly.jpg)

**Image 3: YNA and GainForest presenting Polly during the Rio Conventions**

The practical impact of this approach was demonstrated during COP29, where GainForest established a dedicated support system at the YNA Hotspot. Here, youth negotiators from 14 countries received hands-on guidance in utilizing Polly to enhance their participation in negotiations. As Emmanuel Elogima Vandi, a youth negotiator from Sierra Leone, noted: "Polly is an excellent tool. It’s been incredibly helpful in navigating the first week at COP, particularly with negotiations related to the SBI and SBSTA [^25] ."

Looking ahead, Polly represents an important step toward more inclusive and equitable climate negotiations. By combining intelligent systems capabilities with human expertise and judgment, Polly helps bridge long-standing gaps in climate diplomacy while aiming to empower the next generation of climate leaders from the Global Majority. The development of both Taina and Polly demonstrates how early versions of regenerative intelligence can operate across different scales and contexts. However, proving the real-world viability of this approach required a more comprehensive test, one that would combine technical innovation, community engagement, and practical impact. This opportunity came with the XPRIZE Rainforest competition.

### Winning the XPRIZE Rainforest Finals with Regenerative Intelligence

Five years ago, when the XPRIZE Rainforest competition was announced, I recognized it as our opportunity to prove the concept of regenerative intelligence to the world. XPRIZE had a history of catalyzing technological breakthroughs through ambitious moonshot competitions, thirty years ago, their first prize kickstarted modern commercial space exploration. The Rainforest XPRIZE presented an extraordinary challenge: teams had just 24 hours to monitor 100 hectares of dense rainforest, without any human entry into the forest area.

The challenge spoke to a fundamental problem in conservation and the need of scaling Ostrom’s fourth principle: Monitoring. Traditional biodiversity assessment and monitoring requires scientists to spend months in the rainforest using invasive methods. With forests disappearing at an unprecedented rate, we simply cannot document and protect species fast enough to inform policy decisions. While automation has become essential for biodiversity monitoring, I knew we needed to move beyond the conventional technology-first approach.

At GainForest, we entered the competition early and later merged with ETH Zurich to form an interdisciplinary team of roboticists, naturalists, AI researchers, and Indigenous scientists. From the national parks of Singapore to the Amazon rainforest, we developed cutting-edge technologies, automated drone sampling, mesh networks, canopy raft sensors, real-time AI monitoring, all in close collaboration with local and Indigenous knowledge holders [^26] .

![Deploying drones](https://www.daviddao.org/assets/ri/drone.jpg)

**Image 4: One of the team’s autonomous drones deploying a canopy sensor in the Amazon rainforest during the XPRIZE Rainforest finals**

The foundation we built with Taina proved crucial during the competition. The trust developed through respectful knowledge-sharing and the governance frameworks established through our Indigenous Data Council enabled genuine collaboration with local communities.

Throughout 2024, we conducted eight co-learning workshops around Greater Manaus [^27], gathering critical feedback from local communities to ensure our technology would serve their needs. What makes me most proud is how these workshops transformed, Indigenous team members who started as participants in our early capacity-building sessions became workshop leaders themselves. This evolution from participants to leaders perfectly embodies our hopes of co-designing sociotechnical intelligent systems through a bottom-up approach.

![Taina](https://www.daviddao.org/assets/ri/taina.jpg)

**Image 5: During the years of the XPRIZE competition, we worked together with Indigenous and local communities to co-design our intelligent systems**

Our workshops followed the SISL framework, establishing continuous feedback loops between technology development and community needs. We started with foundational training in AI, eDNA, and drone technologies, then invited communities to test and critique the technology themselves. Communities joining our frontier data collection efforts learned to use mobile web3 wallets for transparent micropayments. During the XPRIZE, several community members emerged as skilled Indigenous data scientists, ensuring their communities maintained ownership of their data and knowledge.

I’ll never forget the moment our team, Western scientists from Europe and the US alongside local and Indigenous scientists from Brazil and the Amazon, took three speedboats together on the Rio Negro to the competition site. We had achieved something greater than just technical innovation. Traditional knowledge guided our autonomous drones, while monitoring algorithms ran on data methodically collected by local communities over months. We had built a first version of a regenerative intelligent system where technology enhanced rather than replaced human expertise.

![Marina](https://www.daviddao.org/assets/ri/drone_marina.jpg)

**Image 6: During the last months of the XPRIZE competition, through SISL, Indigenous collaborators emerged as Indigenous scientists supporting and leading much of our technology development**

In the end our team were one of the winners of the XPRIZE Rainforest competition, against 298 teams worldwide, which validated our approach to regenerative intelligence. But the true victory came in our next decision, dedicating our entire quarter-million dollar prize to establish an endowment fund supporting future generations of Indigenous scientists and regenerative intelligence bridge builders [^28] . This choice reflects GainForest’s core belief that lasting positive impact requires technological advancement to go hand in hand with social progress.

This journey proved to me that regenerative intelligence isn’t just a theoretical framework, it can be a practical approach to solving complex environmental challenges. By combining advanced technology with Indigenous wisdom, transparent governance, and community empowerment, we showed that the future of governing the natural commons lies in building bridges, between cultures, between knowledge systems, and between generations. And yes, it can even win you an XPRIZE.

## Conclusion

Throughout this essay, we’ve explored how regenerative intelligence (RI) offers a pathway to scale Ostrom’s principles of commons governance beyond their traditional local bounds. At GainForest, we believe that RI is not just a theoretical framework – it’s already demonstrating tangible impact across multiple scales of human cooperation.

### Creating novel funding mechanisms

Our early implementations show how RI can fundamentally transform environmental funding. Traditional mechanisms like carbon credits, while important, often create barriers for grassroots communities through high upfront costs and complex verification requirements. In contrast, RI-enabled approaches like Conservation Data Income (CDI) and SINDA create more accessible, scalable, and robust funding pathways. Our research suggests these mechanisms can achieve greater robustness while requiring less human oversight, making them both more efficient and more scalable than traditional approaches.

By combining automated verification with community-driven governance, these new funding mechanisms reduce operational friction while increasing transparency and trust. The success of our Nature Guild’s data council demonstrates this potential – we’ve seen communities progress from having no data infrastructure to securing philanthropic funding, with one community even obtaining sophisticated environmental monitoring contracts. We believe this stepwise approach can eventually enable communities to participate in carbon markets while maintaining their local autonomy and control.

### Emerging RI agents scaling human cooperation

The development of RI agents like Taina and Polly shows how machine intelligence can augment human capabilities across different contexts. From supporting Indigenous communities in local conservation to helping youth negotiators navigate international climate policy, these early RI implementations are already scaling human cooperation in ways that were previously impossible. Our XPRIZE Rainforest victory has further validated this approach, demonstrating how combining advanced technology with Indigenous wisdom can solve complex environmental challenges more effectively than either could alone.

### Positive tipping points and the race to the top

Perhaps most importantly, we’re beginning to see evidence of what we call “the race to the top”. As communities equipped with RI tools demonstrate higher productivity and earn greater rewards, they create positive examples that inspire others to follow. This dynamic stands in stark contrast to the traditional “race to the bottom” that characterizes many environmental challenges. Instead of competing to extract resources most quickly, communities are incentivized to compete in learning, protecting and regenerating their natural commons.

![Race to the top](https://www.daviddao.org/assets/ri/top.png)

The implications of this shift are profound. As more communities join this positive feedback loop, we expect to see accelerating adoption of regenerative practices. Each success story – whether it’s a community transitioning from basic CDI to sophisticated carbon credits, or an Indigenous data scientist training the next generation – creates new pathways for others to follow. The combination of accessible funding, skill development, and AI assistance removes traditional barriers to participation, enabling communities to leap forward in their capabilities.

This vision of regenerative intelligence ultimately offers something more valuable than just technological solutions – it provides a theory of change for transforming how humanity governs its shared resources. By augmenting human wisdom with machine intelligence in ways that preserve agency and build trust, we can scale cooperation beyond current limitations while strengthening rather than replacing community bonds. In doing so, we may find that the key to solving our greatest environmental challenges lies not in choosing between traditional wisdom and modern technology, but in thoughtfully combining both to create systems that are truly regenerative.

## References

\[1\] Hardin, G. (1968). The Tragedy of the Commons. Science, 162(3859), 1243–1248.

\[2\] Ostrom, E. (1990). Governing the Commons: The Evolution of Institutions for Collective Action. Cambridge University Press.

\[3\] Simon, H. A. (1971). Designing Organizations for an Information-Rich World. In M. Greenberger (Ed.), Computers, Communications, and the Public Interest (pp. 37–72). Johns Hopkins Press.

\[4\] Dunbar, R. I. M. (1993). Coevolution of neocortical size, group size and language in humans. Behavioral and Brain Sciences, 16(4), 681–694.

\[5\] Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.

\[6\] Jones, C. I., & Tonetti, C. (2020). Nonrivalry and the Economics of Data. American Economic Review, 110(9), 2819–2858.

\[7\] McKinsey & Company (2023). Carbon removals: How to scale a new gigaton industry. Sustainability Insights.

\[8\] ClimateWorks Foundation (2024). 2023 Annual Report: Climate Giving Trends.

\[9\] Statista (2024). Global Indigenous Population and Biodiversity Protection Statistics.

\[10\] Markets and Markets (2023). Environmental Monitoring Market Global Forecast to 2026.

\[11\] Amodei, D. (2024). Machines of Loving Grace. Retrieved from [https://darioamodei.com/machines-of-loving-grace](https://darioamodei.com/machines-of-loving-grace)

\[12\] Bai, Y., et al. (2022). Constitutional AI: Harmlessness from AI Feedback. arXiv preprint arXiv:2212.08073.

\[13\] Global Biodiversity Information Facility (2024). Global Biodiversity Data Distribution Analysis.

\[14\] XPRIZE Foundation (2024). Rainforest XPRIZE.

\[15\] Dao, D., et al. (2018). Decentralized Sustainability. Medium, GainForest. Retrieved from [https://medium.com/gainforest/decentralized-sustainability-9a53223d3001](https://medium.com/gainforest/decentralized-sustainability-9a53223d3001)

## Appendix A: Glossary of Key Terms

**Agentic Function Calls**: Tools and protocols that allow AI systems to autonomously plan and execute sequences of actions while maintaining alignment with community values and goals.

**Conservation Data Income (CDI)**: A funding mechanism that provides regular payments to communities based on their environmental data collection and monitoring activities, serving as an entry point for community participation in digital conservation.

**Data Colonialism**: The practice of extracting data from communities, particularly in the Global Majority, without providing fair compensation or maintaining their sovereignty over the information.

**Data Sovereignty**: The right of communities to maintain control over the collection, ownership, and use of their data, including traditional knowledge and environmental information.

**Digital Commons**: Shared digital resources, including tools, data, and knowledge, that are collectively maintained and governed by a community.

**Digital Trust**: The confidence in digital systems and their governance, established through transparent operations, fair participation, and clear accountability mechanisms.

**Dunbar’s Number**: A theoretical cognitive limit (approximately 150) to the number of stable social relationships an individual can maintain, influencing the natural scale of direct human cooperation.

**Global Majority**: People of African, Arab, Asian, and Latin American descent, representing approximately 80% of the world’s population. The term is preferred over “Global South” or “developing world.”

**Hypercerts**: Blockchain-based certificates that formalize impact claims through structured data standards, including identity, claims, and evidence components.

**LUCA**: A decentralized marketplace system that connects hypercerts with environmental data providers, enabling fair compensation for data collection while maintaining community sovereignty.

**Nature Guild**: A decentralized organization structure that enables communities to collectively govern natural resources and manage shared funds through transparent, programmable rules.

**Ostrom’s Eight Principles**: Core design principles for successful commons governance identified by Nobel laureate Elinor Ostrom:

1. Clear boundaries
2. Local rules
3. Collective choice
4. Monitoring
5. Graduated sanctions
6. Conflict resolution
7. External recognition
8. Nested systems

**Regenerative Intelligence (RI)**: The theory and practice of designing sociotechnical intelligent systems that preserve or enhance social capital, trust, and agency while scaling governance capabilities.

**Self-Improving Sociotechnical Loop (SISL)**: A framework for continuous improvement in governance capabilities through iterative cycles of data collection, tool development, and capacity building.

**SINDA (Sustainable Income through Nature Data & AI)**: An expanded version of CDI that focuses on building higher-value data economy skills within communities.

**Smart Contract**: Self-executing contracts with terms directly written into code, enabling automated and transparent execution of agreements.

**Sociotechnical Systems**: Systems that integrate social and technical components, recognizing that effective solutions must address both human and technological factors.

**Splits Contract**: A smart contract that automatically distributes funds according to predetermined rules and weights set by community members.

**Stablecoin**: A cryptocurrency designed to maintain a stable value, typically pegged to a fiat currency like the US dollar.

**System 1 and System 2 Thinking**: Cognitive processes identified by Daniel Kahneman:

- System 1: Fast, intuitive, and emotional thinking
- System 2: Slower, more deliberative, and logical thinking

**Taina**: An AI assistant co-designed with Indigenous communities to facilitate knowledge sharing and support conservation data collection while respecting traditional knowledge systems.

**Tragedy of the Commons**: An economic theory describing how individual actors, acting in self-interest, can collectively deplete a shared resource, even when it’s against everyone’s long-term interest.

**Polly**: An AI assistant designed to support youth negotiators from the Global Majority in international climate negotiations by providing technical analysis and policy context.

**Positive Tipping Points**: Critical thresholds where system changes become self-reinforcing in beneficial ways, creating accelerating positive impact.

**Race to the Top**: A dynamic where communities are incentivized to compete in protecting and regenerating resources, contrary to the traditional “tragedy of the commons.”

**Regenerative Practices**: Actions and methods that restore, renew, or revitalize their own sources of energy and materials, creating sustainable systems.

**Retroactive Funding**: Funding mechanisms that reward verified positive impact after it has been achieved and documented.

**Social Capital**: The networks of relationships among people that enable a society to function effectively, including trust, norms, and social networks.

**Technological Leapfrogging**: The ability to skip intermediate stages of technology adoption, moving directly to more advanced solutions.

**Traditional Knowledge**: The knowledge, innovations, and practices of Indigenous peoples and local communities, developed from experience gained over centuries and adapted to local culture and environment.

**Value Ladder**: A progression of increasing value creation capabilities, from basic data collection to sophisticated analysis and market integration.

**Web3**: A decentralized version of the internet based on blockchain technology, emphasizing user ownership, digital trust, and transparent governance.

### Footnotes

[^1]: taken from my initial 2018 essay on “Decentralized Sustainability” [https://medium.com/gainforest/decentralized-sustainability-9a53223d3001](https://medium.com/gainforest/decentralized-sustainability-9a53223d3001)

[^2]: “Therein is the tragedy. Each man is locked into a system that compels him to increase his herd without limit — in a world that is limited. Ruin is the destination toward which all men rush, each pursuing his own best interest in a society that believes in the freedom of the commons” (Hardin 1968, p. 1,244)

[^3]: Ostrom’s eight robust design principles, first published in her 1990 book “Governing the Commons” are: Clear boundaries, local rules, collective choice, monitoring, graduated sanctions, low-cost conflict resolution, external recognition and nested systems. They were part of a wider framework she introduced on governing the commons.

[^4]: Dario Amodei explains the capabilities of powerful AI in his essay “Machines of Loving Grace” [https://darioamodei.com/machines-of-loving-grace](https://darioamodei.com/machines-of-loving-grace)

[^5]: According to Robin Dunbar, humans typically concentrate their social interactions on a very small group of people. We spend about 40% of our social time with an intimate inner circle of just 5 people, and another 20% with the next closest group of 10 people. At most around 150 people.

[^6]: “In an information-rich world, the wealth of information means a dearth of something else: a scarcity of whatever it is that information consumes. What information consumes is rather obvious: it consumes the attention of its recipients. Hence a wealth of information creates a poverty of attention and a need to allocate that attention efficiently among the overabundance of information sources that might consume it.” (Herbert Simon (1971))

[^7]: In his 2012 book “Thinking Fast and Slow”, Kahneman’s differentiates between two modes of thought: “System 1” is fast, instinctive and emotional; “System 2” is slower, more deliberative, and more logical.

[^8]: Traditional banking poses significant challenges for Global Majority countries. Cross-border transactions from Switzerland to Uganda, for instance, involve large fees and days of waiting. After our first bank donation to Brazil, our bank even flagged the transaction as suspicious, highlighting the barriers in traditional financial systems.

[^9]: The term “Global Majority” refers to people who are of African, Arab, Asian, and Latin American descent, representing approximately 80% of the world’s population.

[^10]: An old TEDx talk goes into the background story of GainForest: [https://www.youtube.com/watch?v=186F3u-Lc64](https://www.youtube.com/watch?v=186F3u-Lc64)

[^11]: Data from the Global Biodiversity Information Facility (GBIF), [https://www.gbif.org](https://www.gbif.org/)

[^12]: An argument can be made that existing carbon markets are nothing but well advertised but overly structured case of ecological data markets with manual data collection.

[^13]: Jones, Charles I., and Christopher Tonetti. 2020. “Nonrivalry and the Economics of Data.” American Economic Review, 110 (9): 2819–58.

[^14]: Constitutional AI: Harmlessness from AI Feedback. Bai *et al* [https://arxiv.org/abs/2212.08073](https://arxiv.org/abs/2212.08073)

[^15]: “Record growth: In 2023, climate giving grew by 20% year over year, with foundation funding reaching a record $ 4.8 billion – nearly triple the $ 1.7 billion in 2019. Africa, Other Asia and Oceania, and Latin America … received an estimated 20%.” ClimateWorks Foundation (2024)

[^16]: Markets and Markets (2023) “Environmental Monitoring Market Global Forecast to 2026”

[^17]: McKinsey & Company (2023) [https://www.mckinsey.com/capabilities/sustainability/our-insights/carbon-removals-how-to-scale-a-new-gigaton-industry](https://www.mckinsey.com/capabilities/sustainability/our-insights/carbon-removals-how-to-scale-a-new-gigaton-industry)

[^18]: A stablecoin is a cryptocurrency that is usually pegged to the US dollar.

[^19]: You can learn more on the council here: [https://gainforest.substack.com/p/introducing-the-gainforest-data-council](https://gainforest.substack.com/p/introducing-the-gainforest-data-council)

[^20]: Statista and 2021 State of the Environment report. [https://www.statista.com/chart/27805/indigenous-communities-protect-biodiversity/](https://www.statista.com/chart/27805/indigenous-communities-protect-biodiversity/)

[^21]: A resource we maintain to track awful AI use cases is: [https://github.com/daviddao/awful-ai](https://github.com/daviddao/awful-ai)

[^22]: As of January 2025, a public version of Taina can be accessed here for test purposes: [https://telegram.me/tainagainforestbot](https://telegram.me/tainagainforestbot)

[^23]: The COP system includes three major environmental conventions: the UN Framework Convention on Climate Change (UNFCCC), the Convention on Biological Diversity (CBD), and the UN Convention to Combat Desertification (UNCCD). These are collectively known as the Rio Conventions.

[^24]: To learn more about Polly during COP16, you can find the Earth Negotiations Bulletin report of our work here [https://enb.iisd.org/future-leaders-network-ai-tools-unccd-cop16](https://enb.iisd.org/future-leaders-network-ai-tools-unccd-cop16)

[^25]: SBI (Subsidiary Body for Implementation) and SBSTA (Subsidiary Body for Scientific and Technological Advice) are the two permanent subsidiary bodies of the UNFCCC. They play crucial roles in providing technical expertise and ensuring implementation of COP decisions.

[^26]: Watch Swissnex documentary on our work [https://www.youtube.com/watch?v=9tlBL5RDoJc](https://www.youtube.com/watch?v=9tlBL5RDoJc)

[^27]: More on our workshops here can be found here [https://gainforest.substack.com/p/gainforests-journey-with-eth-biodivx-306](https://gainforest.substack.com/p/gainforests-journey-with-eth-biodivx-306)

[^28]: Official announcement of our XPRIZE win and endowment fund: [https://www.linkedin.com/pulse/donating-xprize-rainforest-prize-future-generations-modern-dao-6iyze/](https://www.linkedin.com/pulse/donating-xprize-rainforest-prize-future-generations-modern-dao-6iyze/)
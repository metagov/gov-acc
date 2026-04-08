# Wiki Update — 2026-04-08

3 new substantive participants since last update (March 10, 49 engaged → 52 engaged). Update participant counts from /49 to /52 across all problem pages.

## New Participant: Martin Schmidt (Mar 10, 12 msgs)

**Problem**: Decentralized enforcement of subjective rules
- Most onchain orgs rely on rules requiring interpretation, but enforcement is poor compared to traditional legal structures
- DAOs fall back to centralized, intransparent decision-making that creates legal risks
- **Maps to**: `problems/Technical and Legal Gaps.md`
- **Evidence**: Oracle failures in prediction markets, unclear DAO treasury investment rules, foundations overriding votes, self-dealing and quid-pro-quo handouts

**Solutions proposed**:
- Enforcement by committees
- Kleros, UMA (game-theoretic dispute resolution / subjective oracles) — already in wiki
- Restaking protocols (Eigen, Symbiotic) — NEW
- QGOV (mix of elected enforcement committee + external dispute resolution) — NEW
- Forking protocol ("Backstop L2") — concept stage, paper by Silke Noa et al — NEW
- Contestable control — paper by Jeff Strnad, Martin implementing experimentally — NEW
- AI-based rule enforcement — experimental — already partially covered

**Actions**:
- Update `problems/Technical and Legal Gaps.md`: increment participant count, add Martin's evidence
- Create or update solution pages for: QGOV, forking protocol, contestable control
- Add restaking protocols mention to relevant solution page

---

## New Participant: Bianca / University of Lucerne (Mar 22, 14 msgs)

**Problem 1**: Governance theater
- Formal voting/consensus mechanisms presented as democratic but lack genuine debate
- Decisions portrayed as collective actually favor influential participants
- **Maps to**: `problems/Governance Theater.md`
- **Evidence**: AIP-1 controversy — Foundation framed it as ratification of pre-existing decision, tokens moved/converted before community vote concluded. Detailed in her book chapter "Code, Community, and Conflict: DAO Disputes" (Foundations of Decentralized Organizations, OUP 2026, co-edited by Bianca with Kevin Werbach and Eva Michele)

**Problem 2**: Dispute resolution vacuum
- No escalation path or trusted third party when DAO disputes arise
- Codes of conduct exist but can't be enforced
- **Maps to**: `problems/Technical and Legal Gaps.md`
- **Evidence**: Optimism systematically tried multiple approaches: foundation handling enforcement (community unhappy), community vote (didn't want responsibility), elected council (concerns about power concentration). "There's power inherent in being responsible for dispute resolution."

**Solutions proposed**:
- Governance minimization / honesty by design — be explicit about what DAO actually controls vs what it doesn't — NEW framing
- Layered dispute resolution: Q Protocol, Kleros for lower-value disputes — already in wiki
- Role clarity via Hats Protocol — already in wiki
- Combined approach: prevention + mediation + on-chain + hybrid off-chain (her book Section 6)
- Dual governance (Lido DAO model) — already in wiki

**Actions**:
- Update `problems/Governance Theater.md`: increment participant count, add AIP-1 evidence from Bianca
- Update `problems/Technical and Legal Gaps.md`: add dispute resolution vacuum evidence from Optimism experiments
- Add "governance minimization" concept to relevant solution page or create new

---

## New Participant: Tino / SEEDGov (Mar 23, 17 msgs)

**Problem 1**: Misalignment of interests
- Protocol teams want growth, DAOs want efficiency, token holders want price, delegates want compensation
- Failure is inability to converge separate goals into shared north star
- **Maps to**: `problems/Lack of Clear Purpose.md` (closest match)
- **Evidence**: Founders/CEOs blame DAOs for protocol failures; DAOs blame external factors

**Problem 2**: No accountability system
- Delegates compensated regardless of outcomes
- Only accountability mechanism is reputational cost, which is weak
- Good delegates leave, value-extractors stay (adverse selection)
- **Maps to**: `problems/Broken Contributor Economies.md`
- **Evidence**: Tino personally witnessed underdelivery → payments anyway → further nominations. Milestones exist but enforcers are "too lax."

**Problem 3**: Voting mechanism fatigue
- All decisions treated with same heavyweight process
- Discussion periods too long, people vote to move on
- **Maps to**: `problems/Voting Fatigue.md`
- **Evidence**: Scroll DAO treasury management — months of debate, delegates derailed progress, people voted from exhaustion, then Foundation paused DAO and work was wasted.

**Solutions proposed**:
- Better alignment definition from the beginning — define shared north star — NEW framing
- Fast-tracks, BORGs, committees (Lido) — already in wiki as [[Specialized Committees]]
- AI-powered accountability rails — detect deviation automatically — NEW
- Stronger enforcement of existing mechanisms

**Actions**:
- Update `problems/Lack of Clear Purpose.md`: increment count, add misalignment evidence
- Update `problems/Broken Contributor Economies.md`: increment count, add accountability gap evidence, adverse selection pattern
- Update `problems/Voting Fatigue.md`: increment count, add Scroll DAO evidence
- Consider new solution page for "AI-powered accountability rails"

---

## Summary of Updates Needed

### Participant count updates (49 → 52 across all problem pages)
All 11 problem pages in `problems/` need their "/49" references updated to "/52".

### Problem pages to update with new evidence:
1. `Technical and Legal Gaps.md` — Martin (subjective rules) + Bianca (dispute resolution vacuum)
2. `Governance Theater.md` — Bianca (AIP-1, book reference)
3. `Lack of Clear Purpose.md` — Tino (misalignment)
4. `Broken Contributor Economies.md` — Tino (accountability, adverse selection)
5. `Voting Fatigue.md` — Tino (Scroll DAO)

### New solution pages to create:
1. QGOV (elected committee + external dispute resolution)
2. Forking Protocol / "Backstop L2" (Silke Noa et al)
3. Contestable Control (Jeff Strnad, Martin Schmidt implementing)

### Existing solution pages to update:
- `AI Dispute Resolution.md` — add restaking protocols (Eigen, Symbiotic), AI-powered accountability rails
- Consider "Governance Minimization" as new solution page (Bianca's framing)

### Dashboard update:
- Update `phase1/` HTML dashboards with 52 engaged participants
- Dashboard source data is in `../gov-acc-research/`

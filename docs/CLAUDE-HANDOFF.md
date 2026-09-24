# Claude Code / Claude Cowork Handoff

You are building the public AMA Solutions website in this repository. Treat the repository as the canonical source of truth for website decisions and implementation. Read this file, `README.md`, `docs/PROJECT-BRIEF.md`, and `docs/SITE-MAP.md` before changing code or copy.

## Approved direction

- AMA Solutions Corp is the company and public commercial front door.
- HAMAL is the top coordinating Mob and intelligence layer connecting Hanzo, AMA, and Lux.
- The 12 Art Mob teams are the client-facing delivery units; clients engage a relevant Mob or portion of a Mob.
- The intended network is 144 AGInts across 12 Mobs. Do not represent the entire roster as deployed.
- Foundry OS is in development, with modularity and licensing as a longer-term goal.
- The audience priority is strategic partners and investors, with clients also able to find an engagement path.
- Make the campus an engaging story and navigation concept, while ensuring visitors can quickly understand the company and contact it.

## Reference repos

Consult these repositories for their own domains. Their current stage labels govern how their capabilities can be described:

- HAMAL doctrine and Mob playbooks: https://github.com/MajorDream444/HAMAL_MOB_PLAYBOOKS
- Paid delivery machinery: https://github.com/MajorDream444/AMA-Rabbit-Delivery-System
- Proposed execution rail: https://github.com/MajorDream444/Mobstack
- Agent registry: https://github.com/MajorDream444/hamal-agent-registry
- Specialist agent reference library: https://github.com/MajorDream444/agency-agents
- Command center: https://github.com/MajorDream444/Major-OS-AMA-OS--Command

Do not treat the external agent library as AMA’s approved roster. Do not move implementation from the command center, playbooks, delivery system, or MobStack into this website repo.

## Working rules

1. Inspect the existing repo and preserve useful work.
2. Before choosing a framework, inspect the root files and explain the proposed stack briefly. Keep the choice easy to run and deploy.
3. Keep website copy grounded in the project brief. If a factual claim is unclear, mark it for owner review instead of inventing it.
4. Clearly label vision, prototype, in-development, and verified-live capabilities.
5. Keep contact, email, booking, and investment calls to action as placeholders until their destinations and wording are confirmed.
6. Build an accessible, responsive site; support keyboard navigation and reduced motion.
7. Do not add secrets, live external integrations, payment flows, investor terms, or automated claims.
8. Record material content and architecture decisions in this repo.
9. Run the checks appropriate to the selected stack and report what passed.

## First task

Inspect the repository and report:
- current branch and file structure
- the best minimal website implementation plan
- any owner decisions needed before launch

Do not start a speculative backend or claim the site is live.

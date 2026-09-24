# Claude Cowork Project Setup — AMA Solutions Website

Use the short **Project description** below in Cowork’s description field. Paste the complete, persistent instruction set from [COWORK-PROJECT-INSTRUCTIONS.md](COWORK-PROJECT-INSTRUCTIONS.md) into the project instructions field. Then use the **First Cowork prompt** to begin the build.

## Project description

```text
Build the public website for AMA Solutions Corp in this GitHub repository: https://github.com/MajorDream444/amasolagi-site

AMA Solutions Corp is the company, client-facing commercial entity, and intended investment vehicle. The site is for strategic partners and investors, while also giving prospective clients a clear path to discuss work.

Core model: HAMAL is the coordinating Mob and intelligence layer connecting Hanzo, AMA, and Lux. The 12 Art Mob teams are the client-facing delivery units; the campus vision is 144 AGINT positions across the network. Do not state a per-Mob count until the canonical roster is reconciled. Foundry OS is an operating system in development, intended to make agent-enabled work modular and eventually licensable.

Keep this site focused on the corporation. Major Dream Williams’s personal journey, doctrine, and books belong on majordreamwilliams.com. AI education belongs on Major AI Mindset at majoraimindset.com. Both domains appear active, but hosting and DNS routing still need verification. AMA’s intended domain is amasolagi.com; deployment and DNS routing also need verification.

GitHub is the source of truth. Read the project docs before building, preserve the status labels in each reference repo, and distinguish proposed concepts from verified live capabilities. Build the website in this repository; do not build the command center, HAMAL runtime, MobStack, or MAIM here.
```

## First Cowork prompt

```text
We are ready to build the AMA Solutions corporate website in this repository. Read README.md and these project documents first:

- docs/PROJECT-BRIEF.md
- docs/BRAND-BOUNDARIES.md
- docs/SITE-MAP.md
- docs/CLAUDE-HANDOFF.md
- docs/CAMPUS-ARCHITECTURE.md
- docs/MOB-TOOL-CATALOG.md
- docs/source-reference/ART_MOB_AGINTS_HISTORICAL_REFERENCE_ANNEX.md
- docs/source-reference/AMA_Mobs_Campus_Content_Workbook.xlsx
- docs/source-reference/FOUNDER-ORIGIN-ATHLETE-LEGACY.md

Then inspect the current repository and its branch. Do not stop after summarizing or ask me to repeat decisions already recorded in the docs. If the repository has no app yet, choose a simple, maintainable, Vercel-compatible frontend stack, explain the choice in a short note, and implement the first complete website release in this repo.

Build a polished, responsive, accessible AMA Solutions site with:
1. Home: clear company positioning and direct paths for “Build with us,” “Explore investment,” and “Discuss a project.”
2. How it works: AMA, HAMAL, 12 Mobs, Hanzo, Lux, and Foundry OS explained plainly.
3. The 12 Mobs: problem-first navigation and the proposed campus district concepts. Include tools only as concepts unless verified. Make the campus compelling while keeping the business facts obvious.
4. Foundry OS: clearly marked in development.
5. Founder: concise and relevant to AMA’s origin and leadership. Link to majordreamwilliams.com only as a destination to verify; do not turn this into Major’s personal site.
6. Partner / Invest: separate partner and investor inquiry paths. Do not publish securities terms or imply an open public offering.
7. Contact: a useful inquiry form or clearly marked placeholder with no false claim of delivery.

Keep proposed, historical, prototype, in-development, and verified-live material distinct. Do not publish unverified leader personas, client outcomes, testimonials, prices, partner commitments, NFT features, smart-contract royalty claims, or claims that all 144 AGInts are active. Use “144 designed positions” unless a current deployment roster is verified.

Treat the following as separate future workstreams; do not configure or deploy them as part of this AMA site task:
- MAIM’s Vercel relaunch: the previous account is no longer the active setup; Major says a new Vercel connection exists, but its project, repo, and deployment mapping must be inspected separately.
- Email: show intended contact points as placeholders until the mail provider, domain DNS, receiving owners, and response process are confirmed. Do not create mailboxes, agent email identities, automated replies, outbound outreach, or MX/DNS changes without a separately approved implementation.
- Domain deployment: amasolagi.com is the intended site domain, but do not change DNS or claim production launch until the correct Vercel project and domain assignment are confirmed.

Before choosing a stack, inspect the repository. Then build the first complete front-end version with real responsive layouts, keyboard support, reduced-motion handling, and working internal navigation. Avoid speculative backend services and live external integrations. Do not leave the project in a planning-only state.

After implementation, run the relevant build and checks. Report the files changed, the commands and results, what remains as a launch placeholder, and the preview/deployment state. Do not deploy to production, change DNS, provision email, or create external accounts as part of this task.
```

## Current infrastructure notes

- AMA site repo: https://github.com/MajorDream444/amasolagi-site
- Intended AMA domain: https://amasolagi.com
- Personal site: https://majordreamwilliams.com
- MAIM site: https://majoraimindset.com
- Domain dashboard showed all three domains active. That does not verify site hosting, DNS records, email routing, or Vercel assignments.
- User says MAIM was previously associated with a different Vercel account and now has a new Vercel link/connection. Inspect that separately when the MAIM relaunch begins.
- Email aliases such as `info@amasolagi.com` are ideas only; no mailbox should be represented as active until provisioned and tested.

## Reference repositories

- HAMAL doctrine and Mob playbooks: https://github.com/MajorDream444/HAMAL_MOB_PLAYBOOKS
- AMA paid delivery machinery: https://github.com/MajorDream444/AMA-Rabbit-Delivery-System
- MobStack execution rail proposal: https://github.com/MajorDream444/Mobstack
- HAMAL agent registry: https://github.com/MajorDream444/hamal-agent-registry
- Agent definition reference library: https://github.com/MajorDream444/agency-agents
- AMA command center: https://github.com/MajorDream444/Major-OS-AMA-OS--Command

Use reference repos to understand boundaries and maturity. Do not copy their code or claim their proposal-stage systems are production-ready.

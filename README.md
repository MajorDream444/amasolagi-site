# AMA Solutions Website

**Planned public domain:** [amasolagi.com](https://amasolagi.com) — domain is active; website deployment and DNS routing are not yet verified.

Public website for **AMA Solutions Corp**: the company’s home for strategic partners, investors, and clients.

This repository is the canonical home for website code, approved website copy, design decisions, and implementation handoffs. GitHub is the source of truth. Claude Code, Claude Cowork, and Codex are work surfaces that should read and update this repository.

## Start here

1. [Project brief](docs/PROJECT-BRIEF.md)
2. [Site map](docs/SITE-MAP.md)
3. [Claude handoff](docs/CLAUDE-HANDOFF.md)
4. [Cowork setup and first build prompt](docs/COWORK-STARTER.md)
5. [Persistent Cowork project instructions](docs/COWORK-PROJECT-INSTRUCTIONS.md)

## Company and product story

- **AMA Solutions Corp** is the Delaware C corporation, client-facing commercial entity, and intended investment vehicle.
- **HAMAL** is the coordinating intelligence layer connecting Hanzo, AMA and Lux. HAMAL develops and maintains playbooks, shared context, and orchestration that equip the delivery teams.
- **The 12 Art Mob teams** are the client-facing delivery units. The vision is 144 AGInts across 12 Mobs. Clients engage the Mob or portion of a Mob suited to their needs.
- **Foundry OS** is an operating system in development, intended to make agent-enabled work modular, operational, and licensable.
- **Hanzo** and **Lux** contribute to the wider HAMAL architecture where applicable. Describe project-specific involvement only when confirmed.

## Reference repositories

These are separate systems with separate responsibilities. Consult them as references; do not copy their implementation wholesale into this site.

- [Major OS / AMA OS Command Center](https://github.com/MajorDream444/Major-OS-AMA-OS--Command)
- [HAMAL Mob Playbooks](https://github.com/MajorDream444/HAMAL_MOB_PLAYBOOKS)
- [AMA Rabbit Delivery System](https://github.com/MajorDream444/AMA-Rabbit-Delivery-System)
- [MobStack](https://github.com/MajorDream444/Mobstack)
- [HAMAL Agent Registry](https://github.com/MajorDream444/hamal-agent-registry)
- [Agency Agents reference library](https://github.com/MajorDream444/agency-agents)

## Website project

- GitHub repository: [MajorDream444/amasolagi-site](https://github.com/MajorDream444/amasolagi-site)
- Vercel project: [hamal-agi/amasolagi-site](https://vercel.com/hamal-agi/amasolagi-site)

The Vercel link identifies the project dashboard. Verify the latest deployment, assigned domains, and production status in Vercel before describing the website as live.

## Truth rules

Do not imply that all 144 AGInts, Mobs, workflows, products, or integrations are deployed or available. Keep designed vision, prototype, in-development, and verified-live work distinct. Do not invent client results, testimonials, pricing, agent identities, or partner commitments. Human review and accountability remain part of delivery.

## Current implementation status

Project documentation is initialized. Use [the Cowork starter](docs/COWORK-STARTER.md) to begin implementation; the framework is intentionally left for the builder to select after inspecting the repository.

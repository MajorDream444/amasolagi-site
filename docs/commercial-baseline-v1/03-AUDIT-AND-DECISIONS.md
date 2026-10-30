# Audit and decision record
As of 30 October 2026

## Verified through GitHub in this session
- Canonical website repository: MajorDream444/amasolagi-site. Remote main d955b96aec727b9c6bb51e256fd522f1e8fb9901.
- Main contains corporate brand and advisory handoffs, contact/subscribe API routes, Resend setup and supabase/project-binding.json. No src/lib/commerce catalog or products route appears in the inspected main tree.
- No open PRs returned at audit time. Existing branches include docs/advisory-storefront-handoff-2026-10-29 and docs/ama-corporate-brand-system. Their content is already represented on main; do not reopen duplicate handoff work.
- Main advisory handoff says existing Next.js/Vercel site is production architecture; AI Studio app is UX/behavior reference. That resolves the front-door choice: integrate the best interaction into Next.js.
- Existing Supabase project binding is njpdlomvyalxrkluaige with runtime not switched and schema review pending. Existing Resend docs describe separate marketing opt-in and disabled welcome automation pending checks. Do not overwrite these with the older email-only assumption.
- Repository AGENTS.md requires installed Next.js documentation before code edits. This task adds documentation/data, not runtime code.

## Owner/Claude-reported local state, not independently executed here
- Next.js local feat/ama-products-commerce at 697a62a: catalog/pages, 14 tests, lint/type/build passed; later checkpoint source inspected in earlier packaging. Branch is absent from current remote branch list.
- AI Studio local feat/stripe-gated-fulfillment at 578e4c7: signed webhook and gated integrations, 71 mocked tests reported, generic voice labeling; exact repository not discoverable in connected repo search. Local code and tests are not audited in this turn.
- JSON-file order persistence remains a reported blocker for ephemeral/multi-instance deployment. No claim that reported provider integrations work live.
- Stripe current products/prices, Google paid scheduling, actual voice identity and deployment readiness were not re-tested. Earlier generic $50 AMA link is not an approved service mapping. No payment/account changes in this task.

## Decisions frozen for implementation
1. Existing Next.js website is the commercial front door; integrate reviewed advisory UX without a second catalog.
2. 18 production offers plus two consulting offers; keep the three existing bundle/download proposals held. No new offers.
3. $350/60 minutes and $1,250/90-minute workshop supersede prototype $650/$950 and unverified $550 variations. No automatic discount anchors, free implementation credits, MAIM $249 offer or cohort benefits.
4. Paid design is a deliverable. Separate implementation uses a scoped proposal, not a fabricated fixed-price package.
5. Agent guides and workers assist; human acceptance and source-backed conclusions remain explicit.
6. Common metadata and layered context are required, with client isolation. Shared organizational learning uses separately approved de-identified material.
7. The latest supplied logo ZIP is v002 DRAFT. Use Original-Cutout source artwork for reference application; vector, two-tone and favicon proposals remain draft. NOTES says 62 dots in artwork, not 144. Do not market the dot count as a deployed headcount or redraw it to match an agent total. Horizontal draft lockup is light-background-only. Missing one-color/dark lockup needs design handoff, not engineering improvisation.

## Price reconciliation and history
Catalog v002 replaced six earlier entries with Find the Friction, Find Your Opening, Idea to MVP, RFP Response Starter, Policy Gap Review and Project Clarity Brief. Preserve retired SKUs in history/aliases, not active checkout. Stable IDs in v1 remain identical to v002. Version metadata is now 1.0.0. Prices did not change. Bundle proposals remain $995/$1,250/$59. Validate actual costs and buyer demand through paid pilots rather than claiming market validation.

## Investor statement boundary
The presentation describes the business design and current evidence. No revenue, paid customer count, market size, performance guarantee, signed partner commitment, autonomous agent deployment or investment return is asserted. Raise amount, valuation, instrument, budget and forecast are not specified. Validate buyer demand, delivery margin, recurring retention and reliable integrations before using them as claims.

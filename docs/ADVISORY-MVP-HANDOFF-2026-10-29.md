# AMA Advisory MVP: Integration Handoff

**Date:** 2026-10-29  
**Purpose:** Take the AI Studio advisory MVP from mockup to a reviewed, truthful, production-ready entry point on the existing AMA Solutions website.

## Source of truth and deployment

- Website repository: [MajorDream444/amasolagi-site](https://github.com/MajorDream444/amasolagi-site)
- The repository is the canonical source for website code, approved copy, design decisions, and handoffs. Continue work in a feature branch and open a pull request.
- The site is a Next.js App Router application deployed through the existing Vercel project `amasolagi-site`, with production aliases for `amasolagi.com` and `www.amasolagi.com`.
- Main currently contains the corporate site. The AI Studio upload is a separate prototype; do not replace the site wholesale or assume it is production-ready.
- Read the repository's `AGENTS.md` and the relevant installed Next.js documentation before changing application code. Current repo instructions warn of breaking changes in its Next.js version.

## Product intent

The AI Studio project was a fast MVP/mockup to make the advisory experience concrete. It is not the production engineering authority. Use it as a UX and behavior reference, then implement the reviewed experience in the existing website stack with human review and explicit launch gates.

Target experience: let a visitor describe a strategic/business challenge; return a bounded initial diagnosis and practical next step; show clearly scoped advisory offers; then route to an inquiry, booking, or verified payment flow. Keep the front end useful even if AI or external integrations are unavailable.

## Brand direction

Use the owner-approved AMA Solutions badge/emblem logo and the existing site’s charcoal/black and gold visual language. Preserve the approved 144-head/bubble emblem. Do not invent a replacement logo, redraw the mark, or present alternate branding as approved. Store production-ready assets in the website repository's `public/` tree, with appropriate icon, wordmark, and social-preview variants when available.

## Truth and launch guardrails

- Clearly label concepts, prototypes, in-development features, and verified live functions.
- Do not claim all 144 AGInts or all 12 Mobs are staffed, deployed, or available.
- Do not claim Google Workspace, Gemini, audio, calendar, payment, or CRM operations are live based only on configuration flags or mocked responses.
- No page may say an order is paid, confirmed, or entitled to fulfillment until a real Stripe event is verified server-side.
- Keep advisory pricing and offer descriptions tied to an owner-approved catalog. Do not infer offer names, prices, duration, or included work.

## Stripe findings and required decision

Read-only inspection of the live **AMA SOL AGI** Stripe account found one active Payment Link:
- `plink_1UVe0gPZjumz4PGjANWLZpCe`
- URL: https://buy.stripe.com/00w7sNfmh1Xrbfo9Aw63K00
- One-time USD 50.00 item titled **AMA SOLUTIONS**, with a required “Description” custom field.

This is not mapped to an advisory offer. Do not attach it to advisory product cards or describe it as payment for a session until the owner confirms what it represents or provides distinct offer-specific links/prices. Use the AMA SOL AGI account for AMA. Keep other business Stripe accounts separate.

## Prototype review notes

The uploaded archive `ama-advisory-storefront (1).zip` is reference material, not a trusted production checkout:
- Its checkout handler can create an order-like record and workspace without a Stripe charge or verified webhook. That must not be described as paid/confirmed fulfillment.
- Google Drive folder creation does not by itself grant the client access. Verify ACLs and least-privilege sharing before claiming a customer workspace is ready.
- A Google Calendar template link is not a reserved appointment and does not check host availability. Label it as a scheduling link unless a real booking integration verifies availability and reserves the time.
- The voice implementation uses a preset synthetic voice/fallback; do not label it as Major's voice without an authorized likeness configuration and appropriate disclosure.
- Any signing secret must come from secure environment configuration; do not use a predictable production fallback.
- Google credentials, Stripe secrets, and voice secrets must remain server-only and must never be committed.

## Suggested implementation sequence

1. Implement a focused advisory landing page or route inside the existing Next.js site, preserving current corporate pages and navigation.
2. Port the MVP's useful interaction as a clearly labeled beta/advisory intake. Validate input, rate-limit and protect server routes, and provide a deterministic fallback when the AI provider is unavailable.
3. Ground recommendations and product routing in a reviewed, owner-approved catalog. Keep legal, compliance, implementation, and outcome claims bounded.
4. Use a genuine inquiry/contact route for initial launch while the pricing/payment mapping is unresolved. Do not show a checkout CTA with the generic $50 Payment Link.
5. Add Stripe only after offer-specific products/links are verified in the correct AMA account. For any custom checkout, verify Stripe webhook signatures and make fulfillment idempotent; never trust a success redirect.
6. Treat calendar booking, Drive provisioning, Sheets logging, and voice preview as separate integrations with explicit live status and failure behavior. Do not block intake if they are unavailable.
7. Apply the approved logo assets and brand colors consistently to the site, favicon, checkout branding, and social metadata as source assets become available.
8. Open a preview deployment, review mobile/desktop and accessibility, validate forms and integration failures, then promote the reviewed commit to production.

## Owner inputs still needed for commercial launch

- Meaning/purpose of the $50 AMA SOL AGI Payment Link.
- Approved advisory catalog: exact offer names, amounts, currency, billing cadence, and what each includes.
- Any separate Stripe Payment Links for the advisory offers, if those are preferred to a custom Checkout Session.
- Which AI/model, Google Workspace integrations, booking provider, and voice functionality are actually authorized/configured for production.
- Final approved logo asset files, preferably transparent PNG/SVG (icon and horizontal wordmark); reference imagery alone may need conversion/cropping.

## Handoff prompt for Codex or Claude Code

Read `AGENTS.md`, `README.md`, `docs/PROJECT-BRIEF.md`, and this file first. Inspect the existing Next.js app and the current production deployment before coding. The AI Studio build is a prototype reference, not the production architecture. Implement the AMA advisory experience in the existing site without replacing unrelated pages. Keep the approved AMA badge/logo and gold/charcoal brand. Add no unverified claims or inferred prices. Treat Stripe checkout as blocked until the $50 Payment Link is mapped to an approved offer; use inquiry-first routing in the meantime. Do not claim a payment, appointment, workspace, or voice identity is real unless the corresponding provider operation is verified. Work in a feature branch, preserve other open PRs, document changes, and deliver a reviewable preview/PR with any remaining owner decisions listed.

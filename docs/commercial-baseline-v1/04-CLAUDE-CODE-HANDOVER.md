# Claude Code final commercial implementation handover
30 October 2026 • Scope freeze v1.0

## Assignment
Finish the existing AMA website with the frozen catalog and a coherent advisory journey. Do not brainstorm offers, change working prices, replace the logo or create a parallel application. Read 01, 02, 03, catalog.v1.json and this file. Read existing AGENTS.md and the installed Next.js docs before code edits. Preserve all local work and existing Resend/consent/Supabase binding decisions.

## First reconciliation
Report current working directories, origins, branches, HEADs, status and commits on top of remote. Fetch/inspect current main without overwriting local edits. Locate reported local 697a62a and 578e4c7. Do not assume either is on GitHub or reset them. Integrate useful UI from the prototype into the Next.js site on an isolated branch. Preserve the 14/71 reported tests but run actual suites and distinguish mocked versus live evidence. Avoid cherry-picking a mixed commit blindly across newer main; inspect diffs and retain earlier design edits.

## Catalog and website
Use catalog.v1.json as approved scope/working price input. Adapt to the app's type system without silently changing existing stable routes. Record aliases for any local ID mismatch. One shared catalog powers pages, router, checkout and operator fulfillment. Runtime payment mappings are environment-specific and outside public content. Public category navigation: Understand, Explain, Plan, Choose, Team Knowledge, Ongoing Support. Feature only the small launch selection; retain staged detail pages honestly.

Keep production offers distinct from implementation. Explain that the $350 session prepares one decision and a next-step note, while the $1,250 workshop includes deeper preparation, a map and pilot design. Neither includes implementation. The implementation CTA requests a proposal using the completed analysis. Do not invent prices, proposal commitments, availability or guarantees.

## Advisor and context
Implement one on-page guide with typed/free text and optional voice, one follow-up maximum and direct browse access. Prompt around outcome, constraint, evidence and next step. Return a suspected constraint and useful observation, not an exhaustive diagnosis. Use the server catalog for all names/prices/URLs. Do not optimize for selling the most expensive offer. Respect source scope; when unsure, propose measurement or consulting without pretending certainty.

Use layered metadata/context from 02. Preserve privacy notices and minimized anonymous handling. No automatic memory across customers. No raw visitor input in URL/analytics or public logs. Name each worker's task and status accurately; simulated work must say so. State generic narration accurately until Major-approved voice is tested. No browser keys or hard-coded production signing fallback.

## Engineering release blockers
Replace JSON-only order storage with the reviewed durable store before public webhook fulfillment. Preserve canonical Supabase binding pending schema review; do not silently switch to another project. Verify payment signature, provider-event deduplication, bounded retries, ACLs and entitlement per order/cycle. Keep Google config artmobagi account-scoped and server-side. Respect Resend contact-versus-marketing permission separation. Existing contact API may already solve intake; do not regress to a dead form.

Separate implemented/configured/tested/live for Stripe, Calendar/Meet, Drive, Sheets, model and voice. No automatic provider account purchases. Keep policies in draft state until actual terms are approved. Protect previews from public indexing as appropriate, but noindex is not access control. Do not enable checkout merely because the catalog is frozen.

## Design integration
Use the exact supplied source badge reference and preserve proportions. Store draft vectors only under clearly labeled reference/draft asset paths until approved. No ring/dot changes. Do not use light-background lockup on charcoal. Use accessible text while final lockup/font production assets arrive. Keep the dark/gold system, quiet motion, keyboard access and reduced motion. The 144 positions remain an organizational vision rather than a count in the logo or live staffing claim.

## Definition of done
- All 23 existing records reconciled with unique SKUs/IDs, 12 one-time services/six subscriptions/two consultations/three held proposals; no additions.
- Catalog prices, titles, scopes, availability and booking durations match every page/router/checkout definition. Paid-order history is unchanged.
- API schema, payment events, job retries and tenant retrieval tests cover failure and replay. Validate another client's source cannot be retrieved via tags or supplied IDs.
- Run lint, typecheck, build and targeted tests; compare real results to reported counts. Perform desktop/mobile/keyboard/reduced-motion checks. No tests falsely claim actual payment/provider delivery.
- Record an authorized test-mode purchase-to-delivery rehearsal when credentials exist. Do not charge live, email customers or reserve real appointments for testing without task-specific authorization.
- Deliver code and documentation in a PR/preview; list exact remaining owner setup. Do not merge, change DNS, activate marketing or promote production as part of this handover alone.

## Pasteable kickoff
Read the final-commercial-baseline packet and implement it in the existing AMA Next.js site. Preserve local commerce and design work and reconcile against newest main. Use catalog.v1.json without adding offers or changing $350/$1,250 consulting prices. Integrate the best advisory UX from the AI Studio prototype, one agent entrance, evidence-based analysis and tenant-scoped memory/metadata. Preserve draft logo status and current backend binding/marketing consent rules. Complete durable payment-gated fulfillment and tests where existing credentials permit, otherwise show exact truthful configuration blockers. Open a reviewable PR and return a concise readiness report. Do not stop at a planning-only response, rewrite the framework, activate live payments or deploy production.

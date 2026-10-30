# AMA advisory agent, evidence and memory specification
Version 1.0 • Implementation design, not a claim of deployed infrastructure

## One customer conversation, replaceable workers
The on-page AMA guide owns the conversation context and explains recommendations. It can request bounded research, analysis, production and scheduling work behind the scenes. Worker roles: intake/routing; source/evidence; analysis/design; artifact production; review/delivery. These are responsibilities, not five new public products or a claim that workers already run. Major owns paid advisory judgment; a named reviewer accepts delivery.

Anonymous previews allow text and optional explicitly activated voice. Use actual authorized Major voice only after configuration and founder review; otherwise label generic narration honestly or remain text-only. Never require a microphone or playback to access the store. Voice is a channel, not identity proof. The script shown on screen is the exact approved script spoken. Use expiring, session-bound, replay-limited voice authorization and production cost caps. Preserve accessible text, keyboard controls and reduced motion.

## Front-door behavior
Ask intended outcome and where work gets stuck. Use one follow-up only if needed to distinguish next steps. Return problem_summary, suspected_constraint, evidence_status, useful_next_step, action, recommended_product_id, reason, and unresolved_question. This is preliminary orientation, not a full diagnostic. The server enriches authoritative product names, scopes, prices and URLs from catalog.v1.json. The model cannot set prices, invent stock or choose arbitrary links. Source-limit and regulated-judgment cases need explicit boundary checks. Monthly requires recurrence. Recommend by fit even when checkout is disabled; show the true availability.

## Context layers
1. Public AMA doctrine/catalog: versioned, approved, nonconfidential; shared across requests.
2. Tenant workspace: consented client context, sources, conversations, decisions, outputs and revisions; retrievable only by authorized client/project roles.
3. Operational state: orders, paid cycles, jobs, bookings, approvals, delivery events and audit trail; authoritative structured state.
4. Reusable learning: de-identified approved examples and evaluation cases; separate from client storage and never populated automatically.

Retrieval checks tenant_id, workspace_id, purpose and authorization before searching. A tag is not an access-control rule. Do not combine client source collections simply because both are restaurants. Embeddings and generated summaries inherit source permissions. Restrict service credentials server-side. Design export/deletion and retention propagation across source files, summaries, embeddings, provider logs and delivered references. Final retention periods need owner policy approval before public intake.

## Required record relationships
Tenant/client → contact/inquiry → engagement/order → workspace → evidence/decision → job/artifact → review/delivery. Paid subscription cycles and bookings link to the engagement. Generate UUIDs server-side; do not use email as the primary join key. Preserve parent IDs in every job and artifact.

Minimum metadata envelope: record_id, tenant_id, workspace_id, engagement_id, record_type, schema_version, created_at_utc, updated_at_utc, created_by, source_system, provenance_ref, sensitivity, rights_basis, purpose, review_status, reviewed_by, reviewed_at_utc, retention_until, supersedes_id. Nullable fields stay null where not applicable. Anonymous previews have no fabricated tenant/order IDs; keep their ephemeral session state distinct.

Controlled routing tags: need (understand/explain/plan/choose/team-knowledge/ongoing-support); constraint_domain (reach/acquire/convert/expand/deliver/quality/capacity/unknown); mode (brief/deep-dive/critique/debate); industry; locale; lifecycle_stage; product_id. Industry may begin with a short controlled list plus other/unknown. Product IDs must exist in the catalog. Assign industry from user statements or confirmation, not demographic inference. Keep free-form text separate from governed tags. Version the vocabulary and maintain aliases for changes.

Evidence item: evidence_id, source_id, claim, passage/location, author/owner, source_date, retrieved_at, fact_or_assertion, verification_method, verification_status, contradiction_refs, expires_at, reviewer. Decision: question, alternatives, supporting_evidence_ids, counter_evidence_ids, assumptions, confidence_rationale, recommendation, owner, success_measure, baseline_value_or_unknown, next_review. Artifacts record source IDs, generator/model, prompt_version, output_version, reviewer and acceptance.

## Storage authority
Git: catalog, code, approved routing logic, doctrine, schema and public design assets. Stripe: payment/refund and paid subscription evidence. Existing canonical Supabase binding: njpdlomvyalxrkluaige, runtime_status not_switched, schema requires_application_review. Preserve this declared binding and review current schema before migrations; this task does not authorize switching project or copying another business's tables. Prefer the reviewed durable order/job store; local JSON is not durable on ephemeral/multiple-instance hosting. Sheets may provide an operator view, not entitlement or tenant access authority. Drive holds private source/deliverable bytes with verified ACLs. Calendar holds actual appointments. Resend handles operational email and separately consented marketing according to existing code.

Google operating account confirmed previously: artmobagi@gmail.com. Existing folder/schema references are internal configuration, not public page content. Do not provision a second root or database to bypass reconciliation. Calendar link possession is not proof of paid entitlement. A folder existing is not proof the client can access it.

## State and failure rules
Inquiry does not mean accepted scope. Stripe-confirmed paid order does not mean production succeeded. Use explicit order/payment, scope_acceptance, provisioning and fulfillment states. A verified paid event enqueues an idempotent provision/delivery job; retries use unique provider_event_id and operation keys. Failed jobs remain visible with bounded retries and an operator resolution path. Replayed events cannot duplicate folders, appointments, receipts or delivery slots. Refund/cancellation handling must update eligibility without erasing history. Only a verified successful payment authorizes new paid work.

Voice/model/Google failures keep a usable text/inquiry path. Block costly generation when durable caps fail. Secret rotation includes the previously exposed voice secret; never repeat or reuse it in docs, fixtures or code. Never log keys or raw confidential client sources.

## Evaluation and system improvement
Maintain representative fixtures for each offer category, out-of-scope, unknowns, contradictions, oversized packs, recurring versus once, unavailable checkout, prompt injection, model/provider failure and cross-client access. Run critical safety/tenant/payment cases before release and after relevant changes. Evaluate repeated live-model responses separately from mocked logic tests. Record routing accuracy, unsupported claims, human correction rate, acceptance, operator minutes and actual provider cost. Save model/prompt/catalog versions with each run. Human approval promotes a tested playbook; rollback keeps prior versions. No automatic self-modification of prices, policies or production code.

## Backend engineer responsibilities
Audit actual source trees and current project binding. Deliver durable tenant-scoped order/job storage, signature verification and idempotency, least-privilege provider adapters, access-control tests, visible retry/status handling, metadata validation, operational logs and measured provider evals. Demonstrate a paid-test-event-to-reviewed-delivery journey without live charges, and prove another tenant cannot retrieve its sources. Avoid a general-purpose agent platform or autonomous deployment system for this release.

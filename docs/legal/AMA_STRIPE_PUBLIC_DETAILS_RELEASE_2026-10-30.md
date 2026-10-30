# AMA Solutions — Stripe public business details and legal readiness

Prepared 2026-10-30. REVIEW DRAFT; no Stripe configuration was changed.

## Strict account isolation
- AMA SOL AGI Stripe LIVE: `acct_1UVZ6hPZjumz4PGj`. Business profile: AMA SOL AGI; company: AMA Solutions Corporation.
- M.A.I.M. ACADEMY Stripe LIVE: `acct_1TLgn2BaiziDnHMm`. Not used for AMA purchases.
- AMA Stripe business website already says https://amasolagi.com.
- AMA Stripe support email and support URL are currently unset (read-only account verification).
- Existing main-site contact is `info@amasolagi.com`; direct contact `major@amasolagi.com`. Resend verifies `amasolagi.com` as a **sending** domain, not as an inbox receiving proof.

## Exact website field proposals after approved merge and deployment
- Business website: https://amasolagi.com
- Customer support email: info@amasolagi.com (verify inbound receipt/monitoring)
- Customer support URL: https://amasolagi.com/support
- Privacy policy URL: https://amasolagi.com/privacy (existing narrow website/inquiry notice; does NOT yet cover paid commerce fully)
- Terms of service URL: https://amasolagi.com/terms (DRAFT until final legal review)

## What already exists
- `src/app/privacy/page.tsx`: website contact inquiries and email-updates notice only. It is NOT yet a complete paid-product privacy policy and must be expanded through a reviewed proposal.
- `src/app/contact/page.tsx`: established business email addresses and contact form.
- This branch adds draft `/terms` and `/support` Next.js pages without changing any commerce or live provider configuration.

## Legal/implementation GO gates
1. Verify full AMA registered business identity/address, legal jurisdictions and statement-of-work precedence; inspect up-to-date AMA commerce catalog and Stripe offers on the actual deployment branch before writing product-specific cancellation/refund terms.
2. Extend privacy notice with actual purchase processing, analytics, data retention, processors, deletion rights and international transfers. No generic claim can replace a real provider inventory.
3. Approve and publish immutable final terms with clear version and date. Remove draft designation only after review, then verify HTTPS routes return publicly accessible pages.
4. Confirm `info@amasolagi.com` can **receive** and is monitored; Resend sending verification is insufficient.
5. In Stripe Dashboard explicitly choose **AMA SOL AGI**, never M.A.I.M. ACADEMY, and update Public business details with the verified URLs. Then configure `consent_collection.terms_of_service=required` on each checkout only after the approved public terms URL exists.
6. Test AMA payment→delivery/entitlement/fulfillment independently of MAIM Academy. No implied migration/activation of AMA commerce products.

## No changes here
No Stripe settings, Resend emails, product prices, checkout, live data, Vercel projects or production merges performed.

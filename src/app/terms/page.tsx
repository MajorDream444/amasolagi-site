import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service — review draft",
  description: "Proposed AMA Solutions Corporation website, digital products and professional-service terms, pending founder and legal approval.",
  path: "/terms",
});

const items = [
  ["1. Company and scope", "These draft terms concern AMA Solutions Corporation, a Delaware corporation, and its AMA Solutions website at amasolagi.com. They are intended to cover website use, professional advisory work, implementation engagements and digital products when specifically offered under an approved order or statement of work. MAIM Academy and its $249 founding cohort are separate products with separate terms. The full business address and jurisdiction-specific disclosures should be independently confirmed before approval."],
  ["2. Services, proposals and purchases", "The website describes AI consulting, agent-enabled workflow development, implementation, operational systems, and digital education assets. Descriptions and project examples do not by themselves constitute a binding offer or promise of a finished service. An accepted written proposal, statement of work, or product-specific checkout description will control the purchased scope, deliverables, dates, dependencies, acceptance process and any support period."],
  ["3. Pricing, billing and taxes", "Prices, deposits, billing milestones, and taxes are stated in the applicable checkout or signed project agreement; there is no universal price for all AMA services. Payments may be processed by Stripe. AMA does not collect complete card numbers. Subscriptions or recurring charges must be explicitly disclosed and authorized for the specific offer; they are not created by these terms."],
  ["4. Delivery, changes and client responsibilities", "A client's timely access, instructions, decisions, lawful data and third-party permissions may be necessary for delivery. Scope changes, acceptance criteria, revisions, handover and maintenance are governed by the specific order or statement of work. Any agent-generated recommendation or output requires appropriate human assessment before operational use."],
  ["5. Cancellation, refunds and disputes", "Cancellation and refund conditions must be published for each digital product or stated in an accepted statement of work for consulting or implementation. This draft does not establish a universal no-refund policy, a standard time window, or an automatic right to retain every deposit. Mandatory consumer protections and applicable law take precedence. Contact info@amasolagi.com to raise a billing or service concern before a dispute."],
  ["6. Client materials and intellectual property", "Clients retain ownership of their pre-existing information, brands and materials. AMA retains pre-existing templates, methods, agent orchestration patterns and general know-how. Ownership, licenses, permitted reuse, source-code handover and third-party tool restrictions for bespoke deliverables are determined by the specific signed agreement. Do not assume full ownership transfer based solely on payment of a general website offer."],
  ["7. AI usage, confidentiality and data", "AMA may use AI-enabled tools and third-party services in delivering agreed work. Specific data flows, permission limits, confidentiality, model/data retention terms and any automated actions must be documented in the engagement where relevant. Do not submit credentials, sensitive personal data or materials you lack permission to disclose through public forms. AMA's Privacy Notice explains website-level handling."],
  ["8. Acceptable use and responsible decisions", "Do not misuse the website, submit unlawful or infringing material, attempt unauthorized access, or instruct systems to make unauthorized changes. Services are not promises of revenue, savings, legal compliance, regulatory approval or guaranteed automation outcomes. Client decisions and regulated advice remain subject to appropriate professional review."],
  ["9. Support and third-party services", "For billing, product access or service questions, contact info@amasolagi.com or use the support page. Third-party services such as Stripe, Resend, Vercel and future tools have their own terms. Availability, business continuity, warranties, liability provisions, governing law, venue and formal notice addresses still require legal review and any product-specific agreement."],
  ["10. Approval, version and changes", "Draft identifier: ama-terms-2026-10-30-draft.1. No effective date or consumer acceptance is established by posting a draft. Before use at Stripe checkout, confirm legal provisions, product-specific cancellation/refund terms, legal entity/address, effective date and an immutable approved version; retain the terms version associated with every purchase. Material future changes should be versioned rather than silently substituted."]
] as const;

export default function TermsPage() {
  return <section className="section" style={{ paddingTop: 140 }}><div className="container" style={{ maxWidth: 860 }}>
    <p className="label-mono" style={{ color: "var(--gold)" }}>AMA Solutions Corporation · Legal</p>
    <h1 className="display-lg" style={{ margin: "20px 0" }}>Terms of service</h1>
    <p className="body-mono" style={{ color: "var(--text-secondary)" }}>Review draft — not approved for acceptance at checkout. Prepared October 30, 2026. Effective date pending approval.</p>
    {items.map(([heading, copy]) => <section key={heading} style={{ marginTop: 32 }}><h2 className="display-sm" style={{ marginBottom: 12 }}>{heading}</h2><p className="body-mono" style={{ color: "var(--text-secondary)" }}>{copy}</p></section>)}
    <p className="body-mono" style={{ marginTop: 40 }}>Questions: <a href="mailto:info@amasolagi.com" style={{ color: "var(--gold)" }}>info@amasolagi.com</a>. Read our <Link href="/privacy" style={{ color: "var(--gold)" }}>privacy notice</Link> and <Link href="/support" style={{ color: "var(--gold)" }}>support information</Link>.</p>
  </div></section>;
}

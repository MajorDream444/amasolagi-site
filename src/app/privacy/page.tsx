import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Notice — review draft",
  description: "Proposed privacy notice for AMA Solutions Corp website, inquiries, optional mailing list and planned paid services.",
  path: "/privacy",
});

const sections = [
  ["1. Responsible organization", "AMA Solutions Corporation operates the website amasolagi.com and provides professional and digital services. AMA's corporate address and applicable privacy jurisdiction should be confirmed for the final notice. Contact the company at info@amasolagi.com about privacy requests."],
  ["2. Existing website contact inquiries", "When you submit a contact form, AMA receives the information you choose to provide, such as your name, email address, organization and inquiry. Contact form submissions are delivered using Resend so the team can review and respond. An inquiry does not automatically subscribe you to marketing communications."],
  ["3. Optional email updates", "Where you separately opt in, AMA processes an email address, signup source and consent time to send company updates and offers. Marketing communications should provide an unsubscribe mechanism, and suppression preferences should be honored. This is separate from necessary transaction or support communications."],
  ["4. Planned purchases and client delivery", "If AMA's digital-product commerce, booking or consulting payment functions become operational, the company may process billing names, email addresses, product and order identifiers, payment status, tax and refund details, booking/preparation information, and materials voluntarily supplied for a contracted project. Stripe handles payment-card processing; AMA should not receive or store full card numbers. The exact products, integrations and resulting data flows require live verification before approval of this notice."],
  ["5. Purposes and choices", "Information may be used to reply to inquiries; carry out agreed services; issue receipts; deliver orders; schedule appointments; provide customer support; prevent abuse and fraudulent transactions; and comply with financial and legal duties. Optional marketing should not be inferred from a purchase. Any automated personalization or AI processing of client information must be disclosed and appropriately authorized."],
  ["6. Service providers and disclosures", "The current website uses Vercel for hosting and site analytics and Resend for contact-related email delivery. Stripe is connected to a separately identified AMA payment account. AMA may also use authorized database, calendar or AI providers for particular products or engagements, but their actual use and access controls must be disclosed in the specific implementation or agreement. The website and client-delivery stack must be audited before claiming any provider or subprocessors list is complete."],
  ["7. Cookies, analytics and security", "Website technical logs and Vercel analytics may process browser, request, device and usage information to operate, secure and measure the website. Any nonessential tracking should be identified and subject to required notice or consent. Access to client information should be role-limited and protected by reasonable technical and organizational safeguards; no online system can promise absolute security."],
  ["8. Retention and international processing", "AMA should retain information only as needed for an identified business or legal purpose. Order and tax records may need longer lawful retention than contact inquiries or unsubscribed marketing records. Exact retention schedules, deletion handling, backup policies and international-transfer disclosures remain open for legal and operational review."],
  ["9. Your rights", "Depending on applicable law, individuals may request access, correction, deletion, portability or restricted processing; object to certain uses; or withdraw marketing consent. Send requests to info@amasolagi.com. Verification may be required before releasing or changing account-related data; legally required records may need to be retained."],
  ["10. Notice approval and updates", "Draft identifier ama-privacy-2026-10-30-draft.1. This is a review candidate, not a final effective privacy policy. Confirm corporate/controller identity, processes, retention, relevant law, contact receiving, and actual payment and marketing systems before approval. Publish a dated version and preserve historical versions associated with relevant transactions."]
] as const;

export default function PrivacyPage() {
  return <section className="section" style={{ paddingTop: 140 }}><div className="container" style={{ maxWidth: 860 }}>
    <p className="label-mono" style={{ color: "var(--gold)" }}>AMA Solutions Corporation · Privacy</p>
    <h1 className="display-lg" style={{ margin: "20px 0" }}>Privacy notice</h1>
    <p className="body-mono" style={{ color: "var(--text-secondary)" }}><strong>Review draft — not yet approved for paid checkout.</strong> This expands the website's existing inquiry/opt-in notice to describe proposed purchases and client delivery. Prepared October 30, 2026; effective date pending approval.</p>
    {sections.map(([heading, copy]) => <section key={heading} style={{ marginTop: 32 }}><h2 className="display-sm" style={{ marginBottom: 12 }}>{heading}</h2><p className="body-mono" style={{ color: "var(--text-secondary)" }}>{copy}</p></section>)}
    <p className="body-mono" style={{ marginTop: 40 }}>Questions or privacy requests: <a href="mailto:info@amasolagi.com" style={{ color: "var(--gold)" }}>info@amasolagi.com</a>. Also see <Link href="/terms" style={{ color: "var(--gold)" }}>terms</Link>, <Link href="/support" style={{ color: "var(--gold)" }}>support</Link> and <Link href="/contact" style={{ color: "var(--gold)" }}>contact</Link>.</p>
  </div></section>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Customer Support",
  description: "Contact AMA Solutions Corp about consulting services, digital products, website inquiries and billing.",
  path: "/support",
});

export default function SupportPage() {
  return <section className="section" style={{ paddingTop: 140 }}><div className="container" style={{ maxWidth: 820 }}>
    <p className="label-mono" style={{ color: "var(--gold)" }}>AMA Solutions Corporation · Support</p>
    <h1 className="display-lg" style={{ margin: "20px 0" }}>Customer support</h1>
    <p className="body-mono" style={{ color: "var(--text-secondary)" }}>For questions about AMA consulting, advisory services, digital-product orders, billing or access, reach the AMA Solutions team using the contacts already listed on our website.</p>
    <h2 className="display-sm" style={{ marginTop: 40 }}>Email</h2>
    <p className="body-mono"><a href="mailto:info@amasolagi.com" style={{ color: "var(--gold)" }}>info@amasolagi.com</a> — established general inquiries address; receiving and monitoring must be confirmed before Stripe support setup is finalized.</p>
    <h2 className="display-sm" style={{ marginTop: 32 }}>Other ways to reach AMA</h2>
    <p className="body-mono" style={{ color: "var(--text-secondary)" }}>Existing direct business contact: <a href="mailto:major@amasolagi.com" style={{ color: "var(--gold)" }}>major@amasolagi.com</a>. Public website: <a href="https://amasolagi.com" style={{ color: "var(--gold)" }}>amasolagi.com</a>. You can also <Link href="/contact" style={{ color: "var(--gold)" }}>submit a contact request</Link>.</p>
    <h2 className="display-sm" style={{ marginTop: 32 }}>Billing and refunds</h2>
    <p className="body-mono" style={{ color: "var(--text-secondary)" }}>Include the order reference, purchase email and product or engagement name in your request. Refund and cancellation conditions depend on the specific approved purchase terms or signed statement of work and any applicable law. Do not send full card numbers, passwords, API keys or confidential client records by email.</p>
    <h2 className="display-sm" style={{ marginTop: 32 }}>Separate brands</h2>
    <p className="body-mono" style={{ color: "var(--text-secondary)" }}>MAIM Academy enrollment, its founding cohort and MAIM learning products are managed separately. Academy inquiries should use the support details on <a href="https://academy.majoraimindset.com" style={{ color: "var(--gold)" }}>the Academy website</a>.</p>
    <p className="body-mono" style={{ color: "var(--text-dim)", fontSize: 12, marginTop: 40 }}>Before this page is used as a Stripe support URL, verify that the stated inbox receives messages and is monitored.</p>
  </div></section>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy",
  description: "How AMA Solutions handles website inquiries and optional email updates.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section" style={{ paddingTop: 140 }}>
      <div className="container" style={{ maxWidth: 820 }}>
        <p className="label-mono" style={{ color: "var(--gold)" }}>Privacy</p>
        <h1 className="display-lg" style={{ margin: "20px 0" }}>Website privacy notice</h1>
        <p className="body-mono" style={{ color: "var(--text-secondary)" }}>
          AMA Solutions Corp uses information submitted through this website to respond to inquiries and, only when you separately opt in, to send occasional company news and service offers.
        </p>
        <h2 className="display-sm" style={{ marginTop: 40 }}>Contact inquiries</h2>
        <p className="body-mono" style={{ color: "var(--text-secondary)" }}>
          Contact form details are sent to AMA Solutions using Resend, our email delivery provider. We use those details to review and respond to your message. Sending an inquiry does not subscribe you to marketing.
        </p>
        <h2 className="display-sm" style={{ marginTop: 32 }}>Email updates</h2>
        <p className="body-mono" style={{ color: "var(--text-secondary)" }}>
          The optional signup collects your email address and records the signup source and consent time. Updates are sent only to people who have opted in. Every marketing email includes an unsubscribe link; using it updates your email preference.
        </p>
        <h2 className="display-sm" style={{ marginTop: 32 }}>Questions</h2>
        <p className="body-mono" style={{ color: "var(--text-secondary)" }}>
          For questions or privacy requests, contact <a href="mailto:info@amasolagi.com" style={{ color: "var(--gold)" }}>info@amasolagi.com</a>. Read our <Link href="/contact" style={{ color: "var(--gold)" }}>contact page</Link>.
        </p>
        <p className="body-mono" style={{ color: "var(--text-dim)", fontSize: 12, marginTop: 40 }}>
          This notice describes the current website email flows. It should be reviewed as AMA Solutions&apos; privacy practices and legal requirements evolve.
        </p>
      </div>
    </section>
  );
}

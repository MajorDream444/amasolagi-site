import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a conversation with AMA Solutions Corp — whether you're a prospective client, strategic partner, or investor.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 80,
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="grid-overlay" style={{ opacity: 0.1 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="label-mono" style={{ color: "var(--gold)", margin: "0 0 20px" }}>
            Get in Touch
          </p>
          <h1 className="display-lg" style={{ color: "var(--text)", maxWidth: 560, margin: "0 0 24px" }}>
            Start a conversation
          </h1>
          <p className="body-mono" style={{ color: "var(--text-secondary)", maxWidth: 480, margin: 0 }}>
            Whether you have a delivery challenge, partnership interest, or investor inquiry —
            tell us what you&apos;re working on and we&apos;ll route it to the right conversation.
          </p>
        </div>
      </section>

      {/* ── FORM + CONTEXT ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "flex-start" }}>
            {/* Form */}
            <div>
              <Suspense
                fallback={
                  <div
                    style={{
                      height: 400,
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-card)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="label-mono" style={{ color: "var(--text-dim)" }}>Loading…</span>
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Context */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div>
                <div className="gold-line" style={{ marginBottom: 20 }} />
                <h2 style={{ fontFamily: "var(--font-display, Inter, sans-serif)", fontSize: 22, fontWeight: 500, color: "var(--text)", margin: "0 0 16px" }}>
                  Who reaches out
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { type: "Clients", desc: "Organizations with a delivery challenge for one or more Mobs" },
                    { type: "Partners", desc: "Agencies, platforms, or vendors for co-delivery or referral" },
                    { type: "Investors", desc: "Early-stage investors aligned with the agentic services thesis" },
                  ].map(({ type, desc }) => (
                    <div
                      key={type}
                      style={{
                        padding: "16px 20px",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 14,
                      }}
                    >
                      <p className="label-mono" style={{ color: "var(--gold)", margin: "0 0 4px" }}>{type}</p>
                      <p className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: "20px 24px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                }}
              >
                <p className="label-mono" style={{ color: "var(--gold)", margin: "0 0 12px" }}>
                  Email AMA Solutions
                </p>
                <p className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 13, margin: "0 0 8px" }}>
                  General inquiries: {" "}
                  <a href="mailto:info@amasolagi.com" style={{ color: "var(--gold)", textDecoration: "none" }}>
                    info@amasolagi.com
                  </a>
                </p>
                <p className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>
                  Direct contact: {" "}
                  <a href="mailto:major@amasolagi.com" style={{ color: "var(--gold)", textDecoration: "none" }}>
                    major@amasolagi.com
                  </a>
                </p>
              </div>

              <div
                style={{
                  padding: "20px 24px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                }}
              >
                <p className="label-mono" style={{ color: "var(--text-dim)", margin: "0 0 8px" }}>
                  Response
                </p>
                <p className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>
                  We read every message. Response times vary — we&apos;ll reach out when there&apos;s a
                  genuine path forward. No automated replies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

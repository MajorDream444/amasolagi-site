import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Foundry OS",
  description:
    "Foundry OS is in development as the operating layer for AMA Solutions Corp — a modular system for agent-enabled work with long-term licensing potential.",
  path: "/foundry-os",
});

const pillars = [
  {
    icon: "⬡",
    title: "Mob Coordination",
    stage: "In Development",
    body: "A shared orchestration layer that routes work across Mobs, tracks status, and maintains context across engagements.",
  },
  {
    icon: "◈",
    title: "Agent Runtime",
    stage: "In Development",
    body: "The agent execution environment for Art Mob workflows — designed for repeatability, auditability, and human-in-the-loop checkpoints.",
  },
  {
    icon: "△",
    title: "Knowledge Layer",
    stage: "In Development",
    body: "Persistent context, playbooks, and institutional memory across Mobs and client engagements.",
  },
  {
    icon: "○",
    title: "Client Interface",
    stage: "Concept",
    body: "A structured view for clients to track active engagements, review deliverables, and communicate with their Mob.",
  },
];

export default function FoundryOSPage() {
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
            In Development
          </p>
          <h1 className="display-lg" style={{ color: "var(--text)", maxWidth: 700, margin: "0 0 24px" }}>
            Foundry OS
          </h1>
          <p className="body-mono" style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "0 0 24px" }}>
            The operating layer beneath AMA Solutions Corp. Foundry OS is in active development
            as a modular system for coordinating agent-enabled work — built for the way
            the Mobs actually operate.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <span className="badge badge-gold">
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
              Active Development
            </span>
            <span className="badge badge-surface">
              Licensing TBD
            </span>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <div className="gold-line" style={{ marginBottom: 24 }} />
              <h2 className="display-md" style={{ color: "var(--text)", margin: "0 0 20px", maxWidth: 400 }}>
                What Foundry OS is — and what it isn&apos;t
              </h2>
              <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 16px" }}>
                Foundry OS is the internal operating system powering how AMA Solutions Corp
                coordinates work across 12 Mobs. It is not a product available today.
                It is not a standalone SaaS platform. It is in development.
              </p>
              <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 16px" }}>
                The longer-term vision is a modular OS for agent-enabled organizations —
                with potential licensing for other corporations operating similarly.
                That path depends on building it well for AMA first.
              </p>
              <p className="body-mono" style={{ color: "var(--text-dim)", margin: 0 }}>
                We will not overstate its readiness. This page reflects honest development status.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Internal use", status: "Primary use case" },
                { label: "Mob coordination", status: "In development" },
                { label: "Agent runtime", status: "In development" },
                { label: "External licensing", status: "Long-term goal" },
                { label: "Public product", status: "Not yet" },
              ].map(({ label, status }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 20px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: 13, color: "var(--text)" }}>
                    {label}
                  </span>
                  <span className="label-mono" style={{ color: "var(--text-dim)" }}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ─────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <h2 className="display-md" style={{ color: "var(--text)", margin: "0 0 40px", maxWidth: 480 }}>
            Core modules in development
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {pillars.map(({ icon, title, stage, body }) => (
              <div key={title} className="card card-gold" style={{ position: "relative" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "var(--gold-glow)",
                    border: "1px solid rgba(201,162,39,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    marginBottom: 16,
                    color: "var(--gold)",
                  }}
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <h3 style={{ fontFamily: "var(--font-display, Inter, sans-serif)", fontSize: 17, fontWeight: 500, color: "var(--text)", margin: 0 }}>
                    {title}
                  </h3>
                  <span className="badge badge-surface" style={{ fontSize: 10 }}>{stage}</span>
                </div>
                <p className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 14, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display-md" style={{ color: "var(--text)", margin: "0 0 16px" }}>
            Interested in where this is going?
          </h2>
          <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 32px" }}>
            Partners and investors tracking the Foundry OS roadmap can reach us directly.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/partner-invest" className="btn-primary">Partner &amp; Invest</Link>
            <Link href="/contact" className="btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How It Works",
  description:
    "AMA Solutions Corp scopes work, assigns it to the right Art Mob, and delivers with human review at every stage. One corporation, accountable end to end.",
  path: "/how-it-works",
});

const steps = [
  {
    n: "01",
    title: "Discovery & Scoping",
    body: "Every engagement starts with a conversation. We understand the challenge, define scope, and identify which Mob or combination of Mobs is right for the work. No guesswork. No oversell.",
  },
  {
    n: "02",
    title: "Mob Assignment",
    body: "Work is routed to the domain-specific Art Mob — or a cross-Mob team when the project calls for it. Each Mob has 12 designed positions with clear ownership.",
  },
  {
    n: "03",
    title: "Agent-Enabled Execution",
    body: "The Mob executes using agent-enabled workflows. This accelerates throughput, handles repetitive tasks, and allows the team to focus on judgment-dependent work.",
  },
  {
    n: "04",
    title: "Human Review",
    body: "Humans review all substantive outputs before delivery. AMA Solutions Corp maintains accountability for quality. Clients get a single point of contact throughout.",
  },
  {
    n: "05",
    title: "Delivery & Iteration",
    body: "Deliverables go to the client with context, documentation, and next-step recommendations. Ongoing engagements iterate from there.",
  },
];

const principles = [
  { icon: "◈", title: "One Corporation", body: "AMA Solutions Corp is the contracting entity. Not a freelancer network. Not a platform. A corporation with a Delaware C-Corp structure and defined governance." },
  { icon: "⬡", title: "Domain Depth", body: "Each Mob focuses on one discipline. Clients get specialists, not generalists trying to cover everything." },
  { icon: "△", title: "Human Accountability", body: "Agent-enabled doesn't mean autonomous. Human reviewers are part of the process at every meaningful stage." },
  { icon: "○", title: "Transparent Scope", body: "We scope before we start. Clients know what they're getting, who's doing it, and what it costs before work begins." },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 80,
          borderBottom: "1px solid var(--border)",
          background: "var(--bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="grid-overlay" style={{ opacity: 0.1 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="label-mono" style={{ color: "var(--gold)", marginBottom: 20, margin: "0 0 20px" }}>
            The Model
          </p>
          <h1
            className="display-lg"
            style={{ color: "var(--text)", maxWidth: 720, margin: "0 0 24px" }}
          >
            Scope, assign, deliver — with accountability at every step
          </h1>
          <p
            className="body-mono"
            style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "0 0 36px" }}
          >
            AMA Solutions Corp isn&apos;t a marketplace or a matchmaking layer. We are the
            delivery entity — coordinating the right Mob for each engagement, maintaining
            human review throughout, and standing behind every deliverable.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* ── STEPS ───────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <h2 className="display-md" style={{ color: "var(--text)", marginBottom: 48, margin: "0 0 48px", maxWidth: 480 }}>
            How an engagement runs
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map(({ n, title, body }, i) => (
              <div
                key={n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 32,
                  padding: "32px 0",
                  borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display, Inter, sans-serif)",
                    fontSize: 40,
                    fontWeight: 500,
                    color: "var(--gold)",
                    lineHeight: 1,
                    opacity: 0.5,
                  }}
                >
                  {n}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display, Inter, sans-serif)",
                      fontSize: 22,
                      fontWeight: 500,
                      color: "var(--text)",
                      margin: "0 0 12px",
                    }}
                  >
                    {title}
                  </h3>
                  <p className="body-mono" style={{ color: "var(--text-secondary)", margin: 0 }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ──────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <h2 className="display-md" style={{ color: "var(--text)", marginBottom: 40, margin: "0 0 40px" }}>
            Design principles
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {principles.map(({ icon, title, body }) => (
              <div key={title} className="card card-gold">
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
                <h3 style={{ fontFamily: "var(--font-display, Inter, sans-serif)", fontSize: 17, fontWeight: 500, color: "var(--text)", margin: "0 0 10px" }}>
                  {title}
                </h3>
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
            Ready to bring a challenge?
          </h2>
          <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 32px" }}>
            We scope before we start. Tell us what you&apos;re working on.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
            <Link href="/mobs" className="btn-secondary">Explore the Mobs</Link>
          </div>
        </div>
      </section>
    </>
  );
}

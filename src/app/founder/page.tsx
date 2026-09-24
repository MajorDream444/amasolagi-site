import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Founder",
  description:
    "Major Dream Williams is the founder of AMA Solutions Corp — building the agentic delivery corporation at the intersection of AI, business systems, and human accountability.",
  path: "/founder",
});

export default function FounderPage() {
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
            Leadership
          </p>
          <h1 className="display-lg" style={{ color: "var(--text)", maxWidth: 600, margin: "0 0 24px" }}>
            Major Dream Williams
          </h1>
          <p className="body-mono" style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 0 16px" }}>
            Founder &amp; CEO, AMA Solutions Corp
          </p>
          <span className="badge badge-gold" style={{ marginTop: 8 }}>
            Delaware C-Corp Founder
          </span>
        </div>
      </section>

      {/* ── BIO ─────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "flex-start" }}>
            <div>
              <div className="gold-line" style={{ marginBottom: 28 }} />
              <h2 className="display-md" style={{ color: "var(--text)", margin: "0 0 24px", maxWidth: 400 }}>
                Building the corporation for the agentic era
              </h2>
              <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 16px" }}>
                Major Dream Williams founded AMA Solutions Corp as the agentic delivery
                corporation — a structured, accountable entity through which 12 Art Mob teams
                deliver real work to clients in the age of AI.
              </p>
              <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 16px" }}>
                The thesis: AI-enabled work needs a corporation, not just tools. AMA is
                the commercial front door — contracting, accountability, and delivery
                all flowing through one entity, with humans reviewing what matters throughout.
              </p>
              <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 32px" }}>
                Major is also the author of{" "}
                <em style={{ color: "var(--text)" }}>10 Pillars of the Major AI Mindset</em>{" "}
                and founder of Major AI Mindset (MAIM) — an AI education initiative.
                AMA is the corporate vehicle; MAIM is the education brand.
                Both are separate entities with separate purposes.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary">
                  Reach Out
                </Link>
                <a
                  href="https://majordreamwilliams.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Personal Site ↗
                </a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Entity", value: "AMA Solutions Corporation" },
                { label: "Structure", value: "Delaware C-Corp" },
                { label: "Role", value: "Founder & CEO" },
                { label: "Delivery model", value: "12 Art Mob teams" },
                { label: "Education brand", value: "Major AI Mindset (separate)" },
                { label: "Personal site", value: "majordreamwilliams.com" },
              ].map(({ label, value }) => (
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
                    gap: 16,
                  }}
                >
                  <span className="label-mono" style={{ color: "var(--text-dim)", flexShrink: 0 }}>
                    {label}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: 13, color: "var(--text)", textAlign: "right" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND CLARITY ───────────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <h2 className="display-md" style={{ color: "var(--text)", margin: "0 0 32px", maxWidth: 480 }}>
            Three brands, one founder
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              {
                name: "AMA Solutions Corp",
                role: "You are here",
                desc: "The corporation. Client delivery, investment vehicle, Mob coordination.",
                current: true,
              },
              {
                name: "Major AI Mindset",
                role: "Education brand",
                desc: "AI education, courses, curriculum. Separate from AMA's commercial work.",
                current: false,
                href: "https://majoraimindset.com",
              },
              {
                name: "majordreamwilliams.com",
                role: "Personal brand",
                desc: "Major's broader journey, doctrine, speaking, and cross-venture work.",
                current: false,
                href: "https://majordreamwilliams.com",
              },
            ].map(({ name, role, desc, current, href }) => (
              <div
                key={name}
                className="card"
                style={{
                  borderColor: current ? "rgba(201,162,39,0.3)" : "var(--border)",
                  background: current ? "rgba(201,162,39,0.04)" : "var(--bg)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display, Inter, sans-serif)",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "var(--text)",
                    }}
                  >
                    {name}
                  </span>
                  <span
                    className="badge"
                    style={{
                      background: current ? "rgba(201,162,39,0.1)" : "var(--surface)",
                      border: current ? "1px solid rgba(201,162,39,0.3)" : "1px solid var(--border)",
                      color: current ? "var(--gold-light)" : "var(--text-dim)",
                      fontSize: 10,
                    }}
                  >
                    {role}
                  </span>
                </div>
                <p className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>
                  {desc}
                </p>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: 12,
                      fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                      fontSize: 12,
                      color: "var(--text-dim)",
                      textDecoration: "none",
                    }}
                  >
                    Visit ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display-md" style={{ color: "var(--text)", margin: "0 0 16px" }}>
            Ready to work together?
          </h2>
          <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 32px" }}>
            Start a conversation about your challenge, a partnership, or an investment inquiry.
          </p>
          <Link href="/contact" className="btn-primary">Start a Conversation</Link>
        </div>
      </section>
    </>
  );
}

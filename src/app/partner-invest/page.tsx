import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Partner & Invest",
  description:
    "AMA Solutions Corp is a Delaware C-Corp actively seeking strategic partners and investor conversations. Not a public offering.",
  path: "/partner-invest",
});

const partnerTypes = [
  {
    label: "Strategic Partners",
    icon: "⬡",
    desc: "Organizations building in the agentic economy — agencies, technology vendors, platforms, consultancies, and networks that want a delivery partner for AI-enabled work.",
    fit: [
      "Co-delivery on client engagements",
      "Referral relationships",
      "White-label or sub-contracting",
      "Joint go-to-market",
    ],
  },
  {
    label: "Investors",
    icon: "◈",
    desc: "AMA Solutions Corp is a Delaware C-Corp. We are having early conversations with investors aligned with the agentic services thesis. This is not a public offering.",
    fit: [
      "Angel and seed-stage conversations",
      "Aligned thesis on agentic work",
      "Long-term orientation",
      "Comfort with early-stage",
    ],
  },
];

export default function PartnerInvestPage() {
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
            Partnership &amp; Investment
          </p>
          <h1 className="display-lg" style={{ color: "var(--text)", maxWidth: 680, margin: "0 0 24px" }}>
            Build the agentic economy with us
          </h1>
          <p className="body-mono" style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "0 0 24px" }}>
            AMA Solutions Corp is seeking aligned partners and investors.
            Strategic partners co-deliver and grow together.
            Investors back the corporation at the foundation of agent-enabled services.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-pill)",
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: 12,
              color: "var(--text-dim)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M6 4v3M6 8.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Not a public securities offering. All inquiries handled privately.
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP TYPES ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {partnerTypes.map(({ label, icon, desc, fit }) => (
              <div key={label} className="card card-gold" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
                      color: "var(--gold)",
                    }}
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                  <h2 style={{ fontFamily: "var(--font-display, Inter, sans-serif)", fontSize: 20, fontWeight: 500, color: "var(--text)", margin: 0 }}>
                    {label}
                  </h2>
                </div>

                <p className="body-mono" style={{ color: "var(--text-secondary)", margin: 0, fontSize: 14 }}>
                  {desc}
                </p>

                <div>
                  <p className="label-mono" style={{ color: "var(--text-dim)", margin: "0 0 10px" }}>
                    Good fit looks like
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {fit.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                          fontSize: 13,
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "auto" }}>
                  Start a Conversation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY SNAPSHOT ────────────────────────────────────────── */}
      <section
        className="section"
        style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <h2 className="display-md" style={{ color: "var(--text)", margin: "0 0 40px", maxWidth: 480 }}>
            Company snapshot
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { label: "Entity", value: "AMA Solutions Corporation" },
              { label: "Structure", value: "Delaware C-Corp" },
              { label: "Delivery units", value: "12 Art Mob teams" },
              { label: "Designed positions", value: "144 total" },
              { label: "OS layer", value: "Foundry OS (in dev)" },
              { label: "Stage", value: "Early / Active" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  padding: "20px",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                }}
              >
                <p className="label-mono" style={{ color: "var(--text-dim)", margin: "0 0 6px" }}>
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display, Inter, sans-serif)",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "var(--text)",
                    margin: 0,
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div
            style={{
              padding: "28px 32px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              maxWidth: 680,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p className="label-mono" style={{ color: "var(--text-dim)", margin: "0 0 10px" }}>
              Important Note
            </p>
            <p className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>
              Nothing on this page constitutes an offer to sell or solicitation to purchase
              securities. All investment inquiries are handled privately through direct
              conversation. Contact us to be routed to the appropriate discussion.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

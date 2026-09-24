import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "The 12 Art Mobs",
  description:
    "AMA Solutions Corp coordinates 12 specialized Art Mob teams — each a domain-focused delivery unit with 12 designed positions.",
  path: "/mobs",
});

const mobs = [
  { id: "01", name: "Avant-Garde Mob", domain: "Innovation & Foresight", description: "Scans emerging technologies and industry shifts, then develops and evaluates future-facing ideas.", tools: ["Future_Scanner", "Innovation_Hub", "Risk_Visionary"] },
  { id: "02", name: "Artisans Mob", domain: "Data Craft & Insight", description: "Refines complex information and shapes precise, understandable insights from raw data.", tools: ["Data_Refiner", "Insight_Sculptor", "Trend_Artisan"] },
  { id: "03", name: "Visionaries Mob", domain: "Strategic Foresight", description: "Maps long-term direction, explores possible futures, and forecasts the impact of decisions.", tools: ["Horizon_Planner", "Possibility_Generator", "Impact_Forecaster"] },
  { id: "04", name: "Innovators Mob", domain: "Creative Technology", description: "Turns promising concepts into scalable solutions and explores new product and market opportunities.", tools: ["Concept_Builder", "Creative_Engine", "Market_Explorer"] },
  { id: "05", name: "Maestros Mob", domain: "Orchestration & Systems", description: "Connects data and workflows so complex systems operate as a coordinated whole.", tools: ["Harmony_Analyzer", "Flow_Sync", "Data_Orchestrator"] },
  { id: "06", name: "Revolutionaries Mob", domain: "Transformative Change", description: "Challenges inherited processes and develops bold approaches to meaningful change.", tools: ["Change_Catalyst", "Idea_Shaker", "Trend_Rebel"] },
  { id: "07", name: "Luminaries Mob", domain: "Mentorship & Legacy", description: "Supports leadership growth, mentorship, and thoughtful succession planning.", tools: ["Mentor_Matrix", "Legacy_Builder", "Visionary_Guide"] },
  { id: "08", name: "Vanguards Mob", domain: "Security & Responsible AI", description: "Focuses on digital protection, compliance awareness, and oversight of AI-enabled systems.", tools: ["Digital_Fortress", "Compliance_Guard", "AI_Watchtower"] },
  { id: "09", name: "Provocateurs Mob", domain: "Bold Campaigns & Engagement", description: "Creates boundary-pushing campaigns designed to challenge perspectives and connect with audiences.", tools: ["Disrupt_Media", "Impact_Amplifier", "Engage_Booster"] },
  { id: "10", name: "Dreamweavers Mob", domain: "Storytelling & Experience", description: "Develops imaginative brand stories and interactive experiences that build emotional connection.", tools: ["Imagination_Vault", "Interactive_Narrator", "Inspire_Generator"] },
  { id: "11", name: "Guardians Mob", domain: "Trust & Reputation", description: "Helps organizations monitor reputation, prepare for crises, and strengthen transparent practices.", tools: ["Reputation_Watch", "Crisis_Control", "Trust_Sentinel"] },
  { id: "12", name: "Strategists Mob", domain: "Planning & Growth", description: "Builds practical blueprints, improves operational efficiency, and identifies paths for growth.", tools: ["Blueprint_Maker", "Efficiency_Tuner", "Growth_Compass"] },
];

export default function MobsPage() {
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
            Delivery Structure
          </p>
          <h1 className="display-lg" style={{ color: "var(--text)", maxWidth: 680, margin: "0 0 24px" }}>
            12 Art Mob teams. One accountable corporation.
          </h1>
          <p className="body-mono" style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "0 0 16px" }}>
            Each Art Mob is a specialized delivery unit built around a core domain.
            12 designed positions per Mob — 144 total — with human oversight throughout.
            Active deployment roster is tracked and verified separately from this design spec.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: 12,
              color: "var(--text-dim)",
              margin: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 12px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-pill)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--border-light)", display: "inline-block" }} />
            144 planned AGINT positions · Active roster verified separately
          </p>
        </div>
      </section>

      {/* ── MOB CARDS ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {mobs.map(({ id, name, domain, description, tools }) => (
              <div
                key={id}
                className="mob-card"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-card)",
                  padding: "32px",
                  transition: "border-color 200ms ease",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "flex-start" }}>
                  {/* ID */}
                  <span
                    style={{
                      fontFamily: "var(--font-display, Inter, sans-serif)",
                      fontSize: 32,
                      fontWeight: 500,
                      color: "var(--gold)",
                      opacity: 0.4,
                      lineHeight: 1,
                      minWidth: 48,
                    }}
                  >
                    {id}
                  </span>

                  <div>
                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
                      <h2
                        style={{
                          fontFamily: "var(--font-display, Inter, sans-serif)",
                          fontSize: 22,
                          fontWeight: 500,
                          color: "var(--text)",
                          margin: 0,
                        }}
                      >
                        {name}
                      </h2>
                      <span className="badge badge-gold">{domain}</span>
                    </div>

                    <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 20px", fontSize: 14 }}>
                      {description}
                    </p>

                    {/* Illustrative tool concepts */}
                    <div>
                      <p className="label-mono" style={{ color: "var(--text-dim)", margin: "0 0 10px" }}>
                        Illustrative tool concepts
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {tools.map((tool) => (
                          <span
                            key={tool}
                            style={{
                              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                              fontSize: 11,
                              color: "var(--text-dim)",
                              background: "var(--bg)",
                              border: "1px solid var(--border)",
                              borderRadius: 6,
                              padding: "3px 8px",
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="body-mono" style={{ color: "var(--text-dim)", fontSize: 12, marginTop: 20 }}>
            Tool names describe concepts from the AMA planning materials; they do not imply that each tool is currently deployed.
          </p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{ borderTop: "1px solid var(--border)", textAlign: "center" }}
      >
        <div className="container">
          <h2 className="display-md" style={{ color: "var(--text)", margin: "0 0 16px" }}>
            Know which Mob you need?
          </h2>
          <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 32px" }}>
            Bring a challenge. We&apos;ll scope the work and route it to the right team.
          </p>
          <Link href="/contact" className="btn-primary">Start a Conversation</Link>
        </div>
      </section>
    </>
  );
}

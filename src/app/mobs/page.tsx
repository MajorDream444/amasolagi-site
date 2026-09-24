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
  {
    id: "01", name: "Strategy Mob",
    domain: "Strategy & Planning",
    description: "Positioning, market research, competitive intelligence, roadmapping, and strategic advisory.",
    positions: ["Chief Strategist", "Market Analyst", "Competitive Intelligence", "Roadmap Lead", "Research Coord.", "Scenario Planner", "OKR Facilitator", "Stakeholder Liaison", "Strategic Writer", "Workshop Lead", "Data Strategist", "Exec Communicator"],
  },
  {
    id: "02", name: "Brand Mob",
    domain: "Brand & Identity",
    description: "Visual identity systems, brand guidelines, naming, logo development, and brand governance.",
    positions: ["Brand Director", "Identity Designer", "Visual Systems Lead", "Naming Strategist", "Brand Copywriter", "Guidelines Architect", "Color/Type Specialist", "Asset Manager", "Brand Researcher", "Rollout Coordinator", "Brand QA", "Presentation Designer"],
  },
  {
    id: "03", name: "Content Mob",
    domain: "Content & Editorial",
    description: "Long-form writing, content strategy, editorial calendars, ghostwriting, and content systems.",
    positions: ["Editorial Director", "Content Strategist", "Lead Writer", "SEO Specialist", "Ghostwriter", "Editor", "Content Ops Lead", "Social Copywriter", "Newsletter Lead", "Thought Leadership", "Transcript Specialist", "Content Analyst"],
  },
  {
    id: "04", name: "Media Mob",
    domain: "Video & Audio",
    description: "Video production, podcast production, audio engineering, post-production, and multimedia.",
    positions: ["Media Director", "Video Producer", "Cinematographer", "Audio Engineer", "Editor", "Motion Designer", "Script Writer", "Podcast Lead", "Thumbnail Designer", "Distribution Coord.", "Caption Specialist", "Media Analyst"],
  },
  {
    id: "05", name: "Web Mob",
    domain: "Web & Frontend",
    description: "Website development, landing pages, web apps, performance optimization, and CMS.",
    positions: ["Web Lead", "Frontend Engineer", "UI Designer", "CMS Specialist", "Performance Engineer", "QA Engineer", "Accessibility Lead", "SEO-Tech Specialist", "Animation Lead", "Backend Integrator", "Analytics Engineer", "DevOps Coord."],
  },
  {
    id: "06", name: "Data Mob",
    domain: "Data & Analytics",
    description: "Data pipelines, reporting dashboards, analytics strategy, and business intelligence.",
    positions: ["Data Director", "Data Engineer", "BI Developer", "Analyst", "Dashboard Designer", "ETL Specialist", "SQL Expert", "Metrics Architect", "Data QA", "Visualization Lead", "Insights Communicator", "Data Governance"],
  },
  {
    id: "07", name: "Ops Mob",
    domain: "Operations & Automation",
    description: "Workflow automation, process documentation, SOP development, and operational tooling.",
    positions: ["Ops Director", "Process Designer", "Automation Engineer", "SOP Writer", "Tool Evaluator", "Integration Specialist", "Project Coordinator", "Change Manager", "Quality Systems Lead", "Workflow Analyst", "Vendor Liaison", "Ops Trainer"],
  },
  {
    id: "08", name: "Finance Mob",
    domain: "Finance & Treasury",
    description: "Financial modeling, treasury management, budgeting, forecasting, and cap table work.",
    positions: ["CFO-in-Residence", "Financial Modeler", "Treasury Lead", "Budget Analyst", "Cap Table Specialist", "Forecast Engineer", "Accounting Coord.", "Grant Researcher", "Investor Reporting", "Compliance Monitor", "Payroll Coordinator", "Financial Writer"],
  },
  {
    id: "09", name: "Legal Mob",
    domain: "Legal & Compliance",
    description: "Contract preparation, compliance monitoring, entity governance, and legal documentation.",
    positions: ["Legal Director", "Contract Drafter", "Compliance Analyst", "Entity Governance Lead", "IP Coordinator", "Policy Writer", "Regulatory Monitor", "Legal Researcher", "NDA Specialist", "Document Manager", "Risk Analyst", "Legal Comms"],
  },
  {
    id: "10", name: "Commerce Mob",
    domain: "Commerce & Revenue",
    description: "E-commerce operations, marketplace management, sales workflows, and revenue systems.",
    positions: ["Commerce Director", "E-comm Engineer", "Marketplace Lead", "Product Lister", "Pricing Strategist", "Sales Ops Lead", "CRM Manager", "Order Fulfillment", "Returns Manager", "Affiliate Coord.", "Revenue Analyst", "Commerce Writer"],
  },
  {
    id: "11", name: "Culture Mob",
    domain: "Community & Culture",
    description: "Community building, events coordination, internal culture programs, and culture comms.",
    positions: ["Culture Director", "Community Manager", "Events Coordinator", "Culture Writer", "DEI Facilitator", "Internal Comms Lead", "Ambassador Program", "Onboarding Designer", "Recognition Lead", "Pulse Surveyor", "Culture Analyst", "Engagement Specialist"],
  },
  {
    id: "12", name: "Intelligence Mob",
    domain: "Research & Intelligence",
    description: "Deep research, competitive monitoring, knowledge management, and intelligence synthesis.",
    positions: ["Intelligence Director", "Research Lead", "Competitive Monitor", "Trend Analyst", "Knowledge Architect", "Literature Reviewer", "Source Curator", "Report Writer", "Synthesis Specialist", "Briefing Coordinator", "Intel QA", "Distribution Lead"],
  },
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
            144 designed positions · Active roster verified separately
          </p>
        </div>
      </section>

      {/* ── MOB CARDS ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {mobs.map(({ id, name, domain, description, positions }) => (
              <div
                key={id}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-card)",
                  padding: "32px",
                  transition: "border-color 200ms ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-light)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)")}
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

                    {/* Positions */}
                    <div>
                      <p className="label-mono" style={{ color: "var(--text-dim)", margin: "0 0 10px" }}>
                        12 Designed Positions
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {positions.map((pos) => (
                          <span
                            key={pos}
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
                            {pos}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

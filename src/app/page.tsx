import type { Metadata } from "next";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import { pageMetadata } from "@/lib/metadata";
import { SchemaOrg } from "@/components/SchemaOrg";

export const metadata: Metadata = pageMetadata({
  title: "AMA Solutions Corp",
  description:
    "AMA Solutions Corp delivers agentic services through 12 specialized Art Mob teams — the client-facing, accountability-backed corporation for the agentic era.",
  path: "/",
  absoluteTitle: true,
});

const mobs = [
  { id: "01", name: "Avant-Garde Mob", domain: "Innovation & foresight" },
  { id: "02", name: "Artisans Mob", domain: "Data craft & insight" },
  { id: "03", name: "Visionaries Mob", domain: "Strategic foresight" },
  { id: "04", name: "Innovators Mob", domain: "Creative technology" },
  { id: "05", name: "Maestros Mob", domain: "Orchestration & systems" },
  { id: "06", name: "Revolutionaries Mob", domain: "Transformative change" },
  { id: "07", name: "Luminaries Mob", domain: "Mentorship & legacy" },
  { id: "08", name: "Vanguards Mob", domain: "Security & responsible AI" },
  { id: "09", name: "Provocateurs Mob", domain: "Bold campaigns & engagement" },
  { id: "10", name: "Dreamweavers Mob", domain: "Storytelling & experience" },
  { id: "11", name: "Guardians Mob", domain: "Trust & reputation" },
  { id: "12", name: "Strategists Mob", domain: "Planning & growth" },
];

const valueProps = [
  {
    icon: "◈",
    title: "12 Specialized Teams",
    body: "The campus model plans for 144 AGINT positions across 12 domain-focused Mobs. Teams are formed around client work with human review and accountability.",
  },
  {
    icon: "⬡",
    title: "One Corporation",
    body: "Clients contract with AMA Solutions Corp. One entity. One point of accountability. Consistent standards across every engagement.",
  },
  {
    icon: "△",
    title: "Built for the Agentic Era",
    body: "Foundry OS is in development as the operating layer beneath the Mobs — designed for the way AI-enabled work actually runs.",
  },
];

export default function HomePage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://amasolagi.com/#organization",
        "name": "AMA Solutions Corp",
        "url": "https://amasolagi.com",
        "description": "AMA Solutions Corp delivers agentic services through 12 specialized Art Mob teams — the client-facing, accountability-backed corporation for the agentic era.",
        "foundingDate": "2024",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://amasolagi.com/contact"
        },
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://amasolagi.com/#website",
        "url": "https://amasolagi.com",
        "name": "AMA Solutions Corp",
        "publisher": { "@id": "https://amasolagi.com/#organization" }
      }
    ]
  };
  return (
    <>
      <SchemaOrg schema={orgSchema} />
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Hero"
        style={{
          position: "relative",
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        {/* Animated canvas */}
        <HeroCanvas />

        {/* Subtle grid overlay */}
        <div className="grid-overlay" style={{ opacity: 0.12 }} />

        {/* Content */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 32,
          }}
        >
          {/* Status badge */}
          <div className="badge badge-gold anim-fade-in">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
            Delaware C-Corp · Active
          </div>

          {/* Headline */}
          <h1
            className="display-xl anim-fade-up delay-1"
            style={{
              color: "var(--text)",
              maxWidth: 800,
              margin: 0,
            }}
          >
            The agentic{" "}
            <span style={{ color: "var(--gold)" }}>delivery</span>
            {" "}corporation.
          </h1>

          {/* Subheadline */}
          <p
            className="body-mono anim-fade-up delay-2"
            style={{
              color: "var(--text-secondary)",
              maxWidth: 560,
              margin: 0,
            }}
          >
            AMA Solutions Corp coordinates 12 specialized Art Mob teams to deliver
            agentic services — with human review, clear accountability, and a single
            corporate entity clients can contract with.
          </p>

          {/* CTAs */}
          <div
            className="anim-fade-up delay-3"
            style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}
          >
            <Link href="/how-it-works" className="btn-primary">
              See How It Works
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">
              Start a Conversation
            </Link>
          </div>

          {/* Credential strip */}
          <div
            className="anim-fade-up delay-4"
            style={{
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            {[
              { value: "12", label: "Art Mob Teams" },
              { value: "144", label: "Designed Positions" },
              { value: "1", label: "Corporation" },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display, Inter, sans-serif)",
                    fontSize: 28,
                    fontWeight: 500,
                    color: "var(--text)",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span className="label-mono" style={{ color: "var(--text-dim)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div
          aria-hidden="true"
          className="anim-fade-in delay-5"
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            opacity: 0.35,
          }}
        >
          <span className="label-mono" style={{ color: "var(--text-dim)" }}>Scroll</span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="14" height="10" rx="7" stroke="currentColor" strokeWidth="1.2"/>
            <rect x="7.4" y="4" width="1.2" height="3" rx="0.6" fill="currentColor"/>
            <path d="M4 15l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* ── VALUE PROPS ───────────────────────────────────────────────── */}
      <section className="section" aria-label="Value propositions">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {valueProps.map(({ icon, title, body }) => (
              <div key={title} className="card card-gold">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--gold-glow)",
                    border: "1px solid rgba(201,162,39,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    marginBottom: 20,
                    color: "var(--gold)",
                  }}
                  aria-hidden="true"
                >
                  {icon}
                </div>
                <h3
                  className="display-sm"
                  style={{ color: "var(--text)", marginBottom: 12, margin: "0 0 12px" }}
                >
                  {title}
                </h3>
                <p className="body-mono" style={{ color: "var(--text-secondary)", margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOB GRID ──────────────────────────────────────────────────── */}
      <section
        className="section"
        aria-label="The 12 Art Mobs"
        style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <div style={{ marginBottom: 48, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <p className="label-mono" style={{ color: "var(--gold)", marginBottom: 12, margin: "0 0 12px" }}>
                Delivery Structure
              </p>
              <h2 className="display-md" style={{ color: "var(--text)", margin: 0, maxWidth: 480 }}>
                12 specialized teams, purpose-built for every domain
              </h2>
            </div>
            <Link href="/mobs" className="btn-secondary" style={{ flexShrink: 0 }}>
              Explore the Mobs
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {mobs.map(({ id, name, domain }) => (
              <div
                key={id}
                className="home-mob-card"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: "20px 20px 18px",
                  transition: "border-color 200ms ease, transform 200ms ease",
                }}
              >
                <span className="label-mono" style={{ color: "var(--gold-dim)", display: "block", marginBottom: 8 }}>
                  {id}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-display, Inter, sans-serif)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: "var(--text)",
                    margin: "0 0 6px",
                  }}
                >
                  {name}
                </p>
                <p className="label-mono" style={{ color: "var(--text-dim)", letterSpacing: "0.04em", textTransform: "none", fontSize: 11, fontWeight: 400, margin: 0 }}>
                  {domain}
                </p>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: 12,
              color: "var(--text-dim)",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            144 designed positions across 12 Mobs. Active deployment roster verified separately.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS TEASER ───────────────────────────────────────── */}
      <section className="section" aria-label="How it works preview">
        <div className="container">
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-card)",
              padding: "64px 48px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <p className="label-mono" style={{ color: "var(--gold)", marginBottom: 16, margin: "0 0 16px" }}>
                The Model
              </p>
              <h2 className="display-md" style={{ color: "var(--text)", margin: "0 0 20px", maxWidth: 400 }}>
                Scope, assign, deliver — with accountability at every step
              </h2>
              <p className="body-mono" style={{ color: "var(--text-secondary)", marginBottom: 28 }}>
                Clients bring a challenge. We scope the work, route it to the right Mob,
                and deliver with human review throughout. One corporation owns the engagement.
              </p>
              <Link href="/how-it-works" className="btn-primary">
                See the Full Model
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { step: "01", label: "Scope the engagement" },
                { step: "02", label: "Assign to the right Mob" },
                { step: "03", label: "Agent-enabled execution" },
                { step: "04", label: "Human review & delivery" },
              ].map(({ step, label }) => (
                <div
                  key={step}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "14px 20px",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                  }}
                >
                  <span className="label-mono" style={{ color: "var(--gold)", minWidth: 24 }}>{step}</span>
                  <span style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: 13, color: "var(--text)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AUDIENCE CTAs ─────────────────────────────────────────────── */}
      <section
        className="section"
        aria-label="Paths for clients, partners and investors"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="label-mono" style={{ color: "var(--gold)", marginBottom: 12, margin: "0 0 12px" }}>
              Where do you fit?
            </p>
            <h2 className="display-md" style={{ color: "var(--text)", margin: 0 }}>
              Three clear paths in
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                label: "Prospective Clients",
                headline: "Need a team that can execute?",
                body: "Tell us about your challenge. We'll scope the right Mob for the work.",
                href: "/contact",
                cta: "Start a Conversation",
              },
              {
                label: "Strategic Partners",
                headline: "Building alongside the agentic economy?",
                body: "AMA is actively seeking aligned organizations for co-delivery and referral.",
                href: "/partner-invest",
                cta: "Explore Partnership",
              },
              {
                label: "Investors",
                headline: "Want exposure to this model?",
                body: "AMA Solutions Corp is a Delaware C-Corp. Serious investor inquiries welcome.",
                href: "/partner-invest",
                cta: "Learn More",
              },
            ].map(({ label, headline, body, href, cta }) => (
              <div
                key={label}
                className="card card-gold"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span className="badge badge-surface" style={{ marginBottom: 20, alignSelf: "flex-start" }}>
                  {label}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display, Inter, sans-serif)",
                    fontSize: 20,
                    fontWeight: 500,
                    color: "var(--text)",
                    margin: "0 0 12px",
                  }}
                >
                  {headline}
                </h3>
                <p className="body-mono" style={{ color: "var(--text-secondary)", margin: "0 0 24px", flex: 1 }}>
                  {body}
                </p>
                <Link href={href} className="btn-secondary" style={{ alignSelf: "flex-start" }}>
                  {cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

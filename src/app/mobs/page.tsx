import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "The 12 Art Mob Teams",
  description:
    "AMA Solutions' 12 Art Mob teams — 144 designed AGINT positions across specialized capability areas from innovation strategy to reputation management.",
  path: "/mobs",
});

const mobs = [
  {
    number: 1,
    name: "Avant-Garde",
    tagline: "Futures Lab",
    district: "Angular glass tower — geometric forms and purple/green light accents.",
    focus: "Innovation strategy, creativity, trends, and market exploration",
    problems: [
      "We need to understand where our industry is heading",
      "Our teams lack a structured way to surface and develop new ideas",
      "We want to evaluate the risks of a new innovation strategy",
    ],
    tools: [
      { name: "Future Scanner", fn: "Reviews industry trends and emerging technologies" },
      { name: "Innovation Hub", fn: "Workspace concept for capturing and developing new ideas" },
      { name: "Risk Visionary", fn: "Structures potential risks for proposed innovation strategies" },
    ],
  },
  {
    number: 2,
    name: "Artisans",
    tagline: "Insight Workshop",
    district: "Craft-centered workshop with warm wood, exposed metal, and precise work surfaces.",
    focus: "Data analysis, precision, analytics, and visualization",
    problems: [
      "Our data is messy and hard to act on",
      "We can't explain what the data is telling us in a clear way",
      "We need to find patterns in customer or operational data",
    ],
    tools: [
      { name: "Data Refiner", fn: "Cleans and organizes complex datasets for analysis" },
      { name: "Insight Sculptor", fn: "Turns analysis into clear visual formats and explanations" },
      { name: "Trend Artisan", fn: "Looks for patterns in customer or operational data" },
    ],
  },
  {
    number: 3,
    name: "Visionaries",
    tagline: "Horizon Observatory",
    district: "Observatory dome with wide windows and a star-map-like roof.",
    focus: "Strategic foresight, long-range planning, and opportunity mapping",
    problems: [
      "We need to plan 3–5 years out but don't have a structured process",
      "We want to develop scenarios for how our market could evolve",
      "We need to assess the long-term impact of a major decision",
    ],
    tools: [
      { name: "Horizon Planner", fn: "Maps long-term goals and possible routes toward them" },
      { name: "Possibility Generator", fn: "Develops scenarios to support future planning" },
      { name: "Impact Forecaster", fn: "Helps assess possible longer-term effects of decisions" },
    ],
  },
  {
    number: 4,
    name: "Innovators",
    tagline: "Prototype Lab",
    district: "Glass-and-metal lab with flexible spaces for experimentation.",
    focus: "Research, product concepts, prototyping, and testing",
    problems: [
      "We have an idea but don't know how to turn it into something testable",
      "We need structured ideation for alternative product approaches",
      "We want to evaluate a potential market opportunity",
    ],
    tools: [
      { name: "Concept Builder", fn: "Develops early ideas into assessable solution concepts" },
      { name: "Creative Engine", fn: "Supports structured ideation and alternative approaches" },
      { name: "Market Explorer", fn: "Reviews potential market opportunities and entry points" },
    ],
  },
  {
    number: 5,
    name: "Maestros",
    tagline: "Operations Hall",
    district: "Contemporary hall with balanced proportions and visible process pathways.",
    focus: "Workflow design, process quality, and integration planning",
    problems: [
      "Our workflows are fragmented and hard to coordinate",
      "We need to map data flows and integration requirements",
      "We want to design synchronized processes that reduce friction",
    ],
    tools: [
      { name: "Harmony Analyzer", fn: "Maps data flows and integration needs across systems" },
      { name: "Flow Sync", fn: "Designs synchronized workflows to reduce process friction" },
      { name: "Data Orchestrator", fn: "Organizes data inputs and movement across a workflow" },
    ],
  },
  {
    number: 6,
    name: "Revolutionaries",
    tagline: "Change Forge",
    district: "Adaptive industrial warehouse with expressive mural surfaces.",
    focus: "Transformation, change management, and business reinvention",
    problems: [
      "Our organization needs to change but we don't know where to start",
      "We want unconventional options for challenging our default approach",
      "We need to identify emerging trends before our competitors do",
    ],
    tools: [
      { name: "Change Catalyst", fn: "Identifies processes that may benefit from transformation" },
      { name: "Idea Shaker", fn: "Generates unconventional options for challenging the status quo" },
      { name: "Trend Rebel", fn: "Surfaces emerging or non-obvious trends for review" },
    ],
  },
  {
    number: 7,
    name: "Luminaries",
    tagline: "Leadership House",
    district: "Welcoming academic building with warm light, greenery, and spaces for conversation.",
    focus: "Leadership, mentorship, team development, and legacy",
    problems: [
      "We need to build a structured mentorship program",
      "We want to strengthen our leadership pipeline and succession planning",
      "We need to design personal development pathways for our team",
    ],
    tools: [
      { name: "Mentor Matrix", fn: "Organizes mentorship frameworks for leadership development" },
      { name: "Legacy Builder", fn: "Supports succession planning and leadership pipeline design" },
      { name: "Visionary Guide", fn: "Structures personal development pathways and reflection" },
    ],
  },
  {
    number: 8,
    name: "Vanguards",
    tagline: "Trust Gate",
    district: "Secure, modern structure with layered thresholds and calm shield motifs.",
    focus: "Security, privacy, ethical AI, and compliance planning",
    problems: [
      "We need to strengthen our data-protection practices",
      "We want to organize jurisdiction-specific compliance questions",
      "We need to review how our AI systems operate and flag concerns",
    ],
    tools: [
      { name: "Digital Fortress", fn: "Supports data-protection and privacy planning (not a security guarantee)" },
      { name: "Compliance Guard", fn: "Helps organize compliance questions for qualified legal review" },
      { name: "AI Watchtower", fn: "Concept for reviewing AI activity where an implementation supports it" },
    ],
  },
  {
    number: 9,
    name: "Provocateurs",
    tagline: "Campaign Studio",
    district: "Bold gallery and studio with vivid, changing installations.",
    focus: "Campaigns, bold marketing, and audience engagement",
    problems: [
      "Our campaigns feel safe and aren't breaking through",
      "We need to extend the reach and effectiveness of a launch",
      "We want structured approaches to social audience engagement",
    ],
    tools: [
      { name: "Disrupt Media", fn: "Develops provocative content concepts that challenge audience assumptions" },
      { name: "Impact Amplifier", fn: "Plans ways to extend the reach and effectiveness of campaigns" },
      { name: "Engage Booster", fn: "Develops and evaluates audience engagement approaches" },
    ],
  },
  {
    number: 10,
    name: "Dreamweavers",
    tagline: "Story Theater",
    district: "Garden theater with curved forms, gentle lighting, and narrative pathways.",
    focus: "Brand narrative, immersive experiences, and community story",
    problems: [
      "Our brand story doesn't feel cohesive or compelling",
      "We want to design interactive story experiences for our audience",
      "We need visual and narrative directions for our brand identity",
    ],
    tools: [
      { name: "Imagination Vault", fn: "Organizes creative concepts and story material for brand development" },
      { name: "Interactive Narrator", fn: "Designs interactive story concepts for audience participation" },
      { name: "Inspire Generator", fn: "Develops narrative and visual directions for brand identity" },
    ],
  },
  {
    number: 11,
    name: "Guardians",
    tagline: "Reputation Room",
    district: "Grounded, civic-feeling structure with strong lines and welcoming entry.",
    focus: "Reputation, crisis response, and public relations",
    problems: [
      "We need a system for monitoring our reputation and flagging issues",
      "We want to build a crisis-response plan before we need it",
      "We need communications that build trust with our stakeholders",
    ],
    tools: [
      { name: "Reputation Watch", fn: "Supports reputation review and flags issues for investigation" },
      { name: "Crisis Control", fn: "Organizes crisis-response planning and mitigation workflows" },
      { name: "Trust Sentinel", fn: "Supports transparent practices and trust-building communications" },
    ],
  },
  {
    number: 12,
    name: "Strategists",
    tagline: "Strategy Chamber",
    district: "Clear, modern planning room with maps and decision surfaces.",
    focus: "Growth, competitive analysis, and market positioning",
    problems: [
      "We need a structured strategic plan for the next phase of growth",
      "We want to evaluate potential markets and expansion paths",
      "We need to find workflow inefficiencies that are slowing us down",
    ],
    tools: [
      { name: "Blueprint Maker", fn: "Structures strategic plans for business growth" },
      { name: "Efficiency Tuner", fn: "Identifies possible workflow inefficiencies for human review" },
      { name: "Growth Compass", fn: "Helps evaluate potential markets and expansion paths" },
    ],
  },
];

export default function MobsPage() {
  return (
    <>
      <div style={{ paddingTop: "80px" }} />

      {/* Header */}
      <section
        className="py-16 md:py-24"
        style={{ borderBottom: "1px solid var(--border)" }}
        aria-labelledby="mobs-page-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            The delivery network
          </p>
          <h1
            id="mobs-page-heading"
            className="font-bold mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em" }}
          >
            The 12 Art Mob Teams
          </h1>
          <p
            className="max-w-2xl text-lg mb-4"
            style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
          >
            AMA’s delivery network is organized into 12 specialized Art Mob teams — each with a
            distinct capability focus, campus district character, and toolset concept. The design
            envisions 144 AGINT positions across the 12 Mobs.
          </p>

          {/* Status notice */}
          <div
            className="inline-flex items-start gap-3 p-4 rounded-xl max-w-2xl"
            style={{ background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.25)" }}
            role="note"
          >
            <span style={{ color: "var(--gold)", flexShrink: 0 }}>⚠</span>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: "1.7" }}>
              <strong style={{ color: "var(--gold)" }}>Status: In development.</strong> The Mob
              structure, district concepts, and tool catalog are design directions — not verified
              deployed capabilities. Tool names and functions are proposed concepts. No tool
              should be understood as existing software or a live integration.
            </p>
          </div>
        </div>
      </section>

      {/* Campus concept note */}
      <section
        className="py-10"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
        aria-label="Campus concept explanation"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            <strong style={{ color: "var(--text)" }}>The Campus Concept —</strong> Each Mob has
            a district character inspired by its work: an architectural style, visual cues, and
            interaction ideas. This is a digital story and navigation concept — not a physical
            campus or a live interactive experience. District descriptions below are design
            directions for the future site experience.
          </p>
        </div>
      </section>

      {/* Mob listings */}
      <section className="py-16" aria-label="Mob directory">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
          {mobs.map((mob) => (
            <article
              key={mob.number}
              id={`mob-${mob.name.toLowerCase()}`}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
              aria-labelledby={`mob-name-${mob.number}`}
            >
              {/* Mob header */}
              <div
                className="p-6 md:p-8"
                style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex flex-wrap items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0"
                    style={{ background: "rgba(201,162,39,0.12)", color: "var(--gold)" }}
                    aria-hidden="true"
                  >
                    {mob.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2
                        id={`mob-name-${mob.number}`}
                        className="font-bold text-xl"
                      >
                        {mob.name}
                      </h2>
                      <span style={{ color: "var(--text-dim)" }}>·</span>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                        {mob.tagline}
                      </span>
                    </div>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                      {mob.focus}
                    </p>
                  </div>
                  <Link
                    href="/contact?intent=project"
                    className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg"
                    style={{ background: "var(--gold)", color: "#000" }}
                  >
                    Discuss a project →
                  </Link>
                </div>
              </div>

              {/* Mob body — 3 columns */}
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "var(--border)" }}>
                {/* Problems */}
                <div className="p-6" style={{ borderColor: "var(--border)" }}>
                  <h3
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: "var(--text-dim)" }}
                  >
                    Problems this Mob addresses
                  </h3>
                  <ul className="flex flex-col gap-2.5" role="list">
                    {mob.problems.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "1px" }}>›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tool concepts */}
                <div className="p-6" style={{ borderColor: "var(--border)" }}>
                  <h3
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: "var(--text-dim)" }}
                  >
                    Tool concepts{" "}
                    <span style={{ color: "var(--text-dim)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>
                      — proposed, not verified live
                    </span>
                  </h3>
                  <ul className="flex flex-col gap-3" role="list">
                    {mob.tools.map((t) => (
                      <li key={t.name}>
                        <p className="font-semibold text-sm mb-0.5">{t.name}</p>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", lineHeight: "1.5" }}>
                          {t.fn}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* District concept */}
                <div className="p-6" style={{ borderColor: "var(--border)" }}>
                  <h3
                    className="text-xs font-semibold tracking-widest uppercase mb-4"
                    style={{ color: "var(--text-dim)" }}
                  >
                    District concept
                  </h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: "1.7", fontStyle: "italic" }}>
                    {mob.district}
                  </p>
                  <p className="text-xs mt-3" style={{ color: "var(--text-dim)" }}>
                    Design direction for a future campus experience — not a physical location.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
        aria-labelledby="mobs-cta"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            id="mobs-cta"
            className="font-bold text-2xl mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Found the right Mob for your challenge?
          </h2>
          <p className="mb-6" style={{ color: "var(--text-muted)" }}>
            Contact AMA to scope a project. All inquiries go through a human scoping conversation.
          </p>
          <Link
            href="/contact?intent=project"
            className="inline-block font-semibold px-8 py-3 rounded-lg"
            style={{ background: "var(--gold)", color: "#000" }}
          >
            Discuss a project
          </Link>
        </div>
      </section>
    </>
  );
}

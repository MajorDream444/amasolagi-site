import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Foundry OS",
  description:
    "Foundry OS — AMA Solutions Corp's modular operating system in development for agent-enabled work, with licensing as a longer-term goal.",
  path: "/foundry-os",
});

const pillars = [
  {
    label: "Modular by design",
    desc: "The system is designed so that different capability areas — planning, execution, review, coordination — can operate as distinct modules. Teams can adopt what applies to their context.",
  },
  {
    label: "Built from operational experience",
    desc: "Foundry OS is being developed from AMA's real experience running the Mob network. The design is grounded in what actually happens when agent-enabled teams do client work.",
  },
  {
    label: "Human review is core, not optional",
    desc: "The system is designed to surface work for human review at the right points — not to remove humans from the loop. Accountability flows through people.",
  },
  {
    label: "Licensable longer-term",
    desc: "AMA's longer-term goal is to make parts of Foundry OS available to other organizations that want to run agent-enabled work with the same level of structure and accountability.",
  },
];

const stages = [
  {
    phase: "Phase 0",
    name: "Internal operation",
    status: "Current",
    statusColor: "#22C55E",
    desc: "The operational concepts behind Foundry OS are actively shaping how AMA's Mob network runs. Playbooks, coordination standards, and review workflows are being tested in real engagements.",
  },
  {
    phase: "Phase 1",
    name: "Formalization",
    status: "In development",
    statusColor: "#C9A227",
    desc: "Defining the formal structure of the OS: how modules are scoped, how work moves between them, how review triggers are specified, and how context is shared across a Mob or engagement.",
  },
  {
    phase: "Phase 2",
    name: "External deployment",
    status: "Future goal",
    statusColor: "#8899BB",
    desc: "Making the system available for use outside AMA — either in partnership contexts or as a licensed product. This phase requires Phase 1 to be stable and verified.",
  },
];

export default function FoundryOSPage() {
  return (
    <>
      <div style={{ paddingTop: "80px" }} />

      {/* Header */}
      <section
        className="relative py-20 md:py-28"
        style={{ borderBottom: "1px solid var(--border)" }}
        aria-labelledby="foundry-heading"
      >
        {/* Subtle background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(74,124,255,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              In development
            </p>
            <h1
              id="foundry-heading"
              className="font-bold mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em" }}
            >
              Foundry OS
            </h1>
            <p className="text-lg mb-6" style={{ color: "var(--text-muted)", lineHeight: "1.8" }}>
              A modular operating system for agent-enabled work — in development at AMA Solutions Corp.
              The goal: make the way AMA runs structured, repeatable, and eventually available to
              other organizations.
            </p>

            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{
                background: "rgba(201,162,39,0.07)",
                border: "1px solid rgba(201,162,39,0.2)",
              }}
              role="note"
            >
              <span style={{ color: "var(--gold)", flexShrink: 0 }}>ⓘ</span>
              <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: "1.7" }}>
                Foundry OS is <strong style={{ color: "var(--gold)" }}>in development</strong> and
                not yet a generally available product. The description below reflects the design
                direction and development goals, not a released or verified feature set.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section
        className="py-16 md:py-20"
        style={{ borderBottom: "1px solid var(--border)" }}
        aria-labelledby="what-it-is"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                The vision
              </p>
              <h2
                id="what-it-is"
                className="font-bold text-2xl mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                What Foundry OS is designed to do
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-4">
                Agent-enabled work doesn’t run itself. It requires coordination: keeping context
                shared, routing work to the right team, triggering review at the right point, and
                ensuring that accountability stays attached to outcomes.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-4">
                Foundry OS is AMA’s effort to formalize the operating model behind the Mob network
                into a system — one that can be reliably repeated across engagements and, longer-term,
                made available to other organizations doing similar work.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }}>
                It is not a product you can use today. It is the modular structure that will make
                AMA’s work more consistent as the network scales, and a longer-term licensing goal
                for organizations that want to run agent-enabled operations with the same level of
                structure and human accountability.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="p-5 rounded-xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <p className="font-semibold mb-1.5" style={{ fontSize: "0.9375rem" }}>
                    {p.label}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: "1.6" }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development stages */}
      <section
        className="py-16 md:py-20"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        aria-labelledby="dev-stages"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Development roadmap
          </p>
          <h2
            id="dev-stages"
            className="font-bold text-2xl mb-10"
            style={{ letterSpacing: "-0.02em" }}
          >
            Where Foundry OS stands today
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {stages.map((s) => (
              <div
                key={s.phase}
                className="p-6 rounded-2xl"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {s.phase}
                  </span>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      color: s.statusColor,
                      border: `1px solid ${s.statusColor}`,
                      background: `${s.statusColor}18`,
                    }}
                  >
                    {s.status}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-3">{s.name}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: "1.7" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship to Mob network */}
      <section className="py-16 md:py-20" style={{ borderBottom: "1px solid var(--border)" }} aria-labelledby="mob-relationship">
        <div className="max-w-3xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Context
          </p>
          <h2
            id="mob-relationship"
            className="font-bold text-2xl mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Foundry OS and the 12 Mobs
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-4">
            Foundry OS is not a separate product from AMA’s delivery network — it’s the
            formalization of how that network operates. As the 12 Art Mob teams do client work,
            the patterns that work are captured and formalized into the OS.
          </p>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-8">
            HAMAL, the coordination intelligence layer, plays a central role: it is where shared
            context lives, where playbooks are maintained, and where orchestration standards that
            Foundry OS formalizes are applied. Think of Foundry OS as the structured version of
            what HAMAL already coordinates.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/mobs"
              className="font-semibold px-5 py-2.5 rounded-lg text-sm"
              style={{ background: "var(--gold)", color: "#000" }}
            >
              Explore the 12 Mobs
            </Link>
            <Link
              href="/how-it-works"
              className="font-semibold px-5 py-2.5 rounded-lg text-sm"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            >
              See the operating model
            </Link>
          </div>
        </div>
      </section>

      {/* Interest CTA */}
      <section
        className="py-16"
        style={{ background: "var(--surface)" }}
        aria-labelledby="foundry-cta"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            id="foundry-cta"
            className="font-bold text-2xl mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Interested in Foundry OS for your organization?
          </h2>
          <p className="mb-6" style={{ color: "var(--text-muted)" }}>
            If you’re thinking about how to structure agent-enabled operations at scale, we’d
            like to hear from you. Foundry OS licensing is a future goal — not a current offer.
          </p>
          <Link
            href="/contact?intent=foundry"
            className="inline-block font-semibold px-8 py-3 rounded-lg"
            style={{ background: "var(--gold)", color: "#000" }}
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}

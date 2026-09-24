import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMA Solutions Corp — Agentic Venture-Building and Delivery",
  description:
    "AMA Solutions Corp brings people, specialized agent teams, technical capabilities, and operating playbooks together to turn ambitious ideas into scoped, reviewable work.",
};

const mobPreviews = [
  { name: "Avant-Garde", tagline: "Futures Lab", focus: "Innovation strategy, emerging trends" },
  { name: "Artisans", tagline: "Insight Workshop", focus: "Data analysis, precision, analytics" },
  { name: "Visionaries", tagline: "Horizon Observatory", focus: "Strategic foresight, long-range planning" },
  { name: "Innovators", tagline: "Prototype Lab", focus: "Research, product concepts, prototyping" },
  { name: "Maestros", tagline: "Operations Hall", focus: "Workflow design, process quality" },
  { name: "Revolutionaries", tagline: "Change Forge", focus: "Transformation, business reinvention" },
  { name: "Luminaries", tagline: "Leadership House", focus: "Leadership, mentorship, team development" },
  { name: "Vanguards", tagline: "Trust Gate", focus: "Security, privacy, ethical AI, compliance" },
  { name: "Provocateurs", tagline: "Campaign Studio", focus: "Campaigns, bold marketing, audience engagement" },
  { name: "Dreamweavers", tagline: "Story Theater", focus: "Brand narrative, immersive experiences" },
  { name: "Guardians", tagline: "Reputation Room", focus: "Reputation, crisis response, public relations" },
  { name: "Strategists", tagline: "Strategy Chamber", focus: "Growth, competitive analysis, market positioning" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col justify-center"
        style={{ paddingTop: "80px" }}
        aria-labelledby="hero-heading"
      >
        {/* Subtle grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.3,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,162,39,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-8 px-3 py-1.5 rounded-full"
              style={{
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                background: "rgba(201,162,39,0.08)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--gold)" }}
              />
              Delaware C Corporation
            </div>

            <h1
              id="hero-heading"
              className="font-extrabold leading-tight mb-6"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", letterSpacing: "-0.03em" }}
            >
              We build systems that turn{" "}
              <span style={{ color: "var(--gold)" }}>human potential</span> into
              lasting ownership.
            </h1>

            <p
              className="text-lg mb-3 max-w-2xl"
              style={{ color: "var(--text-muted)", lineHeight: "1.75" }}
            >
              AMA Solutions Corp is an agentic venture-building and delivery company. We bring
              people, specialized agent teams, technical capabilities, and operating playbooks
              together to turn ambitious ideas into scoped, reviewable work.
            </p>
            <p
              className="text-sm mb-10"
              style={{
                color: "var(--text-dim)",
                fontStyle: "italic",
              }}
            >
              Working headline — pending owner approval for final launch copy.
            </p>

            {/* Three paths */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?intent=build"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all text-sm"
                style={{ background: "var(--gold)", color: "#000" }}
              >
                Build with us
                <ArrowRight />
              </Link>
              <Link
                href="/partner-invest#invest"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all text-sm"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  background: "var(--surface)",
                }}
              >
                Explore investment
              </Link>
              <Link
                href="/contact?intent=project"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all text-sm"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  background: "var(--surface)",
                }}
              >
                Discuss a project
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          aria-hidden="true"
        >
          <span style={{ color: "var(--text-dim)", fontSize: "0.7rem", letterSpacing: "0.1em" }}>
            SCROLL
          </span>
          <div
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, var(--text-dim), transparent)" }}
          />
        </div>
      </section>

      {/* Operating model overview */}
      <section
        className="py-24"
        style={{ borderTop: "1px solid var(--border)" }}
        aria-labelledby="model-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                How AMA works
              </p>
              <h2
                id="model-heading"
                className="font-bold mb-6"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
              >
                One company. Twelve specialized teams. A shared coordination layer.
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-4">
                AMA Solutions Corp is the public front door — the corporation that holds
                commercial relationships, contracts, and investment conversations.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-6">
                HAMAL is the intelligence layer that coordinates across AMA, Hanzo, and Lux —
                maintaining playbooks, shared context, and orchestration standards that equip our
                delivery teams. The 12 Art Mob teams execute client-facing work, each with a
                defined capability focus and 12 designed AGINT positions.
              </p>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "var(--gold)" }}
              >
                See the full model <ArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  label: "AMA Solutions Corp",
                  desc: "Delaware C corporation. Commercial relationships, contracts, and investment vehicle.",
                  tag: "Active",
                  tagColor: "#22C55E",
                },
                {
                  label: "HAMAL",
                  desc: "Coordinating intelligence layer. Maintains playbooks and orchestration across the network.",
                  tag: "Active",
                  tagColor: "#22C55E",
                },
                {
                  label: "12 Art Mob Teams",
                  desc: "Client-facing delivery units. 144 designed AGINT positions across 12 specialized Mobs.",
                  tag: "In development",
                  tagColor: "var(--gold)",
                },
                {
                  label: "Foundry OS",
                  desc: "Modular operating system for agent-enabled work. Licensing is a longer-term goal.",
                  tag: "In development",
                  tagColor: "var(--gold)",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold mb-1" style={{ fontSize: "0.9375rem" }}>
                        {item.label}
                      </p>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: "1.6" }}>
                        {item.desc}
                      </p>
                    </div>
                    <span
                      className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        color: item.tagColor,
                        border: `1px solid ${item.tagColor}`,
                        background: `${item.tagColor}18`,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Mobs preview */}
      <section
        className="py-24"
        style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
        aria-labelledby="mobs-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                The delivery network
              </p>
              <h2
                id="mobs-heading"
                className="font-bold"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
              >
                12 Art Mob Teams
              </h2>
              <p className="mt-2" style={{ color: "var(--text-muted)", fontSize: "0.9375rem" }}>
                144 designed AGINT positions. Each Mob has a distinct capability focus, district
                character, and toolset concept.
              </p>
            </div>
            <Link
              href="/mobs"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            >
              Explore all Mobs <ArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {mobPreviews.map((mob, i) => (
              <Link
                href={`/mobs#mob-${mob.name.toLowerCase()}`}
                key={mob.name}
                className="group p-4 rounded-xl transition-all"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-5 h-5 rounded flex items-center justify-center text-xs font-bold"
                    style={{ background: "rgba(201,162,39,0.12)", color: "var(--gold)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "var(--text-dim)" }}>
                    {mob.tagline}
                  </span>
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--text)" }}>
                  {mob.name}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", lineHeight: "1.5" }}>
                  {mob.focus}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Audience paths */}
      <section className="py-24" style={{ borderTop: "1px solid var(--border)" }} aria-labelledby="paths-heading">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4 text-center"
            style={{ color: "var(--gold)" }}
          >
            Who engages AMA
          </p>
          <h2
            id="paths-heading"
            className="font-bold text-center mb-12"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.02em" }}
          >
            Find your path
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Strategic Partners",
                desc: "Understand AMA's architecture, capability network, and coordination model. Open a conversation about working together.",
                cta: "Partner with AMA",
                href: "/partner-invest#partner",
              },
              {
                title: "Investors",
                desc: "AMA Solutions Corp is the Delaware C corporation and intended investment vehicle. Request a conversation to learn more.",
                cta: "Explore investment",
                href: "/partner-invest#invest",
                note: "No securities terms or offering implied.",
              },
              {
                title: "Clients",
                desc: "Identify the Mob best suited to your challenge and contact AMA to scope a paid engagement. Human scoping and review are part of every project.",
                cta: "Discuss a project",
                href: "/contact?intent=project",
              },
            ].map((path) => (
              <div
                key={path.title}
                className="flex flex-col p-6 rounded-2xl"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <h3 className="font-bold text-lg mb-3">{path.title}</h3>
                <p
                  style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "0.9375rem" }}
                  className="mb-4 flex-1"
                >
                  {path.desc}
                </p>
                {path.note && (
                  <p className="text-xs mb-4" style={{ color: "var(--text-dim)", fontStyle: "italic" }}>
                    {path.note}
                  </p>
                )}
                <Link
                  href={path.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold mt-auto"
                  style={{ color: "var(--gold)" }}
                >
                  {path.cta} <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section
        className="py-20"
        style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
        aria-labelledby="cta-heading"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            id="cta-heading"
            className="font-bold mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.02em" }}
          >
            Ready to start a conversation?
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
            Tell us what you're building. We'll help you find the right path.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="font-semibold px-8 py-3 rounded-lg transition-all"
              style={{ background: "var(--gold)", color: "#000" }}
            >
              Get in touch
            </Link>
            <Link
              href="/mobs"
              className="font-semibold px-8 py-3 rounded-lg transition-all"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            >
              Explore the Mobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7h12M8 3l5 4-5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

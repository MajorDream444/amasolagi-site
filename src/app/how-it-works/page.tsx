import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "How It Works",
  description:
    "AMA Solutions Corp's operating model: how AMA, HAMAL, the 12 Art Mob teams, Hanzo, Lux, and Foundry OS work together.",
  path: "/how-it-works",
});

const layers = [
  {
    number: "01",
    name: "AMA Solutions Corp",
    role: "The corporation",
    desc: "AMA Solutions Corp is the Delaware C corporation, public commercial front door, and intended investment vehicle. It owns client relationships, enters contracts when appropriate, and creates the legal and financial structure for the company's work. Strategic partners, investors, and clients engage AMA directly.",
    status: "Active",
    statusColor: "#22C55E",
    detail: [
      "Delaware C corporation — incorporated and legally structured",
      "Client relationship owner and contracting entity",
      "Primary point of contact for strategic and investment conversations",
      "Umbrella for the Art Mob delivery network",
    ],
  },
  {
    number: "02",
    name: "HAMAL",
    role: "The coordination layer",
    desc: "HAMAL is the top coordinating Mob and intelligence layer connecting Hanzo, AMA, and Lux. It develops and maintains shared context, playbooks, and orchestration standards that equip the 12 Art Mob delivery teams. HAMAL is the nervous system that helps the Mobs share learning and operate with consistent quality.",
    status: "Active",
    statusColor: "#22C55E",
    detail: [
      "Maintains playbooks, standards, and shared operational context",
      "Coordinates between Hanzo capabilities, AMA structure, and Lux infrastructure",
      "Supports learning feedback from delivery back into the system",
      "Clients engage the Mob teams; HAMAL equips them",
    ],
  },
  {
    number: "03",
    name: "The 12 Art Mob Teams",
    role: "Client-facing delivery",
    desc: "The 12 Art Mob teams are the client-facing delivery units. The design envisions 144 Art Mob AGINT positions distributed across 12 Mobs — 12 designed positions per Mob. A client can engage a full Mob or a relevant portion, depending on the scope. Each Mob has a distinct capability focus, toolset concept, and campus district character.",
    status: "In development",
    statusColor: "#C9A227",
    detail: [
      "12 specialized teams, each with a distinct capability focus",
      "144 designed AGINT positions — 12 per Mob (deployment roster not yet verified)",
      "Clients scope a Mob or portion of one for defined engagements",
      "Human review and accountability are part of every delivery",
    ],
  },
  {
    number: "04",
    name: "Hanzo",
    role: "AI and technical capabilities",
    desc: "Hanzo contributes AI and technical capabilities to the HAMAL architecture. Where Hanzo is specifically involved in a client engagement, that will be noted for that project. Do not assume Hanzo capabilities are part of every AMA engagement unless confirmed for a specific scope.",
    status: "Capability — verify per project",
    statusColor: "#8899BB",
    detail: [
      "AI infrastructure and autonomous agent capabilities",
      "Contributes to HAMAL coordination architecture where applicable",
      "Involvement is project-specific, not universal",
    ],
  },
  {
    number: "05",
    name: "Lux",
    role: "Sovereignty and provenance infrastructure",
    desc: "Lux contributes sovereignty, provenance, or related infrastructure where applicable to the HAMAL architecture. Lux's role in any specific engagement should be confirmed before being presented as a feature of that project.",
    status: "Capability — verify per project",
    statusColor: "#8899BB",
    detail: [
      "Sovereignty and provenance infrastructure",
      "Contributes to HAMAL architecture where relevant",
      "Involvement is project-specific, not universal",
    ],
  },
  {
    number: "06",
    name: "Foundry OS",
    role: "Operating system in development",
    desc: "Foundry OS is an operating system in development intended to make agent-enabled work modular, operational, and eventually licensable. It is not yet a generally available product. The longer-term vision includes making parts of the system licensable to other organizations.",
    status: "In development",
    statusColor: "#C9A227",
    detail: [
      "Modular operating system for coordinating agent-enabled work",
      "Currently in development — not yet a generally available product",
      "Longer-term goal includes licensing the system to other organizations",
      "Built from AMA's operational experience across the Mob network",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <div style={{ paddingTop: "80px" }} />

      {/* Page header */}
      <section
        className="py-16 md:py-24"
        style={{ borderBottom: "1px solid var(--border)" }}
        aria-labelledby="page-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            The operating model
          </p>
          <h1
            id="page-heading"
            className="font-bold mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em" }}
          >
            How It Works
          </h1>
          <p
            className="max-w-2xl text-lg"
            style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
          >
            AMA Solutions operates through a layered architecture. The corporation sits at the
            front. HAMAL coordinates the network. Twelve specialized Art Mob teams do client
            work. Foundry OS is being built to make this model modular and eventually licensable.
          </p>
        </div>
      </section>

      {/* System diagram — text-based for accessibility */}
      <section
        className="py-16"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        aria-label="System overview diagram"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-stretch gap-3 overflow-x-auto pb-2">
            {[
              { label: "AMA Corp", sub: "Front door + contracts", col: "var(--gold)" },
              { label: "↔", sub: "", col: "var(--text-dim)", plain: true },
              { label: "HAMAL", sub: "Coordination + playbooks", col: "#60A5FA" },
              { label: "↔", sub: "", col: "var(--text-dim)", plain: true },
              { label: "12 Art Mobs", sub: "Client delivery", col: "#A78BFA" },
              { label: "+", sub: "", col: "var(--text-dim)", plain: true },
              { label: "Hanzo / Lux", sub: "Technical capabilities", col: "var(--text-muted)" },
              { label: "→", sub: "", col: "var(--text-dim)", plain: true },
              { label: "Foundry OS", sub: "In development", col: "var(--gold)" },
            ].map((item, i) =>
              item.plain ? (
                <div
                  key={i}
                  className="hidden md:flex items-center justify-center px-1"
                  style={{ color: item.col, fontSize: "1.25rem" }}
                  aria-hidden="true"
                >
                  {item.label}
                </div>
              ) : (
                <div
                  key={i}
                  className="flex-1 min-w-[140px] p-4 rounded-xl text-center"
                  style={{ background: "var(--bg)", border: `1px solid ${item.col}30` }}
                >
                  <p className="font-bold text-sm" style={{ color: item.col }}>
                    {item.label}
                  </p>
                  {item.sub && (
                    <p className="text-xs mt-1" style={{ color: "var(--text-dim)" }}>
                      {item.sub}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: "var(--text-dim)" }}>
            Conceptual overview — not a live system diagram
          </p>
        </div>
      </section>

      {/* Detailed layer explanations */}
      <section className="py-16" aria-label="Layer details">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-8">
            {layers.map((layer) => (
              <article
                key={layer.number}
                className="grid md:grid-cols-12 gap-6 p-6 md:p-8 rounded-2xl"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                aria-labelledby={`layer-${layer.number}`}
              >
                <div className="md:col-span-3">
                  <span
                    className="text-4xl font-black"
                    style={{ color: "var(--border)" }}
                    aria-hidden="true"
                  >
                    {layer.number}
                  </span>
                  <h2
                    id={`layer-${layer.number}`}
                    className="font-bold text-xl mt-2 mb-1"
                  >
                    {layer.name}
                  </h2>
                  <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                    {layer.role}
                  </p>
                  <span
                    className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      color: layer.statusColor,
                      border: `1px solid ${layer.statusColor}`,
                      background: `${layer.statusColor}18`,
                    }}
                  >
                    {layer.status}
                  </span>
                </div>

                <div className="md:col-span-5">
                  <p style={{ color: "var(--text-muted)", lineHeight: "1.8", fontSize: "0.9375rem" }}>
                    {layer.desc}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <ul className="flex flex-col gap-2" role="list">
                    {layer.detail.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <span style={{ color: "var(--gold)", marginTop: "0.25rem", flexShrink: 0 }}>
                          ›
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Human accountability note */}
      <section
        className="py-16"
        style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
        aria-labelledby="human-note"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            id="human-note"
            className="font-bold text-2xl mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Human scoping, review, and accountability
          </h2>
          <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-6">
            AMA Solutions does not operate as a fully autonomous AI system. Human review,
            client communication, scoping, and accountability are part of every engagement.
            Agent capabilities support and accelerate the work; humans remain responsible for
            decisions, quality, and outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/mobs"
              className="font-semibold px-6 py-3 rounded-lg text-sm"
              style={{ background: "var(--gold)", color: "#000" }}
            >
              Explore the Mobs
            </Link>
            <Link
              href="/contact"
              className="font-semibold px-6 py-3 rounded-lg text-sm"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

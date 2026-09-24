import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder",
  description:
    "Major Dream Williams — founder of AMA Solutions Corp. Background, driving conviction, and the company's origin.",
};

export default function FounderPage() {
  return (
    <>
      <div style={{ paddingTop: "80px" }} />

      {/* Header */}
      <section
        className="py-16 md:py-24"
        style={{ borderBottom: "1px solid var(--border)" }}
        aria-labelledby="founder-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Company founder
          </p>
          <h1
            id="founder-heading"
            className="font-bold mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em" }}
          >
            Major Dream Williams
          </h1>
          <p
            className="max-w-2xl text-lg"
            style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
          >
            Founder and chief architect of AMA Solutions Corp. This page is a company-relevant
            introduction — for Major's broader work, writing, and personal journey, visit{" "}
            <span style={{ color: "var(--text-dim)" }}>
              majordreamwilliams.com{" "}
              <span style={{ fontSize: "0.75rem" }}>(verify before visiting)</span>
            </span>
            .
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-20" style={{ borderBottom: "1px solid var(--border)" }} aria-labelledby="bio-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Name card */}
            <div className="md:col-span-3">
              <div
                className="p-6 rounded-2xl"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center font-black text-2xl"
                  style={{ background: "rgba(201,162,39,0.12)", color: "var(--gold)" }}
                  aria-hidden="true"
                >
                  MD
                </div>
                <p className="font-bold text-lg mb-0.5">Major Dream Williams</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                  Founder, AMA Solutions Corp
                </p>
              </div>
            </div>

            {/* Bio text */}
            <div className="md:col-span-9">
              <h2
                id="bio-heading"
                className="font-bold text-2xl mb-6"
                style={{ letterSpacing: "-0.02em" }}
              >
                Why AMA Solutions Corp exists
              </h2>

              <div
                className="flex flex-col gap-4"
                style={{ color: "var(--text-muted)", lineHeight: "1.85", fontSize: "1rem" }}
              >
                <p>
                  Major Dream Williams built AMA Solutions Corp around a specific conviction: that
                  agent-enabled work isn't just about efficiency — it's about ownership. Too often,
                  the tools and systems that could let ambitious people build lasting value are
                  locked behind institutions that extract more than they return.
                </p>
                <p>
                  AMA is built to be the opposite. A corporation structured for accountability,
                  capable of delivering meaningful work through a network of specialized teams, and
                  designed from the start to create ownership — for clients, partners, and
                  collaborators — not just revenue for the entity at the top.
                </p>
                <p>
                  The 12 Art Mob delivery model, the HAMAL coordination layer, and the long-term
                  Foundry OS effort all point at the same goal: a company that can run at scale
                  with human accountability baked in, not bolted on.
                </p>
                <p>
                  AMA Solutions Corp is a Delaware C corporation — the legal and financial
                  structure is real. The delivery network is in development. The conviction
                  behind it has been tested through Major's prior work across athletics,
                  community building, and technology, and it informs every design decision in
                  the company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related ventures */}
      <section
        className="py-16"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        aria-labelledby="broader-work"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Broader work
          </p>
          <h2
            id="broader-work"
            className="font-bold text-xl mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Major's other work is intentionally separate from AMA
          </h2>

          <p className="max-w-2xl mb-8" style={{ color: "var(--text-muted)", lineHeight: "1.8" }}>
            Major's broader journey, doctrine, books, and cross-venture thinking live at
            majordreamwilliams.com. AI education and curriculum belong to Major AI Mindset.
            This site is the AMA corporate presence — client relationships, investment conversations,
            partnerships, and delivery. The brands are kept distinct deliberately.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            {[
              {
                label: "majordreamwilliams.com",
                desc: "Major's personal site — broader journey, writing, and cross-venture work.",
                note: "Verify domain before visiting",
              },
              {
                label: "Major AI Mindset",
                desc: "AI education, learning resources, and curriculum.",
                note: "majoraimindset.com — verify before visiting",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl"
                style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
              >
                <p className="font-semibold text-sm mb-1">{item.label}</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: "1.5" }}>
                  {item.desc}
                </p>
                <p className="text-xs mt-2" style={{ color: "var(--text-dim)", fontStyle: "italic" }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" aria-labelledby="founder-cta">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            id="founder-cta"
            className="font-bold text-2xl mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Connect with AMA Solutions Corp
          </h2>
          <p className="mb-6" style={{ color: "var(--text-muted)" }}>
            For strategic, investment, or client conversations, reach AMA through the contact page.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/partner-invest"
              className="font-semibold px-6 py-3 rounded-lg text-sm"
              style={{ background: "var(--gold)", color: "#000" }}
            >
              Partner or invest
            </Link>
            <Link
              href="/contact"
              className="font-semibold px-6 py-3 rounded-lg text-sm"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

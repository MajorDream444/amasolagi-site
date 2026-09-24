import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Partner & Invest",
  description:
    "Strategic partnership and investor information for AMA Solutions Corp — a Delaware C corporation built for agentic venture-building and delivery.",
  path: "/partner-invest",
});

export default function PartnerInvestPage() {
  return (
    <>
      <div style={{ paddingTop: "80px" }} />

      {/* Page header */}
      <section
        className="py-16 md:py-24"
        style={{ borderBottom: "1px solid var(--border)" }}
        aria-labelledby="pi-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Strategic conversations
          </p>
          <h1
            id="pi-heading"
            className="font-bold mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em" }}
          >
            Partner &amp; Invest
          </h1>
          <p
            className="max-w-2xl text-lg"
            style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
          >
            AMA Solutions Corp is open to two kinds of strategic conversation: partners who want to
            build with or alongside the network, and investors who want to understand the company as
            a vehicle. Both paths start with a human conversation.
          </p>
        </div>
      </section>

      {/* Two-path navigation */}
      <section
        className="py-12"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
        aria-label="Section navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3">
          <a
            href="#partner"
            className="font-semibold px-5 py-2.5 rounded-lg text-sm"
            style={{ background: "var(--gold)", color: "#000" }}
          >
            Strategic Partners ↓
          </a>
          <a
            href="#invest"
            className="font-semibold px-5 py-2.5 rounded-lg text-sm"
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
          >
            Investors ↓
          </a>
        </div>
      </section>

      {/* PARTNER section */}
      <section
        id="partner"
        className="py-20 scroll-mt-20"
        style={{ borderBottom: "1px solid var(--border)" }}
        aria-labelledby="partner-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                Strategic partners
              </p>
              <h2
                id="partner-heading"
                className="font-bold text-3xl mb-5"
                style={{ letterSpacing: "-0.02em" }}
              >
                Build with the network
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-4">
                AMA Solutions Corp is interested in strategic partnerships that extend the
                network’s reach, deepen capability in specific verticals, or create long-term
                collaboration around the kind of work our Mobs are built to do.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-4">
                We’re looking for partners who understand that agent-enabled work still requires
                human accountability — and who want to build something that lasts, not just scale
                fast.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-8">
                If you’re working in an area where one or more of the 12 Mobs is relevant — or if
                you see a structural fit between what you’re building and AMA’s network — reach out.
                We’ll have a conversation.
              </p>
              <Link
                href="/contact?intent=partner"
                className="inline-block font-semibold px-6 py-3 rounded-lg text-sm"
                style={{ background: "var(--gold)", color: "#000" }}
              >
                Open a partner conversation
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--text-dim)" }}
              >
                What we’re looking for in a partner
              </p>
              {[
                {
                  label: "Complementary reach or depth",
                  desc: "You operate in a market, vertical, or capability area where AMA's Mob network creates real value — and you're willing to bring that context to the table.",
                },
                {
                  label: "Long-horizon thinking",
                  desc: "AMA is building for durability, not just the next cycle. Partners should share a view that the best collaborations are built carefully.",
                },
                {
                  label: "Comfort with agent-enabled work",
                  desc: "You understand that agent capabilities support delivery — they don't replace human review, scoping, and accountability.",
                },
                {
                  label: "Specific scope",
                  desc: "The strongest conversations start with a defined area: a shared client type, a delivery model question, a capability that fits. We can always expand from there.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <p className="font-semibold text-sm mb-1.5">{item.label}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INVEST section */}
      <section
        id="invest"
        className="py-20 scroll-mt-20"
        style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}
        aria-labelledby="invest-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Disclaimer — prominent */}
          <div
            className="mb-10 p-5 rounded-xl max-w-3xl"
            style={{
              background: "rgba(201,162,39,0.07)",
              border: "1px solid rgba(201,162,39,0.25)",
            }}
            role="note"
            aria-label="Investment disclaimer"
          >
            <p style={{ color: "var(--gold)", fontWeight: 600, fontSize: "0.8125rem", marginBottom: "0.5rem" }}>
              Important — read before continuing
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: "1.7" }}>
              Nothing on this page constitutes an offer to sell securities, a solicitation of an
              offer to buy securities, or investment advice. No securities terms are published here.
              All inquiries go through a human conversation. AMA Solutions Corp is not currently
              making a public investment offering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                Investors
              </p>
              <h2
                id="invest-heading"
                className="font-bold text-3xl mb-5"
                style={{ letterSpacing: "-0.02em" }}
              >
                AMA as an investment vehicle
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-4">
                AMA Solutions Corp is incorporated in Delaware as a C corporation — the standard
                structure for institutional investment. The company is the intended vehicle for
                investment in the network, not a fund or a token.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-4">
                The core thesis: agentic delivery can scale without sacrificing accountability.
                The 12 Art Mob structure, HAMAL’s coordination layer, and Foundry OS in
                development are all oriented around building that at scale. The investment case
                rests on whether you believe that thesis and that AMA can execute it.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }} className="mb-8">
                If you want to understand more — the structure, the development stage, the
                direction — reach out. We’ll have a direct conversation.
              </p>
              <Link
                href="/contact?intent=invest"
                className="inline-block font-semibold px-6 py-3 rounded-lg text-sm"
                style={{ background: "var(--gold)", color: "#000" }}
              >
                Request a conversation
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--text-dim)" }}
              >
                What’s verified today
              </p>
              {[
                {
                  label: "Delaware C corporation",
                  desc: "AMA Solutions Corp is incorporated and legally structured. EIN confirmed.",
                  tag: "Verified",
                  tagColor: "#22C55E",
                },
                {
                  label: "HAMAL coordination layer",
                  desc: "Active. The intelligence and coordination layer connecting AMA, Hanzo, and Lux.",
                  tag: "Active",
                  tagColor: "#22C55E",
                },
                {
                  label: "12 Art Mob delivery network",
                  desc: "The Mob structure and 144 AGINT position design are established. Deployment roster is in development.",
                  tag: "In development",
                  tagColor: "#C9A227",
                },
                {
                  label: "Foundry OS",
                  desc: "Design and early-stage development. Not yet a generally available product.",
                  tag: "In development",
                  tagColor: "#C9A227",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl"
                  style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <p className="font-semibold text-sm">{item.label}</p>
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
                  <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: "1.6" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section className="py-16" aria-labelledby="pi-cta">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            id="pi-cta"
            className="font-bold text-2xl mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            All conversations start the same way
          </h2>
          <p className="mb-6" style={{ color: "var(--text-muted)" }}>
            Whether you’re interested in a partnership or exploring investment, the path is the
            same: reach out, and we’ll have a direct conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact?intent=partner"
              className="font-semibold px-6 py-3 rounded-lg text-sm"
              style={{ background: "var(--gold)", color: "#000" }}
            >
              Partner inquiry
            </Link>
            <Link
              href="/contact?intent=invest"
              className="font-semibold px-6 py-3 rounded-lg text-sm"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            >
              Investment inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

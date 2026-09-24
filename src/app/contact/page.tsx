import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import ContactForm from "./ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a conversation with AMA Solutions Corp about a client project, strategic partnership, investment inquiry, or Foundry OS.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: "80px" }} />

      {/* Header */}
      <section
        className="py-16 md:py-20"
        style={{ borderBottom: "1px solid var(--border)" }}
        aria-labelledby="contact-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Start a conversation
          </p>
          <h1
            id="contact-heading"
            className="font-bold mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.03em" }}
          >
            Get in touch with AMA
          </h1>
          <p
            className="max-w-xl text-lg"
            style={{ color: "var(--text-muted)", lineHeight: "1.8" }}
          >
            Every conversation at AMA starts with a human scoping call. Tell us what you’re
            working on and where you see the fit.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16" aria-label="Contact content">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — form */}
            <div>
              <h2 className="sr-only">Contact form</h2>
              <Suspense fallback={
                <div style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                  Loading form…
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right — context */}
            <div className="flex flex-col gap-8">
              {/* What to expect */}
              <div>
                <h2 className="font-bold text-xl mb-4" style={{ letterSpacing: "-0.01em" }}>
                  What to expect
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      step: "01",
                      label: "You reach out",
                      desc: "Fill in the form with as much context as you'd like. The more specific, the more productive the first call.",
                    },
                    {
                      step: "02",
                      label: "Human review",
                      desc: "A person on the AMA side reviews your inquiry and determines the right next step.",
                    },
                    {
                      step: "03",
                      label: "Scoping conversation",
                      desc: "If there's a fit, we'll set up a call to understand your situation and what kind of engagement makes sense.",
                    },
                    {
                      step: "04",
                      label: "Proposal or referral",
                      desc: "We'll either scope a proposal or point you to a better-fit resource — whichever is most useful.",
                    },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="flex gap-4 p-4 rounded-xl"
                      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                    >
                      <span
                        className="text-xs font-black shrink-0 mt-0.5"
                        style={{ color: "var(--gold)" }}
                      >
                        {s.step}
                      </span>
                      <div>
                        <p className="font-semibold text-sm mb-1">{s.label}</p>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: "1.5" }}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Path links */}
              <div>
                <h2
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={{ color: "var(--text-dim)" }}
                >
                  Before you reach out
                </h2>
                <div className="flex flex-col gap-2">
                  {[
                    {
                      label: "Read How It Works",
                      desc: "Understand AMA's operating model and what the Mob network does.",
                      href: "/how-it-works",
                    },
                    {
                      label: "Explore the 12 Mobs",
                      desc: "Find the team best aligned with your challenge.",
                      href: "/mobs",
                    },
                    {
                      label: "Partner / Invest",
                      desc: "For strategic partner or investor conversations.",
                      href: "/partner-invest",
                    },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ border: "1px solid var(--border)" }}
                    >
                      <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>›</span>
                      <div>
                        <p className="font-semibold text-sm">{l.label}</p>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", lineHeight: "1.5" }}>
                          {l.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Email placeholder notice */}
              <div
                className="p-4 rounded-xl text-xs"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-dim)",
                  lineHeight: "1.7",
                }}
                role="note"
              >
                <strong style={{ color: "var(--text-muted)" }}>Email not yet active.</strong>{" "}
                info@amasolagi.com is a candidate address. Email delivery, DNS, and receiving
                setup are pending. Do not send sensitive information to this address until
                confirmed active. The form above will be the primary route once activated.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

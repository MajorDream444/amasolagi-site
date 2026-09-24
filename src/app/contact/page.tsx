"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const intents = [
  { value: "project", label: "Client project" },
  { value: "partner", label: "Strategic partnership" },
  { value: "invest", label: "Investment inquiry" },
  { value: "foundry", label: "Foundry OS" },
  { value: "build", label: "Build with AMA" },
  { value: "other", label: "Something else" },
];

function ContactForm() {
  const searchParams = useSearchParams();
  const prefillIntent = searchParams.get("intent") ?? "";

  return (
    <div
      className="p-8 md:p-10 rounded-2xl"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      {/* Placeholder notice */}
      <div
        className="mb-6 p-4 rounded-xl flex items-start gap-3"
        style={{
          background: "rgba(201,162,39,0.07)",
          border: "1px solid rgba(201,162,39,0.2)",
        }}
        role="status"
      >
        <span style={{ color: "var(--gold)", flexShrink: 0 }}>⚠</span>
        <p style={{ color: "var(--text-muted)", fontSize: "0.8125rem", lineHeight: "1.7" }}>
          <strong style={{ color: "var(--gold)" }}>Form not yet connected.</strong> This form is a
          placeholder. Submission routes are pending email configuration. Do not send sensitive
          information here yet. Once delivery is confirmed, this notice will be removed.
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        aria-label="Contact form (placeholder — not yet active)"
        noValidate
      >
        <div className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-1.5"
              style={{ color: "var(--text)" }}
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              className="w-full px-4 py-2.5 rounded-lg text-sm"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                outline: "none",
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-1.5"
              style={{ color: "var(--text)" }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@organization.com"
              className="w-full px-4 py-2.5 rounded-lg text-sm"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                outline: "none",
              }}
            />
          </div>

          {/* Intent */}
          <div>
            <label
              htmlFor="intent"
              className="block text-sm font-semibold mb-1.5"
              style={{ color: "var(--text)" }}
            >
              What brings you here?
            </label>
            <select
              id="intent"
              name="intent"
              defaultValue={prefillIntent}
              className="w-full px-4 py-2.5 rounded-lg text-sm"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                color: prefillIntent ? "var(--text)" : "var(--text-muted)",
                outline: "none",
              }}
            >
              <option value="" disabled>
                Select one…
              </option>
              {intents.map((i) => (
                <option key={i.value} value={i.value}>
                  {i.label}
                </option>
              ))}
            </select>
          </div>

          {/* Organization */}
          <div>
            <label
              htmlFor="organization"
              className="block text-sm font-semibold mb-1.5"
              style={{ color: "var(--text)" }}
            >
              Organization{" "}
              <span style={{ color: "var(--text-dim)", fontWeight: 400 }}>(optional)</span>
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              autoComplete="organization"
              placeholder="Company or organization name"
              className="w-full px-4 py-2.5 rounded-lg text-sm"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                outline: "none",
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-1.5"
              style={{ color: "var(--text)" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us what you're thinking about. What problem are you trying to solve? What kind of engagement are you considering? The more context, the better."
              className="w-full px-4 py-3 rounded-lg text-sm resize-y"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                outline: "none",
                minHeight: "120px",
              }}
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled
              className="w-full py-3 px-6 rounded-lg font-semibold text-sm opacity-50 cursor-not-allowed"
              style={{ background: "var(--gold)", color: "#000" }}
              aria-disabled="true"
              title="Form submission is not yet active"
            >
              Send message (pending activation)
            </button>
            <p className="text-xs mt-2 text-center" style={{ color: "var(--text-dim)" }}>
              Submit is disabled — form routing is not yet configured.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

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
            Every conversation at AMA starts with a human scoping call. Tell us what you're
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

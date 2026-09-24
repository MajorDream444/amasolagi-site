"use client";
import { useSearchParams } from "next/navigation";

const intents = [
  { value: "project", label: "Client project" },
  { value: "partner", label: "Strategic partnership" },
  { value: "invest", label: "Investment inquiry" },
  { value: "foundry", label: "Foundry OS" },
  { value: "build", label: "Build with AMA" },
  { value: "other", label: "Something else" },
];

export default function ContactForm() {
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

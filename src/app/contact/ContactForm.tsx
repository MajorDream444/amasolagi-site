"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    type: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    // Placeholder — no live endpoint yet
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    padding: "12px 16px",
    color: "var(--text)",
    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--text-dim)",
    marginBottom: 6,
  };

  if (state === "success") {
    return (
      <div
        style={{
          padding: "40px 32px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-card)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "var(--gold-glow)",
            border: "1px solid var(--gold-dim)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display, Inter, sans-serif)",
            fontSize: 20,
            fontWeight: 500,
            color: "var(--text)",
            margin: "0 0 10px",
          }}
        >
          Message received
        </h3>
        <p className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>
          We read every message personally. We&apos;ll be in touch if there&apos;s a path forward.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-card)",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* Name + Email */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle} htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@org.com"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Org */}
      <div>
        <label style={labelStyle} htmlFor="cf-org">Organization <span style={{ color: "var(--text-dim)", fontWeight: 400 }}>(optional)</span></label>
        <input
          id="cf-org"
          name="org"
          type="text"
          placeholder="Company or project"
          value={form.org}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>

      {/* Type */}
      <div>
        <label style={labelStyle} htmlFor="cf-type">Inquiry type</label>
        <select
          id="cf-type"
          name="type"
          required
          value={form.type}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="" disabled>Select one</option>
          <option value="client">Client inquiry</option>
          <option value="partner">Strategic partnership</option>
          <option value="investor">Investor interest</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle} htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you're working on or what you'd like to discuss."
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
        />
      </div>

      {/* Disclaimer */}
      <p
        className="body-mono"
        style={{ fontSize: 11, color: "var(--text-dim)", margin: 0, lineHeight: 1.5 }}
      >
        Submitting this form does not create a contractual relationship or imply
        engagement. For investment inquiries, this is an informational contact only —
        not a securities offering.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary"
        style={{
          width: "100%",
          opacity: state === "submitting" ? 0.6 : 1,
          cursor: state === "submitting" ? "not-allowed" : "pointer",
        }}
      >
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>

      {state === "error" && (
        <p className="body-mono" style={{ color: "#EF4444", fontSize: 13, margin: 0, textAlign: "center" }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}

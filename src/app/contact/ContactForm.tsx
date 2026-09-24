"use client";

import { useState } from "react";

export default function ContactForm() {
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

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
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

      <p className="body-mono" style={{ color: "var(--text-dim)", fontSize: 13, margin: 0 }}>
        The contact form is not connected yet. Please check back soon; submitted details are not sent or stored.
      </p>
    </form>
  );
}

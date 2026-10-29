"use client";

import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  org: string;
  type: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormValues>({ name: "", email: "", org: "", type: "", message: "" });
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization: form.org,
          inquiryType: form.type,
          message: form.message,
          marketingConsent,
          website,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus(result.error || "We could not send your message. Please try again.");
        return;
      }
      setForm({ name: "", email: "", org: "", type: "", message: "" });
      setMarketingConsent(false);
      setStatus(result.marketingWarning || "Message sent. We’ve emailed you a confirmation.");
    } catch {
      setStatus("We could not send your message. Please try again or email info@amasolagi.com.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "var(--surface)", border: "1px solid var(--border)",
    borderRadius: 12, padding: "12px 16px", color: "var(--text)",
    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: 14,
    outline: "none", boxSizing: "border-box", transition: "border-color 0.15s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
    fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
    textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 6,
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-card)", padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle} htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" required maxLength={120} placeholder="Your name" value={form.name} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" required maxLength={254} placeholder="you@org.com" value={form.email} onChange={handleChange} style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle} htmlFor="cf-org">Organization <span style={{ color: "var(--text-dim)", fontWeight: 400 }}>(optional)</span></label>
        <input id="cf-org" name="org" type="text" maxLength={160} placeholder="Company or project" value={form.org} onChange={handleChange} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle} htmlFor="cf-type">Inquiry type</label>
        <select id="cf-type" name="type" required value={form.type} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="" disabled>Select one</option>
          <option value="client">Client inquiry</option>
          <option value="partner">Strategic partnership</option>
          <option value="investor">Investor interest</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label style={labelStyle} htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" required maxLength={5000} rows={5} placeholder="Tell us what you’re working on or what you’d like to discuss." value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: "vertical", minHeight: 120 }} />
      </div>
      <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12, lineHeight: 1.5, color: "var(--text-secondary)" }}>
        <input type="checkbox" checked={marketingConsent} onChange={(event) => setMarketingConsent(event.target.checked)} style={{ marginTop: 3 }} />
        I’d also like occasional AMA Solutions news and offers by email. I can unsubscribe at any time. This is optional and does not affect my inquiry.
      </label>
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="cf-website">Leave this field empty</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </div>
      <p className="body-mono" style={{ fontSize: 11, color: "var(--text-dim)", margin: 0, lineHeight: 1.5 }}>
        Submitting this form does not create a contractual relationship or imply engagement. For investment inquiries, this is informational contact only — not a securities offering. See our <a href="/privacy" style={{ color: "var(--gold)" }}>privacy notice</a>.
      </p>
      <button type="submit" disabled={submitting} className="btn-primary" style={{ alignSelf: "flex-start", opacity: submitting ? 0.7 : 1 }}>
        {submitting ? "Sending…" : "Send message"}
      </button>
      <p role="status" aria-live="polite" className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 13, margin: 0 }}>
        {status}
      </p>
      <p className="body-mono" style={{ color: "var(--text-dim)", fontSize: 12, margin: 0 }}>
        Or email <a href="mailto:info@amasolagi.com" style={{ color: "var(--gold)" }}>info@amasolagi.com</a> or call <a href="tel:+61450461470" style={{ color: "var(--gold)" }}>+61 450 461 470</a>.
      </p>
    </form>
  );
}

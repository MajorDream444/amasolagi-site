"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, consent, website }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      setStatus(result.error || "Signup failed. Please try again.");
      return;
    }
    setEmail("");
    setConsent(false);
    setStatus("You’re on the list. You can unsubscribe from any email.");
  }

  return (
    <section aria-labelledby="newsletter-heading" style={{ maxWidth: 360 }}>
      <p id="newsletter-heading" className="label-mono" style={{ color: "var(--gold)", margin: "0 0 10px" }}>
        AMA Solutions updates
      </p>
      <p className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 13, margin: "0 0 14px" }}>
        Occasional company news and relevant service offers. Sign up only if you want these emails.
      </p>
      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label htmlFor="newsletter-email" className="label-mono" style={{ color: "var(--text-dim)" }}>
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text)" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
          <label htmlFor="newsletter-website">Leave this field empty</label>
          <input id="newsletter-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
        </div>
        <label style={{ display: "flex", gap: 9, alignItems: "flex-start", fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>
          <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required style={{ marginTop: 3 }} />
          I agree to receive occasional AMA Solutions news and offers. I can unsubscribe at any time.
        </label>
        <button type="submit" className="btn-secondary" style={{ alignSelf: "flex-start" }}>Subscribe</button>
      </form>
      <p role="status" aria-live="polite" className="body-mono" style={{ color: "var(--text-secondary)", fontSize: 12, minHeight: 20, margin: "10px 0 0" }}>
        {status}
      </p>
    </section>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/mobs",         label: "The Mobs" },
  { href: "/foundry-os",   label: "Foundry OS" },
  { href: "/founder",      label: "Founder" },
  { href: "/partner-invest", label: "Partner" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: "1px solid var(--border)",
        background: "rgba(8,8,8,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
          aria-label="AMA Solutions Corp home"
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "var(--gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1L13 12H1L7 1Z" fill="#080808" />
            </svg>
          </span>
          <span
            style={{
              fontFamily: "var(--font-display, Inter, sans-serif)",
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: "-0.01em",
              color: "var(--text)",
            }}
          >
            AMA Solutions
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              alignSelf: "flex-end",
              paddingBottom: 1,
            }}
          >
            Corp
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
          className="hidden-mobile"
        >
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                style={{
                  padding: "6px 14px",
                  borderRadius: "var(--radius-pill)",
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: 12,
                  fontWeight: active ? 600 : 400,
                  letterSpacing: "0.04em",
                  color: active ? "var(--gold-light)" : "var(--text-secondary)",
                  textDecoration: "none",
                  background: active ? "rgba(201,162,39,0.08)" : "transparent",
                  border: active ? "1px solid rgba(201,162,39,0.2)" : "1px solid transparent",
                  transition: "color 150ms ease, background 150ms ease, border-color 150ms ease",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ fontSize: 11, padding: "10px 20px" }}
          >
            Start a Conversation
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="show-mobile"
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "6px 10px",
              cursor: "pointer",
              color: "var(--text)",
              display: "none",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              {open ? (
                <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              ) : (
                <>
                  <rect x="2" y="4" width="12" height="1.5" rx="0.75"/>
                  <rect x="2" y="7.25" width="12" height="1.5" rx="0.75"/>
                  <rect x="2" y="10.5" width="12" height="1.5" rx="0.75"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          style={{
            borderTop: "1px solid var(--border)",
            background: "var(--bg)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 12,
                  fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                  fontSize: 13,
                  fontWeight: active ? 600 : 400,
                  color: active ? "var(--gold-light)" : "var(--text-secondary)",
                  textDecoration: "none",
                  background: active ? "rgba(201,162,39,0.08)" : "transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{ marginTop: 12, justifyContent: "center" }}
          >
            Start a Conversation
          </Link>
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

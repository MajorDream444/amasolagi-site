import Link from "next/link";

const links = {
  Company: [
    { href: "/how-it-works",   label: "How It Works" },
    { href: "/mobs",           label: "The 12 Mobs" },
    { href: "/foundry-os",     label: "Foundry OS" },
    { href: "/founder",        label: "Founder" },
  ],
  Connect: [
    { href: "/partner-invest", label: "Partner & Invest" },
    { href: "/contact",        label: "Contact" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
        padding: "64px 0 32px",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 340 }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                marginBottom: 16,
              }}
              aria-label="AMA Solutions Corp"
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
                  color: "var(--text)",
                }}
              >
                AMA Solutions Corp
              </span>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: 13,
                lineHeight: 1.65,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              The agent-enabled corporation. 12 specialized Art Mob teams.
              Human accountability throughout.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p
                className="label-mono"
                style={{
                  color: "var(--text-dim)",
                  marginBottom: 16,
                  margin: "0 0 16px",
                }}
              >
                {group}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="footer-link"
                      style={{
                        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                        fontSize: 13,
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "color 150ms ease",
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: 24 }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: 12,
              color: "var(--text-dim)",
              margin: 0,
            }}
          >
            © {year} AMA Solutions Corporation. Delaware C-Corp.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontSize: 12,
              color: "var(--text-dim)",
              margin: 0,
              textAlign: "right",
            }}
          >
            Not a securities offering.{" "}
            <Link
              href="/contact"
              style={{ color: "var(--gold-dim)", textDecoration: "none" }}
            >
              Contact us
            </Link>{" "}
            for partnership inquiries.
          </p>
        </div>
      </div>
    </footer>
  );
}

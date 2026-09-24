import Link from "next/link";

const navGroups = [
  {
    label: "Company",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/foundry-os", label: "Foundry OS" },
      { href: "/founder", label: "Founder" },
    ],
  },
  {
    label: "Engage",
    links: [
      { href: "/mobs", label: "The 12 Mobs" },
      { href: "/partner-invest", label: "Partner / Invest" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    label: "Ecosystem",
    links: [
      {
        href: "https://majordreamwilliams.com",
        label: "majordreamwilliams.com",
        ext: true,
        note: "(verify before visiting)",
      },
      {
        href: "https://majoraimindset.com",
        label: "Major AI Mindset",
        ext: true,
        note: "(verify before visiting)",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        backgroundColor: "var(--surface)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-4">
              <span
                style={{
                  color: "var(--gold)",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                AMA
              </span>
            </Link>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: "1.7" }}>
              AMA Solutions Corp — Delaware C Corporation. Agentic venture-building and delivery.
            </p>
            <p
              className="mt-4 text-xs"
              style={{
                color: "var(--text-dim)",
                padding: "0.5rem 0.75rem",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                lineHeight: "1.5",
              }}
            >
              Contact routes are placeholders pending configuration.
            </p>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.label}>
              <h3
                style={{
                  color: "var(--text-dim)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {group.label}
              </h3>
              <ul className="flex flex-col gap-2" role="list">
                {group.links.map((l) => (
                  <li key={l.href}>
                    {"ext" in l && l.ext ? (
                      <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
                        {l.label}{" "}
                        <span style={{ color: "var(--text-dim)", fontSize: "0.75rem" }}>
                          {l.note}
                        </span>
                      </span>
                    ) : (
                      <Link
                        href={l.href}
                        style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}
                        className="hover:text-white transition-colors"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p style={{ color: "var(--text-dim)", fontSize: "0.8125rem" }}>
            © {new Date().getFullYear()} AMA Solutions Corp. All rights reserved.
          </p>
          <p style={{ color: "var(--text-dim)", fontSize: "0.8125rem" }}>
            Intended domain: amasolagi.com — deployment pending
          </p>
        </div>
      </div>
    </footer>
  );
}

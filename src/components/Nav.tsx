"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/mobs", label: "The Mobs" },
  { href: "/foundry-os", label: "Foundry OS" },
  { href: "/founder", label: "Founder" },
  { href: "/partner-invest", label: "Partner / Invest" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        backgroundColor: "rgba(8,12,24,0.95)",
        backdropFilter: "blur(12px)",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        style={{ height: "64px" }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight"
          style={{ color: "var(--text)" }}
        >
          <span
            style={{
              color: "var(--gold)",
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
            }}
          >
            AMA
          </span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            Solutions Corp
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    color: active ? "var(--gold)" : "var(--text-muted)",
                    fontSize: "0.875rem",
                    padding: "0.375rem 0.75rem",
                    borderRadius: "6px",
                    display: "block",
                    transition: "color 0.15s, background 0.15s",
                  }}
                  className="hover:text-white"
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 font-medium text-sm px-4 py-2 rounded-lg transition-all"
          style={{
            background: "var(--gold)",
            color: "#000",
            fontWeight: 600,
          }}
        >
          Discuss a project
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg"
          style={{ color: "var(--text)" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className="block w-5 h-0.5 mb-1 transition-all"
            style={{
              backgroundColor: "currentColor",
              transform: open ? "rotate(45deg) translate(3px,3px)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 mb-1 transition-all"
            style={{
              backgroundColor: "currentColor",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              backgroundColor: "currentColor",
              transform: open ? "rotate(-45deg) translate(3px,-3px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--surface)",
          }}
          className="md:hidden"
        >
          <ul className="px-6 py-4 flex flex-col gap-1" role="list">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      color: active ? "var(--gold)" : "var(--text)",
                      fontSize: "1rem",
                      padding: "0.625rem 0",
                      display: "block",
                      borderBottom: "1px solid var(--border)",
                    }}
                    aria-current={active ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block text-center font-semibold py-3 px-4 rounded-lg"
                style={{ background: "var(--gold)", color: "#000" }}
              >
                Discuss a project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

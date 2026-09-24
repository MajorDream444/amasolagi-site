import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AMA Solutions Corp",
    template: "%s | AMA Solutions Corp",
  },
  description:
    "AMA Solutions Corp delivers agentic services through 12 specialized Art Mob teams — the client-facing, accountability-backed corporation for the agentic era.",
  metadataBase: new URL("https://amasolagi.com"),
  openGraph: {
    type: "website",
    siteName: "AMA Solutions Corp",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#080808] text-white antialiased">
        <Nav />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

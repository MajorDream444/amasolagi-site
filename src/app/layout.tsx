import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_NAME } from "@/lib/metadata";

const siteDescription =
  "AMA Solutions Corp — agentic venture-building and delivery. Strategic partners, investors, and clients engage AMA and our 12 Art Mob teams to turn ambitious ideas into scoped, reviewable work.";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: siteDescription,
  metadataBase: new URL("https://amasolagi.com"),
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: SITE_NAME,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

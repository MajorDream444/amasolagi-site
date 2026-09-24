import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AMA Solutions Corp",
    template: "%s | AMA Solutions Corp",
  },
  description:
    "AMA Solutions Corp — agentic venture-building and delivery. Strategic partners, investors, and clients engage AMA and our 12 Art Mob teams to turn ambitious ideas into scoped, reviewable work.",
  metadataBase: new URL("https://amasolagi.com"),
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

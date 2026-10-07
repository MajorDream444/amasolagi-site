import { NextResponse } from "next/server";
import { sendContactEmails, subscribeMarketing } from "@/lib/resend";

export const runtime = "nodejs";

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Request rejected." }, { status: 403 });
  }

  const length = Number(request.headers.get("content-length") || 0);
  if (length > 20_000) return NextResponse.json({ error: "Message too large." }, { status: 413 });

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  // Honeypot: silently accept bots without sending email.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 254) : "";
  const organization = typeof body.organization === "string" ? body.organization.trim().slice(0, 160) : "";
  const inquiryType = typeof body.inquiryType === "string" ? body.inquiryType.trim().slice(0, 80) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 5000) : "";
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailOk || !inquiryType || message.length < 5) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  try {
    await sendContactEmails({ name, email, organization, inquiryType, message });
    let marketingWarning: string | undefined;

    if (body.marketingConsent === true) {
      try {
        await subscribeMarketing({
          email,
          firstName: name.split(/\s+/)[0],
          source: "contact-form",
          consentAt: new Date().toISOString(),
        });
      } catch {
        marketingWarning = "Your inquiry was sent, but the optional email signup could not be saved. Please try the signup form again.";
      }
    }

    return NextResponse.json({
      ok: true,
      marketingWarning,
    });
  } catch {
    return NextResponse.json({ error: "We could not send your message. Please email info@amasolagi.com." }, { status: 502 });
  }
}

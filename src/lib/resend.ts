const RESEND_API_URL = "https://api.resend.com";

type ResendResult = {
  id?: string;
  error?: { message?: string };
  data?: Record<string, unknown>;
};

function getApiKey() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("Email service is not configured");
  return key;
}

async function resendRequest(path: string, init: RequestInit): Promise<ResendResult> {
  const response = await fetch(`${RESEND_API_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getApiKey()}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
  const result = (await response.json().catch(() => ({}))) as ResendResult;
  if (!response.ok) throw new Error(result.error?.message || "Email request failed");
  return result;
}

const json = (body: unknown): RequestInit => ({
  method: "POST",
  body: JSON.stringify(body),
});

export async function sendContactEmails(input: {
  name: string;
  email: string;
  organization?: string;
  inquiryType: string;
  message: string;
}) {
  const from = process.env.AMA_FROM_EMAIL;
  const to = process.env.AMA_CONTACT_TO_EMAIL;
  if (!from || !to) throw new Error("Contact email is not configured");

  const escaped = input.message.replace(/[&<>"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;",
  })[char] || char);
  const name = input.name.replace(/[&<>"]/g, "");
  const organization = (input.organization || "Not provided").replace(/[&<>"]/g, "");

  await resendRequest("/emails", json({
    from,
    to: [to],
    reply_to: input.email,
    subject: `Website inquiry: ${input.inquiryType}`,
    text: `Name: ${input.name}\nEmail: ${input.email}\nOrganization: ${input.organization || "Not provided"}\nInquiry type: ${input.inquiryType}\n\n${input.message}`,
    html: `<h2>Website inquiry</h2><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${input.email}</p><p><b>Organization:</b> ${organization}</p><p><b>Type:</b> ${input.inquiryType}</p><p>${escaped.replace(/\n/g, "<br>")}</p>`,
  }));

  await resendRequest("/emails", json({
    from,
    to: [input.email],
    reply_to: process.env.AMA_REPLY_TO_EMAIL || to,
    subject: "We received your message — AMA Solutions",
    text: `Hi ${input.name},\n\nThank you for contacting AMA Solutions. Your message has been received, and a member of our team will review it. We will follow up if there is a genuine path forward.\n\nAMA Solutions\ninfo@amasolagi.com\nhttps://amasolagi.com\n\nThis is an operational confirmation of your inquiry, not a marketing subscription.`,
  }));
}

export async function subscribeMarketing(input: {
  email: string;
  firstName?: string;
  source: string;
  consentAt: string;
}) {
  const topicId = process.env.RESEND_MARKETING_TOPIC_ID;
  const eventName = process.env.RESEND_MARKETING_EVENT;
  if (!topicId || !eventName) throw new Error("Marketing signup is not configured");

  const listed = await resendRequest(
    `/contacts?email=${encodeURIComponent(input.email)}`,
    { method: "GET" },
  );
  const contact = (listed.data || {}) as Record<string, unknown>;
  const existingTopics = Array.isArray(contact.topics)
    ? (contact.topics as Array<Record<string, unknown>>)
    : [];
  const wasOptedIn = existingTopics.some(
    (topic) => topic.id === topicId && topic.subscription === "opt_in",
  );

  if (contact.id) {
    await resendRequest(`/contacts/${encodeURIComponent(input.email)}`, {
      method: "PATCH",
      body: JSON.stringify({
        first_name: input.firstName || undefined,
        unsubscribed: false,
      }),
    });
    await resendRequest(`/contacts/${encodeURIComponent(input.email)}/topics`, json({
      topics: [{ id: topicId, subscription: "opt_in" }],
    }));
  } else {
    await resendRequest("/contacts", json({
      email: input.email,
      first_name: input.firstName || undefined,
      unsubscribed: false,
      topics: [{ id: topicId, subscription: "opt_in" }],
    }));
  }

  if (!wasOptedIn) {
    await resendRequest("/emails/events", json({
      event: eventName,
      email: input.email,
      created_at: input.consentAt,
      properties: {
        first_name: input.firstName || "",
        source: input.source,
        consent_at: input.consentAt,
      },
    }));
  }
}

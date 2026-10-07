# Resend setup

The website sends operational contact messages through Resend. Visitors enter the marketing audience only after an explicit, unchecked opt-in.

## Vercel environment

Set these variables for Production, Preview, and Development as appropriate:

- `RESEND_API_KEY`: secret, server-side only. Store it as a Sensitive environment variable. Use a key with the contact and email-event permissions required by the integration; do not expose it in client code or commit it.
- `AMA_FROM_EMAIL`: `AMA Solutions <info@amasolagi.com>`
- `AMA_CONTACT_TO_EMAIL`: `info@amasolagi.com`
- `AMA_REPLY_TO_EMAIL`: `major@amasolagi.com`
- `RESEND_MARKETING_TOPIC_ID`: Resend topic ID for AMA Solutions updates and offers.
- `RESEND_MARKETING_EVENT`: `ama.website.marketing_subscribed`

The sender domain must remain verified in Resend. Test contact delivery and unsubscribe behavior with owner controlled addresses before production promotion.

## Resend audience

The website uses the `AMA Solutions Updates & Offers` topic. New signups are explicitly opted in and the `ama.website.marketing_subscribed` custom event records source and consent time. Do not import or add people without documented consent.

## Marketing automation status

The welcome and follow-up automation is configured in Resend but is **disabled**. Before enabling it:

1. Add AMA Solutions' valid physical business mailing address to both published email templates and any other commercial messages.
2. Confirm the unsubscribe link is functional in a real test email.
3. Review sender identity, subject lines, and the final copy.
4. Set the Vercel variables above and test using an owner-controlled address.
5. Enable the automation only after the above checks are complete.

No promotional emails are sent to contact-form submitters unless they select the separate optional marketing-consent checkbox. Contact submission alone is not consent.

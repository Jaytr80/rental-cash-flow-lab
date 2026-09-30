# Rental Cash Flow Lab

Jay Adams’s educational marketing site. Next.js App Router, TypeScript, React, and a standard Vercel deployment, matching the reference site's framework. No database, authentication, or calculator application.

## Run and verify

```sh
npm ci
npm run dev
npm test
npm run build
npm start
# In a second terminal, with Chrome installed:
node scripts/browser-check.mjs
```

Production files are checked in under `public/downloads`. Regenerate the PDF files with `npm run generate:downloads`; editable toolkit content is in `content/toolkit-sections.json`. The CSV worksheets contain blank input cells and written formulas, not executable calculations. Cover graphics are clearly labeled editorial representations.

## Vercel setup

Import this repository into Vercel, choose the Next.js preset, use the repository root, and set the production branch to `main`. Build command: `npm run build`; use the default Next.js output settings. No custom Vercel configuration is necessary. This work does not create a deployment or attach a domain. The intended canonical domain is `https://rentalcashflowlab.com`.

Add server-only environment variables from `.env.example` in Vercel, then redeploy:

- `MAILERTLITE_API_KEY`: API token, never prefixed with `NEXT_PUBLIC_`.
- `MAILERTLITE_GROUP_ID`: existing subscriber group ID.
- `MAILERTLITE_CHECKOUT_URL`: optional HTTPS checkout URL. Leave blank until the purchase and delivery process is ready.

The spelling `MAILERTLITE` is intentional to match the requested environment names.

The signup route follows [MailerLite's subscriber API](https://developers.mailerlite.com/api/subscribers). It validates input and subscription consent, checks browser origin, uses a honeypot, and calls the provider on the server with a timeout. It does not log form data, keys, or provider errors. Configure host-level abuse/rate protection before a public campaign. Provider failures return an error and never claim success. Without both email settings, the form accepts the request, stores no subscriber details, and explicitly says delivery is being connected. The success state gives access to the free PDF and CSV in either accepted mode.

## Connect the email series

Create an automation triggered by joining the configured group. Load emails 0–6 from `content/drip`, set appropriate delays, configure the sender identity/reply mailbox and domain authentication, and verify the MailerLite unsubscribe token renders correctly. Send test emails and check all links. API acceptance does not prove an email was sent; existing or unsubscribed contacts may not trigger automation. No automation or external emails are created by this repository.

## Toolkit and delivery

The toolkit working price is $29 one-time. With no valid HTTPS checkout URL, the button is disabled. `/toolkit/thanks` never verifies a payment or exposes files. Before enabling checkout, configure real payment confirmation and delivery on the checkout provider; visiting a thank-you URL must never be treated as proof of purchase.

As requested, toolkit assets are in `public/downloads/toolkit`: the 13-page PDF pack, one-page pipeline index, and pipeline CSV. They are not linked from the site, and robots excludes that directory. **Public assets and a public repository are not access control:** anyone who knows a file URL or views this repository can obtain them. For purchase-restricted delivery, move these assets to private provider storage and remove public copies before selling. This implementation intentionally adds no auth or database.

The free form is a marketing email gate, not secure file protection. Its files are public too.

## Scope

No domain purchase, DNS change, Vercel domain attachment, payment processing, or professional advice. All pages and materials use the Jay Adams author brand only.

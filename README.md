# HSSGL Corporate Website

A responsive Next.js App Router website for Haliden Security Services and Guard Limited.

## Stack
- Next.js App Router, React and TypeScript
- Local image assets and SVG iconography
- CSS design system aligned to the supplied HSSGL letterhead: navy blue, gold and white
- Web3Forms for email-only enquiry delivery (free plan: 250 submissions per month; no custom backend required)

## Run locally
1. Install Node.js LTS (recommended), then run `npm install`.
2. Copy `.env.example` to `.env.local` or use the supplied local file.
3. Run `npm run dev` and open `http://localhost:3000`.
4. Run `npm run build` before production deployment.

## Environment variables
- `NEXT_PUBLIC_SITE_URL`: canonical website URL; use the real domain in production.
- `NEXT_PUBLIC_COMPANY_NAME`, `NEXT_PUBLIC_COMPANY_SHORT_NAME`, `NEXT_PUBLIC_COMPANY_REGISTRATION`, `NEXT_PUBLIC_COMPANY_MOTTO`: centralised brand information.
- `NEXT_PUBLIC_COMPANY_PHONE`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_COMPANY_ADDRESS`: centralised contact details.
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`: access key generated for HSSGL at Web3Forms. The key is intended for frontend use and is not a private server secret.

`.env.local` is ignored by Git. Web3Forms access keys are designed for browser-side use, but should still be managed through the documented environment configuration.

## Form setup and testing
1. Create a Web3Forms access key at https://web3forms.com/ using `oscog2005@gmail.com` as the destination email and complete any email verification requested.
2. Paste the access key into `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local`. For deployment, add the same variable in the hosting provider’s environment settings.
3. Restart the local development server or redeploy after changing environment variables.
4. Test both the security request and contact forms, including invalid fields, network failure, spam handling and actual email delivery. Do not claim the forms are production-ready until end-to-end delivery has been verified.

The Web3Forms free plan currently advertises 250 submissions per month. If the limit is reached, new submissions may stop until the next monthly period.

## Before launch
- Confirm the company address spelling, phone details and service availability with HSSGL.
- Confirm all advertised security services can lawfully be offered and the necessary approvals are in place.
- Replace the local development URL in deployment environment settings.
- Review the privacy notice against the company's actual data-handling practices and Web3Forms' current terms.
- Test keyboard navigation, mobile layouts, images, page metadata, sitemap, 404 page and form notifications.
- Do not commit `.env.local`.

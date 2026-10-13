# HSSGL Project Notes

## Branding
- Primary: navy blue (#0B1F4B).
- Secondary: gold (#C99A2E).
- Supporting: white and restrained neutral tones.
- Accent red is not used heavily; the shield logo and local iconography are navy/gold.
- The recreated SVG shield is a web-friendly refinement based on the supplied letterhead logo, not an official vector file from the client.

## Forms
- Contact and security-request forms use Web3Forms, configured through `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (free plan currently lists 250 submissions per month).
- The owner of the destination inbox must complete the provider's initial activation/confirmation step.
- A successful network response must be verified by end-to-end testing before launch. The project does not store submissions in its own database.

## Verification still required before production
- Confirm spelling of the address as it appears on the letterhead.
- Confirm phone number and inbox are monitored by HSSGL.
- Confirm service list and required licences/authorisations for each service.
- Confirm business hours; no unverified opening hours are published.
- Review the privacy notice against actual company practice and the third-party form processor's current terms.
- Run install, lint, typecheck, production build, mobile/responsive and end-to-end form tests in a network-enabled development environment.
- Configure production environment variables and canonical URL after domain/hosting decisions are final.

## October 2026 review updates
- Replaced the generic repeated FAQ answer with six specific, cautious answers covering enquiry details, deployment timing, multi-site requests, temporary/event enquiries, booking confirmation, and follow-up.
- Expanded the homepage process cards with descriptive steps and clarified that submitting a form is not a deployment confirmation.
- Fixed the industrial-page CTA contrast: generic `.card a` styling had overridden the button text colour and padding. Added a more specific accessible button style.
- Image quality still requires replacing the current local image files with properly sourced high-resolution originals. Changing Vercel dashboard settings cannot improve the underlying image quality; assets must be changed in the source package and redeployed.

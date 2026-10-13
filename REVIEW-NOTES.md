# HSSGL website review notes

## Updated in this revision
- Replaced the repeated generic FAQ answer with question-specific answers that avoid promising unverified availability or deployment times.
- Expanded the homepage “How it works” cards to explain the steps from enquiry through review, terms, and confirmed commencement.
- Corrected the industrial-page “Request Security Services” CTA text contrast so it remains readable against the navy button background on mobile and desktop.

## Important: image quality
The current local images are not replaced in this revision. The screenshots indicate that some images look soft or low-resolution. Improving this properly means replacing the underlying image files with high-resolution, properly licensed, subject-appropriate originals and checking their crop/compression at mobile sizes. This cannot be fixed by changing a setting in the Vercel dashboard. The new files must be added to the source project and redeployed.

## Deployment
Vercel's dashboard can manage environment variables, domains, deployment settings and redeployments. It is not a visual editor for this Next.js website's page copy or local image files. To publish code/content/image changes, update the source project and trigger a new deployment (usually by pushing a commit to the connected Git repository, or by deploying the revised source with the chosen workflow).

Production build and browser testing remain to be run in the project environment before treating the revision as fully verified.

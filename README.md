# Catena public website

The commercial website for Catena, the managed operations platform by Prime Elixir. Records-to-Demand is the first lane. This repository does not implement the operating platform or admit live matters.

## Development and validation

Use Node.js 22 or later. Read `AGENTS.md` and the relevant bundled Next.js documentation before changing framework code.

```powershell
npm ci
npm run dev
npm run lint
npm test
npm run build
npm start
```

The native Node tests use injected fake configuration and mocked provider responses. They do not send emails or require live credentials.

## Buyer journey

- `/`: the full operation in an existing film, one supporting exception, responsibilities, fit, and a conversation.
- `/records-to-demand`: an ungated, printable brief to share with a buyer and operating owner.
- `/conversation`: a 15-minute Cal.com booking with timezone, confirmation, rescheduling, cancellation, and direct booking/email alternatives.
- `/privacy`: how website inquiries are handled.

Legacy `/contact` and `/about` paths temporarily redirect to their replacements. Relevant old homepage anchors remain available. The historical `jordan-pi-operating-map` directory is outside this website build and is excluded from direct Vercel deployments.

Fonts are served locally. Their licenses and source manifest are in `public/fonts`. The hero uses the existing 42-second silent film, replacing the abstract artwork and the separate film section. It illustrates the complete operation, readiness, and reopening when evidence changes; it is labeled as an illustration, not product output. Its MP4, poster, and English WebVTT captions live in `public/media`. Native controls support pause, seeking, fullscreen, and captions, with a visual transcript below. The film does not autoplay and uses `preload="none"`. No advertising pixels or visitor analytics are installed in this application.

## Scheduling

`src/lib/booking.ts` holds the public booking path and email fallback. The client component uses the pinned official `@calcom/embed-react` package on the conversation route only. Event details remain visible so visitors can inspect the selected time before confirmation. The direct Cal.com link and email are server-rendered and remain available without JavaScript or if the embed fails. No Cal.com API key is needed in this website.

The event is `https://cal.com/consult-recovery/catena-15min` (event ID 7028013), titled **Catena · Records-to-Demand conversation**. Cal.com owns availability, connected calendar conflict checks, Microsoft Teams links, confirmations, rescheduling, and cancellations. Current configuration: 15 minutes, 24-hour minimum notice, 15-minute after-buffer, automatic confirmation, required name/business email/firm. The assigned host and calendar can change when a salesperson joins; website calls to action do not promise Brian as host.

Live scheduler tests create calendar entries and emails. Use only authorized internal contact details, clearly mark tests, cancel the appointments afterward, and exclude them from commercial counts. Verify delivery and Teams-link creation as well as the browser confirmation. Scheduling works on previews too; the legacy inquiry endpoint's preview restriction does not apply to Cal.com.

## Legacy inquiry endpoint

The website now routes inquiries to booking and direct email. `POST /api/contact` remains for compatibility with older loaded pages. It accepts JSON business-contact fields only: `name`, `email`, `firm`, `role`, optional `monthlyVolume`, and an empty `website` honeypot. It requires a UUID v4 `Idempotency-Key`. The endpoint bounds request size, validates values, checks request origin and uses a bounded provider timeout. HTTP 202 requires explicit provider acceptance; it does not prove inbox delivery.

The sender remains disabled unless all of these are present:

- Vercel's actual `VERCEL_ENV` is `production`.
- `CONTACT_FORM_ENABLED` equals `true`.
- `RESEND_API_KEY` is configured securely.
- `CONTACT_FROM` is a verified company-domain sender, not a provider testing address.
- `CONTACT_EMAIL` is the accountable recipient mailbox.

Copy `.env.example` only as configuration guidance. Never commit credentials or set a development environment to pretend it is production. Preview and local builds cannot send, even if inherited provider credentials exist. Before activation, verify the sender, recipient ownership and a durable Vercel edge rate limit. A controlled delivery test needs explicit authorization and must be excluded from business counts. No automatic subscriber enrollment or acknowledgement email is implemented.

Brian owns inquiry review and reply. Existing contact/firm records and suppression context are reconciled through the established commercial process; a form acceptance is not a qualified opportunity.

## Deployment and release

Use the existing `prime-elixir/catena-landing` Vercel project. Protected preview deployments are prepared directly with the CLI. Keep Vercel Standard Protection enabled and confirm access requires authentication or an explicitly authorized review bypass. Never commit bypass tokens. Non-production builds emit noindex metadata, a noindex header and a disallow-all robots file.

Public release requires approval of the exact pages, assets, redirects, inquiry behavior and test actions. Do not promote a preview build to production: build for the production environment so indexability and delivery configuration are evaluated correctly. Record the current production deployment before changing aliases, then verify the actual live routes and inbox receipt after release. Keep the prior deployment available for rollback.

Website publication is separate from the operating platform's production admission. No DNS, mail, old replay or unrelated project retirement is included in an ordinary website deployment.

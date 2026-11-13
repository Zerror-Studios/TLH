# Meta ads tracking — Pixel + Conversions API

Pixel: `756441694101905` ("TLH Pixel"). Next.js Pages Router.

## Event map

| User action | Meta event | Sent from | Optimise ads for it? |
|---|---|---|---|
| Booking drawer saved, city/pincode in `SERVICE_AREAS` | `Lead` | Server + browser (same `event_id`) | **Yes — customer campaigns** |
| Booking drawer saved, outside service area / "Other city" | `LeadOutsideServiceArea` (custom) | Server + browser | No (deliberately) |
| Booking drawer opened | `BookingFormOpened` (custom) | Browser | No — funnel signal |
| Any WhatsApp button | `Contact` | Browser + server relay | Secondary |
| Contact page form saved | `Contact` | Server + browser | Secondary |
| Store phone tap | `Contact` | Browser + server relay | Secondary |
| Store directions tap | `FindLocation` | Browser + server relay | Secondary |
| /services viewed | `ViewContent` | Browser + server relay | Retargeting |
| Franchise form saved | `SubmitApplication` | Server + browser | Franchise campaigns only |
| Every page | `PageView` | Base code in `_app.js` | — |

CTAs: **Book a Pickup / Book Now** (header, hero, service cards, about page) open the booking form;
**WhatsApp** buttons (header, contact page, inside the form, AiSensy widget) stay WhatsApp.

## Files

- `src/libs/meta/config.js` — services list, **service areas (cities + pincodes)**, allowed relay events
- `src/libs/meta/attribution.js` — utm_* / fbclid / gclid capture; `window.TLHTracking.get()`
- `src/libs/meta/client.js` — `trackMeta()`: the only way to fire a Meta event in the browser
- `src/libs/meta/capi.js` — Conversions API sender (hashing, IP/UA, fbp/fbc, 4 s timeout, never throws)
- `src/libs/googleSheets.js` — shared Sheets append (RAW)
- `src/pages/api/submitBooking.js` — saves bookings → Sheet + email → Meta
- `src/pages/api/meta-event.js` — server copy of click events (whitelist; refuses Lead)

## Setup before deploy

1. Google Sheet: use "TLH Website Leads" (`NEXT_PUBLIC_GOOGLE_SHEET_ID`). Data deletion requests stay in the old sheet via `NEXT_PUBLIC_DATA_DELETION_SHEET_ID`.
2. Vercel env vars (server-only, no `NEXT_PUBLIC_` prefix):
   - `NEXT_PUBLIC_META_CAPI_ACCESS_TOKEN` — Events Manager → TLH Pixel → Settings → Conversions API → Generate access token
   - `NEXT_PUBLIC_DATA_DELETION_SHEET_ID` — the old "TLH Form Submissions" sheet (has the Data Deletion Form tab)
   - `META_TEST_EVENT_CODE` — preview env only, while testing
3. Fill pincodes in `SERVICE_AREAS` (empty list = whole city accepted).
4. Google Ads: create a "Pickup booking" conversion and paste its `send_to` into `GOOGLE_ADS_BOOKING_SEND_TO` in `reportConversion.js`.

## Events Manager clean-up (same day as deploy)

1. Settings → **Event Setup Tool**: delete the codeless `Lead` / `Contact` / `FindLocation` events.
2. Settings → **Automatic events**: off (removes `SubscribedButtonClick` and the `gtm.*` noise).
3. Settings → **Conversions API / partner integrations**: find what sends server events today
   (likely the AiSensy integration) and disconnect it, or events double-count.
4. AiSensy dashboard: turn off any "Meta Pixel / Conversions" event firing for the website widget.
5. Vercel: redirect non-`www` → `www` (events currently arrive on both hosts).

## Test checklist (Events Manager → Test events)

- Page loads → only `PageView`
- Booking, Vadodara + valid pincode → one `Lead` (Browser + Server, deduplicated)
- Booking, "Other city" → `LeadOutsideServiceArea`, no `Lead`
- Same mobile + service twice → still one `Lead`
- WhatsApp tapped 3× quickly → one `Contact`
- Ad blocker on, submit booking → `Lead` arrives (server only)
- Contact form → `Contact`; franchise form → `SubmitApplication`
- Remove `META_TEST_EVENT_CODE` before production

## Privacy

Privacy policy should mention Meta Pixel + Conversions API and hashed contact details shared with Meta (DPDP Act 2023).

// src/pages/api/meta-event.js
// Server copy of click events (Contact / FindLocation / ViewContent) sent by trackMeta({ relay: true }).
// Lead / SubmitApplication are NOT accepted here — only the form routes send those, after the data
// is saved — so nobody can inflate your conversions by calling this URL.

import { RELAYABLE_EVENTS } from "@/libs/meta/config";
import { sendCapiEvent, isValidEventId, safeSourceUrl } from "@/libs/meta/capi";

export const config = { api: { bodyParser: { sizeLimit: "8kb" } } };

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  let b = req.body || {};
  if (typeof b === "string") {
    try { b = JSON.parse(b); } catch { return res.status(400).end(); }
  }

  const sourceUrl = safeSourceUrl(b.url);
  if (!RELAYABLE_EVENTS.includes(b.eventName) || !isValidEventId(b.eventId) || !sourceUrl) {
    return res.status(400).end();
  }

  // Forward only short, non-personal parameters.
  const params = {};
  if (b.params && typeof b.params === "object") {
    Object.entries(b.params).slice(0, 8).forEach(([k, v]) => {
      if (/^[a-z_]{1,40}$/.test(k) && (typeof v === "string" || typeof v === "number")) {
        params[k] = typeof v === "string" ? v.slice(0, 100) : v;
      }
    });
  }

  await sendCapiEvent({
    req,
    eventName: b.eventName,
    eventId: b.eventId,
    eventSourceUrl: sourceUrl,
    fbp: typeof b.fbp === "string" ? b.fbp : undefined,
    fbc: typeof b.fbc === "string" ? b.fbc : undefined,
    customData: params,
  });

  return res.status(204).end();
}

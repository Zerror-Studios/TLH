// src/libs/meta/client.js  (browser only)
// Every Meta event on the site goes through trackMeta(). Don't call window.fbq directly.
//
// NEVER put names, phone numbers or emails in `params` — Meta rejects personal data in
// event parameters. Personal data is sent hashed, server-side only (see capi.js).

import { getFbp, getFbc } from "./attribution";
import { META_PIXEL_ID } from "./config";

const lastFired = new Map();

export function newEventId(prefix = "evt") {
  const rand =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  return `${prefix}.${rand}`;
}

function clean(params) {
  const out = {};
  Object.entries(params || {}).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") out[k] = v;
  });
  return out;
}

function callFbq(method, name, params, eventId, attempt = 0) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq === "function") {
    window.fbq(method, name, params, { eventID: eventId });
  } else if (attempt < 3) {
    // Pixel script not ready yet (slow network / afterInteractive) — retry instead of dropping.
    setTimeout(() => callFbq(method, name, params, eventId, attempt + 1), 800);
  }
  // If the pixel never loads (ad blocker), the server copy still reaches Meta.
}

function relayToServer(name, params, eventId) {
  try {
    const body = JSON.stringify({
      eventName: name,
      eventId,
      params,
      url: window.location.href,
      fbp: getFbp(),
      fbc: getFbc(),
    });
    // sendBeacon survives window.open / page navigation.
    const sent =
      typeof navigator !== "undefined" &&
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon("/api/meta-event", new Blob([body], { type: "application/json" }));
    if (!sent) {
      fetch("/api/meta-event", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
    }
  } catch {
    /* tracking must never break the UI */
  }
}

/**
 * Fire a Meta event.
 * @param {string} name                 Standard event (Lead, Contact…) or custom name
 * @param {object} [params]             Non-personal parameters only
 * @param {object} [opts]
 * @param {string} [opts.eventId]       Reuse the server's id for forms (deduplication)
 * @param {boolean} [opts.custom]       fbq('trackCustom') for non-standard events
 * @param {boolean} [opts.relay]        Also send a server copy (click events only)
 * @param {string} [opts.dedupeKey]     Ignore repeats of the same action…
 * @param {number} [opts.throttleMs]    …within this window (default 2000ms)
 * @param {object} [opts.matchKeys]     Already-hashed customer info from our API (advanced matching)
 * @returns {string|null} event id, or null if throttled
 */
export function trackMeta(name, params = {}, opts = {}) {
  if (typeof window === "undefined") return null;

  if (opts.dedupeKey) {
    const now = Date.now();
    const prev = lastFired.get(opts.dedupeKey);
    if (prev && now - prev < (opts.throttleMs ?? 2000)) return null;
    lastFired.set(opts.dedupeKey, now);
  }

  const eventId = opts.eventId || newEventId(name.toLowerCase());
  const p = clean(params);
  // Manual advanced matching: re-init with the same hashed keys the server sent, so the
  // browser copy matches as well as the server copy. Values are SHA-256 hashes, never raw.
  if (opts.matchKeys && typeof window.fbq === "function") {
    window.fbq("init", META_PIXEL_ID, opts.matchKeys);
  }
  callFbq(opts.custom ? "trackCustom" : "track", name, p, eventId);
  if (opts.relay) relayToServer(name, p, eventId);
  return eventId;
}

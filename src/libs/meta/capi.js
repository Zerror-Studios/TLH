// src/libs/meta/capi.js  (SERVER ONLY — import only from src/pages/api/*)
// Meta Conversions API: a server copy of each event, merged with the browser pixel's copy
// because both carry the same event_id. Keeps tracking working with ad blockers and iOS.

import { createHash } from "crypto";
import { META_PIXEL_ID } from "./config";

// Check https://developers.facebook.com/docs/graph-api/changelog for the current version.
const GRAPH_VERSION = process.env.META_GRAPH_API_VERSION || "v27.0";
const TIMEOUT_MS = 4000;

const sha256 = (v) => createHash("sha256").update(String(v)).digest("hex");
const lower = (v) => (v ? String(v).trim().toLowerCase() : "");
// Meta: names, city, state → lowercase, no punctuation, no spaces (UTF-8 letters kept, e.g. "valéry").
const lettersOnly = (v) => lower(v).normalize("NFC").replace(/[^\p{L}\p{M}]/gu, "");

/** Indian mobile → "91XXXXXXXXXX", or "" if invalid. Accepts +91 / 91 / 0 prefixes, spaces, dashes. */
export function normalizeIndianMobile(raw) {
  let d = String(raw || "").replace(/\D/g, "");
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  return /^[6-9]\d{9}$/.test(d) ? `91${d}` : "";
}

export const isValidEmail = (v) => !!v && String(v).length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim());

export function splitName(full) {
  const parts = String(full || "").trim().split(/\s+/).filter(Boolean);
  return { first: parts[0] || "", last: parts.length > 1 ? parts[parts.length - 1] : "" };
}

export function getClientIp(req) {
  const xf = req.headers["x-forwarded-for"];
  const first = (Array.isArray(xf) ? xf[0] : xf || "").split(",")[0].trim();
  const real = req.headers["x-real-ip"];
  return first || (Array.isArray(real) ? real[0] : real) || req.socket?.remoteAddress || undefined;
}

/** Same person + same action on the same IST day → same id → Meta counts it once. */
export function stableEventId(prefix, ...parts) {
  const day = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
  return `${prefix}.${sha256([...parts, day].join("|")).slice(0, 32)}`;
}

export const isValidEventId = (v) => typeof v === "string" && /^[\w.-]{6,100}$/.test(v);

/**
 * Hashed match keys for the browser pixel (manual advanced matching), so the browser and
 * server copies of an event carry the same customer information, as Meta recommends.
 * Only for the person who just submitted the form — returned to their own browser.
 */
export function browserMatchKeys({ phone, email, firstName, lastName, city, state, zip }) {
  const keys = { country: sha256("in") };
  if (phone) { keys.ph = sha256(phone); keys.external_id = sha256(phone); }
  if (isValidEmail(email)) keys.em = sha256(lower(email));
  if (lettersOnly(firstName)) keys.fn = sha256(lettersOnly(firstName));
  if (lettersOnly(lastName)) keys.ln = sha256(lettersOnly(lastName));
  if (lettersOnly(city)) keys.ct = sha256(lettersOnly(city));
  if (lettersOnly(state)) keys.st = sha256(lettersOnly(state));
  if (zip && /^\d{6}$/.test(String(zip))) keys.zp = sha256(String(zip));
  return keys;
}

/** Only accept our own site's URLs as event_source_url. */
export function safeSourceUrl(v) {
  try {
    const u = new URL(String(v));
    return /(^|\.)thelaundryhouseindia\.com$/.test(u.hostname) ? u.toString().slice(0, 500) : undefined;
  } catch {
    return undefined;
  }
}

/** Trim a user string; "" if not a string. */
export const str = (v, max = 120) => (typeof v === "string" ? v.trim().replace(/\s+/g, " ").slice(0, max) : "");

/** Escape user input before putting it into notification-email HTML. */
export const escapeHtml = (v) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/**
 * Send one event to Meta. Never throws — tracking must never fail a form submission.
 * @param {object} e
 * @param {import('next').NextApiRequest} e.req
 * @param {string} e.eventName
 * @param {string} e.eventId
 * @param {string} [e.eventSourceUrl]
 * @param {{phone?:string,email?:string,firstName?:string,lastName?:string,city?:string,state?:string,zip?:string}} [e.user]
 * @param {string} [e.fbp]
 * @param {string} [e.fbc]
 * @param {object} [e.customData]
 */
export async function sendCapiEvent(e) {
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!token) {
    console.warn("[meta-capi] META_CAPI_ACCESS_TOKEN not set — skipped", e.eventName);
    return false;
  }

  const u = e.user || {};
  const h = (v) => [sha256(v)];
  const userData = {
    client_ip_address: getClientIp(e.req),
    client_user_agent: e.req.headers["user-agent"],
    country: h("in"),
  };
  if (u.phone) { userData.ph = h(u.phone); userData.external_id = h(u.phone); }
  if (isValidEmail(u.email)) userData.em = h(lower(u.email));
  if (lettersOnly(u.firstName)) userData.fn = h(lettersOnly(u.firstName));
  if (lettersOnly(u.lastName)) userData.ln = h(lettersOnly(u.lastName));
  if (lettersOnly(u.city)) userData.ct = h(lettersOnly(u.city));
  if (lettersOnly(u.state)) userData.st = h(lettersOnly(u.state));
  if (u.zip && /^\d{6}$/.test(String(u.zip))) userData.zp = h(String(u.zip));
  if (typeof e.fbp === "string" && /^fb\.\d\.\d+\.\d+/.test(e.fbp)) userData.fbp = e.fbp;
  if (typeof e.fbc === "string" && /^fb\.\d\.\d+\./.test(e.fbc)) userData.fbc = e.fbc.slice(0, 500);

  const customData = Object.fromEntries(
    Object.entries(e.customData || {}).filter(([, v]) => v !== undefined && v !== null && v !== ""),
  );

  const payload = {
    data: [
      {
        event_name: e.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: e.eventId,
        event_source_url: e.eventSourceUrl,
        action_source: "website",
        user_data: userData,
        ...(Object.keys(customData).length ? { custom_data: customData } : {}),
      },
    ],
  };
  if (process.env.META_TEST_EVENT_CODE) payload.test_event_code = process.env.META_TEST_EVENT_CODE;

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), signal: ctrl.signal },
    );
    if (!res.ok) {
      console.error("[meta-capi]", e.eventName, res.status, (await res.text()).slice(0, 500));
      return false;
    }
    return true;
  } catch (err) {
    console.error("[meta-capi]", e.eventName, err?.message);
    return false;
  } finally {
    clearTimeout(timer);
  }
}

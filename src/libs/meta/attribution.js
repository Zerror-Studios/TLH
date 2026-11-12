// src/libs/meta/attribution.js  (browser only)
// Remembers which ad / campaign brought the visitor, so every lead saved to the Sheet
// shows its source. Replaces the hand-written <head> attribution snippet and keeps its
// public API: window.TLHTracking.get().

const KEY = "tlh_attribution_v1";
const FIRST_KEY = "tlh_first_touch_v1";
const TTL_MS = 30 * 24 * 60 * 60 * 1000; // last-touch campaign remembered for 30 days
const CAMPAIGN_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"];

// Storage can throw (Safari private mode, blocked cookies) — never let that break the page.
const store = {
  get(k) {
    try { return JSON.parse(window.localStorage.getItem(k) || "null"); } catch { return null; }
  },
  set(k, v) {
    try { window.localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ }
  },
  remove(k) {
    try { window.localStorage.removeItem(k); } catch { /* ignore */ }
  },
};

export function readCookie(name) {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&") + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : "";
}

/**
 * Call on first load AND on every client-side route change.
 * - A tagged URL (any utm_* / fbclid / gclid) REPLACES the whole stored campaign as one set,
 *   so a later visit with only utm_source never inherits an older utm_campaign.
 * - First touch is written once and never overwritten.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  let url;
  try { url = new URL(window.location.href); } catch { return; }

  const now = Date.now();
  const found = {};
  CAMPAIGN_PARAMS.forEach((p) => {
    const v = url.searchParams.get(p);
    if (v) found[p] = v.slice(0, 200);
  });

  if (Object.keys(found).length) {
    store.set(KEY, { ...found, landing_page: url.pathname + url.search, captured_at: now });
  }

  if (!store.get(FIRST_KEY)) {
    store.set(FIRST_KEY, { first_landing_page: url.pathname + url.search, first_touch_time: new Date(now).toISOString() });
  }

  const current = store.get(KEY);
  if (current) store.set(KEY, { ...current, last_page: url.pathname });
}

/** Current campaign info (empty object if none / expired). */
export function getAttribution() {
  if (typeof window === "undefined") return {};
  const a = store.get(KEY);
  if (!a || !a.captured_at || Date.now() - a.captured_at > TTL_MS) {
    if (a) store.remove(KEY);
    return {};
  }
  return a;
}

export function getFirstTouch() {
  return (typeof window !== "undefined" && store.get(FIRST_KEY)) || {};
}

/** Meta browser id (cookie set by the pixel). */
export const getFbp = () => readCookie("_fbp");

/** Meta click id. Falls back to the stored fbclid when the pixel cookie is missing. */
export function getFbc() {
  const c = readCookie("_fbc");
  if (c) return c;
  const a = getAttribution();
  return a.fbclid ? `fb.1.${a.captured_at || Date.now()}.${a.fbclid}` : "";
}

/** Backward-compatible global used by the earlier <head> snippet. */
export function exposeGlobal() {
  if (typeof window === "undefined") return;
  window.TLHTracking = {
    get() {
      const a = getAttribution();
      const f = getFirstTouch();
      return {
        utm_source: a.utm_source || "",
        utm_medium: a.utm_medium || "",
        utm_campaign: a.utm_campaign || "",
        utm_content: a.utm_content || "",
        utm_term: a.utm_term || "",
        fbclid: a.fbclid || "",
        gclid: a.gclid || "",
        fbp: getFbp(),
        fbc: getFbc(),
        first_landing_page: f.first_landing_page || "",
        first_touch_time: f.first_touch_time || "",
        last_page: window.location.pathname,
      };
    },
  };
}

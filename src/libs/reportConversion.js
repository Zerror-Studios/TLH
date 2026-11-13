import { trackMeta } from "@/libs/meta/client";

/**
 * Every WhatsApp button. Meta: "Contact" (not "Lead" — a WhatsApp tap captures no details).
 * Google Ads: unchanged conversion label.
 * @param {string} url      WhatsApp link
 * @param {string} [source] which button, e.g. "header", "contact_page" (shows up in Meta reports)
 */
export const whatsappReportConversion = (url, source = "whatsapp_button") => {
  if (typeof window === "undefined") return;

  // Meta — repeat taps within 30s count once.
  trackMeta(
    "Contact",
    { content_name: "WhatsApp", content_category: source },
    { relay: true, dedupeKey: "contact:whatsapp", throttleMs: 30000 },
  );

  // Google Ads (non-blocking with beacon transport)
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17387356943/rKh4COf0ifMbEI-G-OJA",
      transport: "beacon",
    });
  }

  // Open WhatsApp synchronously inside the click so popup blockers allow it.
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

/**
 * Google Ads conversion for a successful pickup booking.
 * TODO: create a "Pickup booking" conversion action in Google Ads and paste its send_to here.
 * Until then nothing is sent, so Google Ads isn't fed the wrong conversion.
 */
const GOOGLE_ADS_BOOKING_SEND_TO = ""; // e.g. "AW-17387356943/xxxxxxxxxxxx"

export const reportBookingConversion = (eventId) => {
  if (typeof window === "undefined" || !GOOGLE_ADS_BOOKING_SEND_TO) return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_BOOKING_SEND_TO,
      transaction_id: eventId, // stops Google Ads double-counting a resubmission
      transport: "beacon",
    });
  }
};

export const reportGoogleAdsConversion = (url) => {
  if (typeof window === 'undefined') return;

  let done = false;
  const callback = () => {
    if (done) return;
    done = true;
    if (url) {
      window.location.href = url;
    }
  };

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17387356943/nv18CNPfp-0cEIG-OJA',
      value: 1.0,
      currency: 'INR',
      event_callback: callback,
    });
    // If gtag is blocked/slow, still move the user on.
    setTimeout(callback, 1500);
  } else if (url) {
    window.location.href = url;
  }
};

export const reportConversion = (url) => {
  if (typeof window === "undefined") return;

  // Fire conversion first (non-blocking)
  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17387356943/rKh4COf0ifMbEI-G-OJA",
    });
  }

  // Open WhatsApp immediately (user gesture preserved)
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};
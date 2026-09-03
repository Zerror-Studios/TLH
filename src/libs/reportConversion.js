export const whatsappReportConversion = (url) => {
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


export const franchiseReportConversion = (url) => {
  if (typeof window === "undefined") return false;

  const callback = function () {
    if (typeof url !== "undefined") {
      window.location = url;
    }
  };

  if (window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17387356943/nv18CNPfp-0cEI-G-OJA",
      value: 1.0,
      currency: "INR",
      event_callback: callback,
    });
  } else {
    callback();
  }
  return false;
};



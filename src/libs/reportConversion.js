export const whatsappReportConversion = (url) => {
  if (typeof window === "undefined") return;

  // Fire conversion first (non-blocking with beacon transport)
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17387356943/rKh4COf0ifMbEI-G-OJA",
      transport: "beacon",
    });
  } else if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push("event", "conversion", {
      send_to: "AW-17387356943/rKh4COf0ifMbEI-G-OJA",
      transport: "beacon",
    });
  }

  // Open WhatsApp immediately (user gesture preserved)
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};


export const reportGoogleAdsConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17387356943/nv18CNPfp-0cEI-G-OJA',
      value: 1.0,
      currency: 'INR',
    });

    console.log('Google Ads conversion triggered');
  } else {
    console.warn('Google gtag is not available');
  }
};




// src/libs/meta/config.js
// Single source of truth for Meta (Facebook/Instagram) ads tracking. Shared by browser and API routes.

export const META_PIXEL_ID = "756441694101905";

/* ------------------------------------------------------------------ *
 * Services shown in the "Book a Pickup" drawer.
 * `id` is validated server-side and sent to Meta — keep it stable.
 * ------------------------------------------------------------------ */
export const BOOKING_SERVICES = [
  { id: "luxury-dry-cleaning", title: "Luxury Dry Cleaning", description: "Premium care for delicate garments", category: "Garment Care" },
  { id: "wet-cleaning", title: "Professional Wet Cleaning", description: "Gentle, eco-friendly deep cleaning", category: "Garment Care" },
  { id: "steam-finishing", title: "Luxury Steam Finishing", description: "Crisp, professional steam pressing", category: "Garment Care" },
  { id: "wedding-couture", title: "Wedding Couture", description: "Bridal and couture wear care", category: "Garment Care" },
  { id: "shoe-spa", title: "Shoe Spa", description: "Cleaning & restoration for sneakers and shoes", category: "Accessories Care" },
  { id: "bag-spa", title: "Bag Spa", description: "Cleaning & restoration for handbags", category: "Accessories Care" },
  { id: "curtain-care", title: "Curtain Care", description: "Curtains and drapes", category: "Home Care" },
  { id: "carpet-care", title: "Carpet Care", description: "Carpets and rugs", category: "Home Care" },
  { id: "sofa-upholstery", title: "Sofa & Upholstery Care", description: "Sofas and upholstered furniture", category: "Home Care" },
];

/* ------------------------------------------------------------------ *
 * SERVICE AREAS — keep this in sync with the locations targeted in Meta ads.
 *
 * `pincodes`: leave EMPTY to accept the whole city. Otherwise list the pincodes
 * (or prefixes, e.g. "3900" = 390001–390099) you actually pick up from.
 * A booking outside these areas is still saved to the Sheet, but is sent to Meta as
 * the custom event "LeadOutsideServiceArea" — never as "Lead" — so ads don't learn
 * to find people you can't serve.
 * ------------------------------------------------------------------ */
export const SERVICE_AREAS = [
  { city: "Ahmedabad", state: "Gujarat", pincodes: [] },
  { city: "Bangalore", state: "Karnataka", pincodes: [] },
  { city: "Bikaner", state: "Rajasthan", pincodes: [] },
  { city: "Delhi", state: "Delhi", pincodes: [] },
  { city: "Greater Noida", state: "Uttar Pradesh", pincodes: [] },
  { city: "Gurugram", state: "Haryana", pincodes: [] },
  { city: "Hyderabad", state: "Telangana", pincodes: [] },
  { city: "Jaipur", state: "Rajasthan", pincodes: [] },
  { city: "Noida", state: "Uttar Pradesh", pincodes: [] },
  { city: "Surat", state: "Gujarat", pincodes: [] },
  { city: "Vadodara", state: "Gujarat", pincodes: [] },
];

export const OTHER_CITY = "Other city";

/** Valid Indian PIN: 6 digits, first digit 1–9. */
export const isValidPincode = (pin) => /^[1-9]\d{5}$/.test(String(pin || "").trim());

/**
 * Is this booking inside an area we serve (and target in ads)?
 * @returns {{ serviceable: boolean, area: object|null }}
 */
export function checkServiceArea(city, pincode) {
  const area = SERVICE_AREAS.find((a) => a.city === city) || null;
  if (!area) return { serviceable: false, area: null };
  if (!area.pincodes.length) return { serviceable: true, area };
  const pin = String(pincode || "").trim();
  return { serviceable: area.pincodes.some((p) => pin.startsWith(String(p))), area };
}

/** Click events the browser may relay to /api/meta-event. Form events are sent only by their own API routes. */
export const RELAYABLE_EVENTS = ["Contact", "FindLocation", "ViewContent"];

export const WHATSAPP_URL = "https://wa.aisensy.com/aabkdo";

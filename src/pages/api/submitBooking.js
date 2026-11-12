// src/pages/api/submitBooking.js
// Saves a "Book a Pickup" request, emails the team, then tells Meta.
//
// One-time setup: add a tab named "Bookings" to the existing Google Sheet with this header row:
// Timestamp (IST) | Name | Mobile | Service | City | Pincode | State | Serviceable | Meta Event | Event ID |
// Booking Source | utm_source | utm_medium | utm_campaign | utm_content | utm_term | fbclid | gclid |
// Landing Page | First Landing Page | Status
//
// "Status" is for the team (New / Picked up / Not reachable / Junk / Out of area) — it is
// the lead-quality record per campaign, and later the feedback loop to Meta.

import nodemailer from "nodemailer";
import { BOOKING_SERVICES, OTHER_CITY, checkServiceArea, isValidPincode } from "@/libs/meta/config";
import { normalizeIndianMobile, splitName, stableEventId, sendCapiEvent, safeSourceUrl, str, escapeHtml, browserMatchKeys } from "@/libs/meta/capi";
import { appendRow, nowIST } from "@/libs/googleSheets";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const b = req.body && typeof req.body === "object" ? req.body : {};

  // Honeypot: humans never see or fill "website". Pretend success; save nothing, track nothing.
  if (str(b.website)) return res.status(200).json({ ok: true, metaEvent: null });

  const name = str(b.name, 80);
  const phone = normalizeIndianMobile(b.phone);
  const service = BOOKING_SERVICES.find((s) => s.id === b.serviceId);
  const citySelected = str(b.city, 60);
  const otherCity = str(b.otherCity, 60);
  const pincode = str(b.pincode, 6);

  if (name.length < 2 || !/\p{L}/u.test(name)) return res.status(400).json({ error: "Please enter your full name." });
  if (!phone) return res.status(400).json({ error: "Please enter a valid 10-digit mobile number." });
  if (!service) return res.status(400).json({ error: "Please select a service." });
  if (!citySelected || (citySelected === OTHER_CITY && otherCity.length < 2)) {
    return res.status(400).json({ error: "Please select your city." });
  }
  if (!isValidPincode(pincode)) return res.status(400).json({ error: "Please enter a valid 6-digit pincode." });

  const isOther = citySelected === OTHER_CITY;
  const city = isOther ? otherCity : citySelected;
  const { serviceable, area } = isOther ? { serviceable: false, area: null } : checkServiceArea(citySelected, pincode);
  const state = area?.state || "";

  // Only bookings we can actually serve count as "Lead" — this is what teaches Meta the right clientele.
  const metaEvent = serviceable ? "Lead" : "LeadOutsideServiceArea";
  // Same mobile + service on the same day → same id → a repeat submission is counted once by Meta.
  const eventId = stableEventId("lead", phone, service.id);

  const a = b.attribution && typeof b.attribution === "object" ? b.attribution : {};
  const first = b.firstTouch && typeof b.firstTouch === "object" ? b.firstTouch : {};

  try {
    await appendRow("Bookings", [
      nowIST(), name, `+${phone}`, service.title, city, pincode, state,
      serviceable ? "Yes" : "No", metaEvent, eventId, str(b.source, 40),
      str(a.utm_source), str(a.utm_medium), str(a.utm_campaign), str(a.utm_content), str(a.utm_term),
      str(a.fbclid, 300), str(a.gclid, 300), str(a.landing_page, 300), str(first.first_landing_page, 300),
      "New",
    ]);
  } catch (err) {
    console.error("❌ Booking sheet error:", err);
    // Never report a lead to Meta that we didn't actually capture.
    return res.status(500).json({ error: "We couldn't save your booking. Please try again or message us on WhatsApp." });
  }

  // Team notification — a failure here must not lose the (already saved) booking.
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.NEXT_PUBLIC_EMAIL_USER, pass: process.env.NEXT_PUBLIC_EMAIL_PASS },
    });
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      subject: `${serviceable ? "New pickup booking" : "Booking outside service area"} — ${service.title}, ${city}`,
      html: `
        <h2>${serviceable ? "New pickup booking" : "Booking outside service area"}</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Mobile:</b> +${escapeHtml(phone)}</p>
        <p><b>Service:</b> ${escapeHtml(service.title)}</p>
        <p><b>City / Pincode:</b> ${escapeHtml(city)} — ${escapeHtml(pincode)}</p>
        <p><b>Campaign:</b> ${escapeHtml(a.utm_campaign || a.utm_source || "Direct / organic")}</p>
      `,
    });
  } catch (err) {
    console.error("⚠️ Booking email failed (booking was saved):", err?.message);
  }

  const n = splitName(name);
  const user = { phone, firstName: n.first, lastName: n.last, city, state, zip: pincode };
  await sendCapiEvent({
    req,
    eventName: metaEvent,
    eventId,
    eventSourceUrl: safeSourceUrl(b.pageUrl),
    user,
    fbp: str(b.fbp, 200),
    fbc: str(b.fbc, 500),
    customData: { content_name: service.title, content_category: service.category, lead_type: "pickup_booking" },
  });

  return res.status(200).json({ ok: true, metaEvent, eventId, serviceable, matchKeys: browserMatchKeys(user) });
}

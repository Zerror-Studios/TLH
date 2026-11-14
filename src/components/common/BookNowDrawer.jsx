import React, { useState } from "react";
import { useBookDrawer } from "@/store/useBookDrawer";
import CustomSelect from "./CustomSelect";
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react";
import ArrowButton from "../Buttons/ArrowButton";
import { toast } from "react-toastify";
import { BOOKING_SERVICES, SERVICE_AREAS, OTHER_CITY, WHATSAPP_URL, isValidPincode } from "@/libs/meta/config";
import { trackMeta } from "@/libs/meta/client";
import { getAttribution, getFirstTouch, getFbp, getFbc } from "@/libs/meta/attribution";
import { whatsappReportConversion, reportBookingConversion } from "@/libs/reportConversion";

const CITY_OPTIONS = [...SERVICE_AREAS.map((a) => a.city), OTHER_CITY];

const EMPTY = { name: "", phone: "", service: null, serviceOpen: false, city: "", otherCity: "", pincode: "", website: "" };

const inputClass = "w-full border-b outline-none font-medium border-black/30 pb-2 bg-transparent";

const BookNowDrawer = () => {
  const { isOpen, closeDrawer, source } = useBookDrawer();
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Digits only for phone / pincode
  const handleDigits = (max) => (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value.replace(/[^\d+\s-]/g, "").slice(0, max) }));
  };

  const handleBook = async () => {
    if (submitting) return; // double-tap guard

    const { name, phone, service, city, otherCity, pincode, website } = form;

    if (!name.trim() || !phone.trim() || !service || !city || !pincode.trim() || (city === OTHER_CITY && !otherCity.trim())) {
      toast("Please fill all fields");
      return;
    }
    const digits = phone.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
    if (!/^[6-9]\d{9}$/.test(digits)) {
      toast("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!isValidPincode(pincode)) {
      toast("Please enter a valid 6-digit pincode");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/submitBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, phone, serviceId: service.id, city, otherCity, pincode, website,
          source,
          fbp: getFbp(), fbc: getFbc(),
          attribution: getAttribution(), firstTouch: getFirstTouch(),
          pageUrl: window.location.href,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");

      // Browser copy — same event id as the server copy, so Meta counts it once.
      if (data.metaEvent) {
        trackMeta(
          data.metaEvent,
          { content_name: service.title, content_category: service.category },
          { eventId: data.eventId, custom: data.metaEvent !== "Lead", matchKeys: data.matchKeys },
        );
        if (data.metaEvent === "Lead") reportBookingConversion(data.eventId);
      }

      toast.success(
        data.serviceable === false
          ? "Thank you! We're not in your area yet — our team will get in touch with the nearest option."
          : "Booking received! Our team will call you shortly to confirm your pickup.",
      );
      setForm(EMPTY);
      closeDrawer();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300 z-[998]
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-drawer-title"
        aria-hidden={!isOpen}
        className={`fixed z-[99999] bg-[#FFFAF0] shadow-xl transition-transform duration-300
          w-full md:w-[50vw] lg:w-[30vw]
          h-[100dvh] md:h-full
          top-0 right-0
          ${isOpen
            ? "translate-x-0 translate-y-0"
            : "translate-x-full translate-y-full md:translate-y-0"
          }
        `}
      >
        <form
          noValidate
          onSubmit={(e) => { e.preventDefault(); handleBook(); }}
          data-lenis-prevent
          className="p-6 lg:p-10 h-full flex flex-col overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 id="book-drawer-title" className=" text-2xl lg:text-4xl ">Book a Pickup</h1>
            <button type="button" aria-label="Close" onClick={closeDrawer} className="text-2xl leading-none">
              <RiCloseLine />
            </button>
          </div>

          {/* Honeypot — invisible to people, bots fill it */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={form.website}
            onChange={handleChange}
            style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
          />

          <div className="space-y-4 flex-1">
            {/* Name */}
            <div>
              <label htmlFor="book-name" className="block text-sm  mb-1">Full Name</label>
              <input
                id="book-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                maxLength={80}
                className={inputClass}
              />
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="book-phone" className="block text-sm  mb-1">Mobile Number</label>
              <input
                id="book-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                value={form.phone}
                onChange={handleDigits(14)}
                placeholder="10-digit mobile number"
                className={inputClass}
              />
            </div>

            {/* Service */}
            <div className="relative">
              <label className="block text-sm  mb-1">Service</label>
              <button
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, serviceOpen: !prev.serviceOpen }))}
                className="w-full border-b border-black/30  pb-2 bg-[#fffaf0] flex justify-between items-center text-left"
              >
                {form.service ? (
                  <div>
                    <p className="text-sm font-medium">{form.service.title}</p>
                    <p className="text-xs opacity-70">{form.service.description}</p>
                  </div>
                ) : (
                  <p className="opacity-55 font-medium ">Select service</p>
                )}
                <span className={`ml-2 transition-transform ${form.serviceOpen ? "rotate-180" : ""}`}>
                  <RiArrowDownSLine />
                </span>
              </button>

              {form.serviceOpen && (
                <div data-lenis-prevent className="absolute max-h-52 overflow-auto custom_scrollbar mt-1 w-full bg-[#fffaf0] border border-black/30  shadow-lg z-[9999]">
                  {BOOKING_SERVICES.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setForm((prev) => ({ ...prev, service: item, serviceOpen: false }))}
                      className={`p-3 cursor-pointer hover:bg-black/5 ${form.service?.id === item.id ? "bg-black/10" : ""}`}
                    >
                      <p className="text-sm ">{item.title}</p>
                      <p className="text-xs opacity-70">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* City */}
            <CustomSelect
              label="City"
              name="city"
              value={form.city}
              options={CITY_OPTIONS}
              placeholder="Select city"
              onChange={handleChange}
            />

            {form.city === OTHER_CITY && (
              <div>
                <label htmlFor="book-other-city" className="block text-sm  mb-1">Your City</label>
                <input
                  id="book-other-city"
                  name="otherCity"
                  autoComplete="address-level2"
                  value={form.otherCity}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  maxLength={60}
                  className={inputClass}
                />
              </div>
            )}

            {/* Pincode */}
            <div>
              <label htmlFor="book-pincode" className="block text-sm  mb-1">Pincode</label>
              <input
                id="book-pincode"
                name="pincode"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                value={form.pincode}
                onChange={handleDigits(6)}
                placeholder="6-digit pincode"
                className={inputClass}
              />
            </div>
          </div>

          <div className={`mt-6 ${submitting ? "pointer-events-none opacity-60" : ""}`}>
            <ArrowButton type="submit" label={submitting ? "Booking…" : "Book Now"} variant="dark" />
          </div>

          <div className="w-full center flex-col gap-2 text-xs mt-3">
            <button
              type="button"
              onClick={() => whatsappReportConversion(WHATSAPP_URL, "booking_drawer")}
              className="underline"
            >
              Prefer WhatsApp? Chat with us
            </button>
            <p>All Terms & Conditions Apply</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookNowDrawer;

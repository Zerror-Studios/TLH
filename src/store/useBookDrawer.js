import { create } from "zustand";
import { trackMeta } from "@/libs/meta/client";

export const useBookDrawer = create((set) => ({
  isOpen: false,
  source: "",

  /**
   * @param {string|object} [source] which button opened it, e.g. "hero", "header".
   *   (Accepts a click event too, so existing `onClick={openDrawer}` keeps working.)
   */
  openDrawer: (source) =>
    set(() => {
      window.lenis?.stop();
      const src = typeof source === "string" ? source : "unknown";
      // Funnel signal only (custom event, browser only) — not used for ad optimisation.
      trackMeta("BookingFormOpened", { content_category: src }, { custom: true, dedupeKey: "open-drawer", throttleMs: 5000 });
      return { isOpen: true, source: src };
    }),

  closeDrawer: () =>
    set(() => {
      window.lenis?.start();
      return { isOpen: false };
    }),
}));

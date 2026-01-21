import { create } from "zustand";

export const useBookDrawer = create((set) => ({
  isOpen: false,

  openDrawer: () =>
    set(() => {
      window.lenis?.stop();
      return { isOpen: true };
    }),

  closeDrawer: () =>
    set(() => {
      window.lenis?.start();
      return { isOpen: false };
    }),
}));

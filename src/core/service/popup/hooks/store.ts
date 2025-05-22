"use client";

import { create } from "zustand";

import { AppPopup } from "../types";

type PopupsState = {
  popups: AppPopup[];

  /**
   * Add new popup to the end of the popups list
   * @param popup The popup to add
   */
  push: (popup: AppPopup) => void;

  /**
   * Remove the last added popup from the popups list
   */
  pop: () => AppPopup | null;
};

export const usePopupStore = create<PopupsState>((set) => ({
  popups: [],

  push(popup) {
    set((state) => ({ popups: [...state.popups, popup] }));
  },
  pop() {
    let popup: AppPopup | null = null;

    set((state) => {
      const newPopups = [...state.popups];
      popup = newPopups.pop() ?? null;

      return { popups: newPopups };
    });

    return popup;
  },
}));

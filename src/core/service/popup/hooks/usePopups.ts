"use client";

import { usePopupStore } from "./store";

export function usePopups() {
  const popups = usePopupStore((state) => state.popups);
  return popups;
}

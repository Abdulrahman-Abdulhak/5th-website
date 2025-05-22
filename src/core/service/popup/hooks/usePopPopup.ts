"use client";

import { usePopupStore } from "./store";

export function usePopPopup() {
  const popPopup = usePopupStore((state) => state.pop);
  return popPopup;
}

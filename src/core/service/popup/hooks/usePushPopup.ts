"use client";

import { usePopupStore } from "./store";

export function usePushPopup() {
  const pushPopup = usePopupStore((state) => state.push);
  return pushPopup;
}

"use client";

import { useNotificationStore } from "./store";

export function usePushNotification() {
  const pushNotification = useNotificationStore((state) => state.push);
  return pushNotification;
}

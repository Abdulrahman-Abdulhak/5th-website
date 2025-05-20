"use client";

import { useNotificationStore } from "./store";

export function useNotifications() {
  const notifications = useNotificationStore((state) => state.notifications);
  return notifications;
}

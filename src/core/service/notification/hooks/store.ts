"use client";

import { create } from "zustand";

import { AppNotification } from "../types";

type NotificationsState = {
  notifications: AppNotification[];

  /**
   * Add new notification to the end of the notifications list
   * @param notification The notification to add
   */
  push: (notification: AppNotification) => void;

  /**
   * Remove the last added notification from the notifications list
   */
  pop: () => AppNotification | null;
};

export const useNotificationStore = create<NotificationsState>((set) => ({
  notifications: [],

  push(notification) {
    set((state) => ({ notifications: [...state.notifications, notification] }));
  },
  pop() {
    let notification: AppNotification | null = null;

    set((state) => {
      const newNotifications = [...state.notifications];
      notification = newNotifications.pop() ?? null;

      return { notifications: newNotifications };
    });

    return notification;
  },
}));

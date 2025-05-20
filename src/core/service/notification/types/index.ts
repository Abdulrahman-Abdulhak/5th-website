import React from "react";

export type AppNotificationTypes = "error" | "warning" | "success" | "info";

export type AppNotification = {
  id: number | string;
  type: AppNotificationTypes;
  content: string | React.ReactNode;
};

export type NotificationProps = {
  notification: AppNotification;
};

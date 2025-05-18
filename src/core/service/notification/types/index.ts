import React from "react";

export enum AppNotificationTypes {
  error = "error",
  warning = "warning",
  success = "success",
  info = "info",
}

export type AppNotification = {
  id: number | string;
  type: AppNotificationTypes;
  content: string | React.ReactNode;
};

export type NotificationProps = {
  notification: AppNotification;
};

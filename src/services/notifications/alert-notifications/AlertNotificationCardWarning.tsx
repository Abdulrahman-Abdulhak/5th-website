import React from "react";

import { NotificationProps } from "@/core";

import AlertNotificationCard from "./AlertNotificationCard";

function AlertNotificationCardWarning({ notification }: NotificationProps) {
  return (
    <AlertNotificationCard
      notification={notification}
      icon="Warn"
      className="bg-state-warning-50 text-state-warning-500"
    />
  );
}

export default AlertNotificationCardWarning;

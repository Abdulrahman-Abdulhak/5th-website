import React from "react";

import { NotificationProps } from "@/core";

import AlertNotificationCard from "./AlertNotificationCard";

function AlertNotificationCardError({ notification }: NotificationProps) {
  return (
    <AlertNotificationCard
      notification={notification}
      icon="Err"
      className="bg-state-error-50 text-state-error-500"
    />
  );
}
export default AlertNotificationCardError;

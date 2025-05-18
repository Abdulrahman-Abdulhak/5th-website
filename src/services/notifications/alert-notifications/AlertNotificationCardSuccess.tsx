import React from "react";

import { NotificationProps } from "@/core";

import AlertNotificationCard from "./AlertNotificationCard";

function AlertNotificationCardSuccess({ notification }: NotificationProps) {
  return (
    <AlertNotificationCard
      notification={notification}
      icon="Success"
      className="bg-state-success-50 text-state-success-500"
    />
  );
}
export default AlertNotificationCardSuccess;

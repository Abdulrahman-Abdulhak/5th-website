import React from "react";

import { Icon, NotificationProps } from "@/core";

import AlertNotificationCard from "./AlertNotificationCard";

function AlertNotificationCardSuccess({ notification }: NotificationProps) {
  return (
    <AlertNotificationCard
      notification={notification}
      className="bg-state-success-50 text-state-success-500"
      icon={<Icon icon="check-one-outline" className="size-9" />}
    />
  );
}
export default AlertNotificationCardSuccess;

import React from "react";

import { Icon, NotificationProps } from "@/core";

import AlertNotificationCard from "./AlertNotificationCard";

function AlertNotificationCardError({ notification }: NotificationProps) {
  return (
    <AlertNotificationCard
      notification={notification}
      className="bg-state-error-50 text-state-error-500"
      icon={<Icon icon="cloud-error" className="size-9" />}
    />
  );
}
export default AlertNotificationCardError;

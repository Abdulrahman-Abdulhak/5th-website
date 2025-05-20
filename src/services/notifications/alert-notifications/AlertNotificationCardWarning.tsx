import React from "react";

import { Icon, NotificationProps } from "@/core";

import AlertNotificationCard from "./AlertNotificationCard";

function AlertNotificationCardWarning({ notification }: NotificationProps) {
  return (
    <AlertNotificationCard
      notification={notification}
      className="bg-state-warning-50 text-state-warning-500"
      icon={<Icon icon="warning-outline" className="size-9" />}
    />
  );
}

export default AlertNotificationCardWarning;

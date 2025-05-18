import React from "react";

import { NotificationProps } from "@/core";

import AlertNotificationCard from "./AlertNotificationCard";

function AlertNotificationCardInfo({ notification }: NotificationProps) {
  return (
    <AlertNotificationCard
      notification={notification}
      icon="Info"
      className="bg-state-neutral-50 text-state-neutral-900"
    />
  );
}

export default AlertNotificationCardInfo;

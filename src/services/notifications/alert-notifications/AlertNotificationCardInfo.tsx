import React from "react";

import { Icon, NotificationProps } from "@/core";

import AlertNotificationCard from "./AlertNotificationCard";

function AlertNotificationCardInfo({ notification }: NotificationProps) {
  return (
    <AlertNotificationCard
      notification={notification}
      className="bg-state-neutral-50 text-state-neutral-900"
      icon={<Icon icon="info" className="size-9" />}
    />
  );
}

export default AlertNotificationCardInfo;

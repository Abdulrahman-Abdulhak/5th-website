"use client";

import React from "react";

import { AppNotificationTypes, NotificationProps } from "@/core";

import AlertNotificationCardInfo from "./AlertNotificationCardInfo";
import AlertNotificationCardWarning from "./AlertNotificationCardWarning";
import AlertNotificationCardError from "./AlertNotificationCardError";
import AlertNotificationCardSuccess from "./AlertNotificationCardSuccess";

function AlertNotificationCardSelect({
  notification,
}: NotificationProps) {
  switch (notification.type) {
    case AppNotificationTypes.info:
      return <AlertNotificationCardInfo notification={notification} />;
    case AppNotificationTypes.warning:
      return <AlertNotificationCardWarning notification={notification} />;
    case AppNotificationTypes.error:
      return <AlertNotificationCardError notification={notification} />;
    case AppNotificationTypes.success:
      return <AlertNotificationCardSuccess notification={notification} />;
  }
}

export default AlertNotificationCardSelect;

"use client";

import { AppNotificationTypes, usePushNotification } from "@/core";
import { useEffect } from "react";

export default function Home() {
  const pushNotification = usePushNotification();

  useEffect(() => {
    pushNotification({
      id: 0,
      content: "Notification Test",
      type: AppNotificationTypes.error,
    });
    pushNotification({
      id: 1,
      content: "Notification Test",
      type: AppNotificationTypes.info,
    });
    pushNotification({
      id: 2,
      content: "Notification Test",
      type: AppNotificationTypes.success,
    });
    pushNotification({
      id: 3,
      content: "Notification Test",
      type: AppNotificationTypes.warning,
    });
  }, []);

  return <div>Testing</div>;
}

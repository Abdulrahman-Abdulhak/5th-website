"use client";

import { Icon, usePushNotification } from "@/core";
import { useEffect } from "react";

export default function Home() {
  const pushNotification = usePushNotification();

  useEffect(() => {
    pushNotification({
      id: 0,
      type: "error",
      content: "Error Notification",
    });
  }, []);

  return <Icon icon="cloud-error" className="size-20" />;
}

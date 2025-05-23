"use client";

import React from "react";

import DefaultNotificationCard from "./DefaultNotificationCard";
import { useNotifications } from "../hooks";
import { NotificationProps } from "../types";

type Props = {
  NotificationDisplayer?: React.FC<NotificationProps>;
};

function NotificationBoard({
  NotificationDisplayer = DefaultNotificationCard,
}: Props) {
  const notifications = useNotifications();

  return (
    <div className="w-0 h-0">
      {notifications.map((notification) => (
        <NotificationDisplayer
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default NotificationBoard;

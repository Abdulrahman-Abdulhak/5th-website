import React from "react";
import classNames from "classnames";

import { NotificationProps } from "@/core";
import { PropsReact } from "@/core/types";

type Props = PropsReact<
  {
    icon?: React.ReactNode;
  } & NotificationProps
>;

function AlertNotificationCard({
  notification,
  icon,
  className,
  style,
}: Props) {
  return (
    <div
      className={classNames(
        "absolute flex items-center gap-2.5 rounded-lg px-8 py-4",
        className
      )}
      style={style}
    >
      {icon}
      {notification.content}
    </div>
  );
}

export default AlertNotificationCard;

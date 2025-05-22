import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";
import { NotificationProps } from "../types";

type Props = PropsReact<NotificationProps>;

function DefaultNotificationCard({ notification, className, style }: Props) {
  return (
    <div className={classNames(className)} style={style}>
      {notification.content}
    </div>
  );
}

export default DefaultNotificationCard;

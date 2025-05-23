import React from "react";

import { PopupProps } from "@/core";
import { NotificationBadge } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardPermission({ popup }: PopupProps) {
  return <PopupCard popup={popup} badge={<NotificationBadge />} />;
}

export default PopupCardPermission;

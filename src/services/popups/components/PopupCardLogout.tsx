import React from "react";

import { PopupProps } from "@/core";
import { LogoutBadge } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardLogout({ popup }: PopupProps) {
  return <PopupCard popup={popup} badge={<LogoutBadge />} />;
}

export default PopupCardLogout;

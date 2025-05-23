import React from "react";

import { PopupProps } from "@/core";
import { WarningBadge } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardDanger({ popup }: PopupProps) {
  return <PopupCard popup={popup} badge={<WarningBadge />} />;
}

export default PopupCardDanger;

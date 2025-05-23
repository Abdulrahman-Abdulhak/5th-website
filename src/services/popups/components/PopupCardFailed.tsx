import React from "react";

import { PopupProps } from "@/core";
import { ErrorBadge } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardFailed({ popup }: PopupProps) {
  return <PopupCard popup={popup} badge={<ErrorBadge />} />;
}

export default PopupCardFailed;

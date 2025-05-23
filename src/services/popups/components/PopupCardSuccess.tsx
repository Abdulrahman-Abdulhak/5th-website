import React from "react";

import { PopupProps } from "@/core";
import { SuccessBadge } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardSuccess({ popup }: PopupProps) {
  return <PopupCard popup={popup} badge={<SuccessBadge />} />;
}

export default PopupCardSuccess;

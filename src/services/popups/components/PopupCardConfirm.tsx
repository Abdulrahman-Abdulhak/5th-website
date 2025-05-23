import React from "react";

import { PopupProps } from "@/core";
import { QuestionBadge } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardConfirm({ popup }: PopupProps) {
  return <PopupCard popup={popup} badge={<QuestionBadge />} />;
}

export default PopupCardConfirm;

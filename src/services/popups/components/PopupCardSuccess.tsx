import React from "react";

import { PopupProps } from "@/core";
import PopupCard from "./PopupCard";

function PopupCardSuccess({ popup }: PopupProps) {
  return <PopupCard popup={popup} />;
}

export default PopupCardSuccess;

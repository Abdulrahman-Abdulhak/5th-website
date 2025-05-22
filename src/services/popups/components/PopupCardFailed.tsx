import React from "react";

import { PopupProps } from "@/core";
import PopupCard from "./PopupCard";

function PopupCardFailed({ popup }: PopupProps) {
  return <PopupCard popup={popup} />;
}

export default PopupCardFailed;

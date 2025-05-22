import React from "react";

import { PopupProps } from "@/core";
import PopupCard from "./PopupCard";

function PopupCardLogout({ popup }: PopupProps) {
  return <PopupCard popup={popup} />;
}

export default PopupCardLogout;

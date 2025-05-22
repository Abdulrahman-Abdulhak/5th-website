"use client";

import React from "react";

import { PopupProps } from "@/core";

import PopupCardSuccess from "./PopupCardSuccess";
import PopupCardConfirm from "./PopupCardConfirm";
import PopupCardFailed from "./PopupCardFailed";
import PopupCardPermission from "./PopupCardPermission";
import PopupCardDanger from "./PopupCardDanger";
import PopupCardLogout from "./PopupCardLogout";

function PopupCardSelect({ popup }: PopupProps) {
  switch (popup.type) {
    case "success":
      return <PopupCardSuccess popup={popup} />;
    case "confirm":
      return <PopupCardConfirm popup={popup} />;
    case "failed":
      return <PopupCardFailed popup={popup} />;
    case "permission-request":
      return <PopupCardPermission popup={popup} />;
    case "danger":
      return <PopupCardDanger popup={popup} />;
    case "logout":
      return <PopupCardLogout popup={popup} />;
  }
}

export default PopupCardSelect;

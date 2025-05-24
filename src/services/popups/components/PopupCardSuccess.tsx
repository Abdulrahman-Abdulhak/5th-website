import assert from "assert";

import React from "react";

import { PopupProps } from "@/core";
import { PrimaryButton, SecondaryButton, SuccessBadge } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardSuccess({ popup }: PopupProps) {
  assert(popup.type === "success");

  return (
    <PopupCard
      popup={popup}
      badge={<SuccessBadge />}
      actions={
        <PrimaryButton className="w-full">
          {popup.continueActionLabel ?? "Continue"}
        </PrimaryButton>
      }
    />
  );
}

export default PopupCardSuccess;

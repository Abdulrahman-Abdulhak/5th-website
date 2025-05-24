import assert from "assert";

import React from "react";

import { PopupProps } from "@/core";
import { PrimaryButton, QuestionBadge, SecondaryButton } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardConfirm({ popup }: PopupProps) {
  assert(popup.type === "confirm");

  return (
    <PopupCard
      popup={popup}
      badge={<QuestionBadge />}
      actions={
        <div className="flex gap-6">
          <PrimaryButton>{popup.confirmActionLabel ?? "Confirm"}</PrimaryButton>
          <SecondaryButton>
            {popup.confirmActionLabel ?? "Cancel"}
          </SecondaryButton>
        </div>
      }
    />
  );
}

export default PopupCardConfirm;

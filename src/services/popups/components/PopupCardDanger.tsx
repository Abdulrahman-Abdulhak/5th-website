import assert from "assert";

import React from "react";

import { PopupProps } from "@/core";
import { PrimaryButton, SecondaryButton, WarningBadge } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardDanger({ popup }: PopupProps) {
  assert(popup.type === "danger");

  return (
    <PopupCard
      popup={popup}
      badge={<WarningBadge />}
      actions={
        <div className="flex gap-6">
          <SecondaryButton className="grow">
            {popup.cancelActionLabel ?? "Cancel"}
          </SecondaryButton>
          {/* // TODO: fix button color */}
          <PrimaryButton className="grow">
            {popup.continueActionLabel ?? "Confirm"}
          </PrimaryButton>
        </div>
      }
    />
  );
}

export default PopupCardDanger;

import assert from "assert";

import React from "react";

import { PopupProps } from "@/core";
import { ErrorBadge, PrimaryButton, SecondaryButton } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardFailed({ popup }: PopupProps) {
  assert(popup.type === "failed");

  return (
    <PopupCard
      popup={popup}
      badge={<ErrorBadge />}
      actions={
        <div className="flex gap-6">
          <SecondaryButton className="grow">
            {popup.cancelActionLabel ?? "Cancel"}
          </SecondaryButton>
          {/* // TODO: fix button color */}
          <PrimaryButton className="grow">
            {popup.retryActionLabel ?? "Retry"}
          </PrimaryButton>
        </div>
      }
    />
  );
}

export default PopupCardFailed;

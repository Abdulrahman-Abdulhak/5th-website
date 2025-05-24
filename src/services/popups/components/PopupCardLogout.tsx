import assert from "assert";

import React from "react";

import { PopupProps } from "@/core";
import { LogoutBadge, PrimaryButton, SecondaryButton } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardLogout({ popup }: PopupProps) {
  assert(popup.type === "logout");

  return (
    <PopupCard
      popup={popup}
      badge={<LogoutBadge />}
      actions={
        <div className="flex gap-6">
          <SecondaryButton className="grow">
            {popup.cancelActionLabel ?? "Cancel"}
          </SecondaryButton>
          {/* // TODO: fix button color */}
          <PrimaryButton className="grow">
            {popup.logoutActionLabel ?? "Logout"}
          </PrimaryButton>
        </div>
      }
    />
  );
}

export default PopupCardLogout;

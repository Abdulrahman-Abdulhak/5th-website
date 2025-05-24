import assert from "assert";

import React from "react";

import { PopupProps } from "@/core";
import { NotificationBadge, PrimaryButton, SecondaryButton } from "@/shared";

import PopupCard from "./PopupCard";

function PopupCardPermission({ popup }: PopupProps) {
  assert(popup.type === "permission-request");

  return (
    <PopupCard
      popup={popup}
      badge={<NotificationBadge />}
      actions={
        <div className="flex flex-col gap-5">
          <PrimaryButton>{popup.allowActionLabel ?? "Allow"}</PrimaryButton>
          {/* // TODO: use a text button instead */}
          <SecondaryButton>
            {popup.rejectActionLabel ?? "Don't Allow"}
          </SecondaryButton>
        </div>
      }
    />
  );
}

export default PopupCardPermission;

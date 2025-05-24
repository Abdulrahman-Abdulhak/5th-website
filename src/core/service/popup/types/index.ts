import React from "react";

export type AppPopupTypes =
  | "success"
  | "permission-request"
  | "confirm"
  | "failed"
  | "logout"
  | "danger";

export type AppPopup = {
  id: number | string;
  label: string | React.ReactNode;
  content: string | React.ReactNode;
} & (
  | { type: "success"; continueActionLabel?: string }
  | {
      type: "permission-request";
      allowActionLabel?: string;
      rejectActionLabel?: string;
    }
  | { type: "confirm"; confirmActionLabel?: string; cancelActionLabel?: string }
  | { type: "failed"; retryActionLabel?: string; cancelActionLabel?: string }
  | { type: "logout"; logoutActionLabel?: string; cancelActionLabel?: string }
  | { type: "danger"; continueActionLabel?: string; cancelActionLabel?: string }
);

export interface PopupProps {
  popup: AppPopup;
}

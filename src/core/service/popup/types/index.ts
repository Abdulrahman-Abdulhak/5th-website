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
  type: AppPopupTypes;
  label: string | React.ReactNode;
  content: string | React.ReactNode;
};

export interface PopupProps {
  popup: AppPopup;
}

import React from "react";

export type AppPopupTypes =
  | "success"
  | "permission-request"
  | "confirm"
  | "failed";

export type AppPopup = {
  id: number | string;
  type: AppPopupTypes;
  content: string | React.ReactNode;
};

export interface PopupProps {
  popup: AppPopup;
}

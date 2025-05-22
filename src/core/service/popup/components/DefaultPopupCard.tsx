import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";
import { PopupProps } from "../types";

type Props = PropsReact<PopupProps>;

function DefaultPopupCard({ popup, className, style }: Props) {
  return (
    <div
      className={classNames("absolute center-flex p-10 bg-white", className)}
      style={style}
    >
      {popup.content}
    </div>
  );
}

export default DefaultPopupCard;

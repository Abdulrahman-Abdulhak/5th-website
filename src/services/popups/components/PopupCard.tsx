import React from "react";
import classNames from "classnames";

import { Heading3, Paragraph3, PopupProps } from "@/core";
import { PropsReact } from "@/core/types";

type Props = PropsReact<
  {
    badge?: React.ReactNode;
    actions?: React.ReactNode;
  } & PopupProps
>;

function PopupCard({ popup, badge, actions, className, style }: Props) {
  return (
    <div
      className={classNames(
        "absolute center-flex flex-col p-10 rounded-4xl bg-white min-w-fit w-1/3 max-w-lg",
        className
      )}
      style={style}
    >
      {badge ? <div className="badge mb-10">{badge}</div> : null}
      {popup.label || popup.content ? (
        <div className="content center-flex flex-col gap-3 mb-12">
          <Heading3 className="font-raleway font-semibold text-state-neutral-900">
            {popup.label}
          </Heading3>
          <Paragraph3 className="font-poppins text-state-neutral-500">
            {popup.content}
          </Paragraph3>
        </div>
      ) : null}
      {actions ? <div className="action w-full">{actions}</div> : null}
    </div>
  );
}

export default PopupCard;

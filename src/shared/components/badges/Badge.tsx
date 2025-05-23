import React from "react";
import classNames from "classnames";

import { Icon } from "@/core";
import { PropsReact } from "@/core/types";

import { BadgeProps } from "./types";

export type Props = PropsReact<BadgeProps>;

function Badge({ icon, children, className, id, style }: Props) {
  return (
    <div
      id={id}
      className={classNames("rounded-full p-5", className)}
      style={style}
    >
      {children ? (
        children
      ) : (
        <Icon icon={icon ?? "no-icon"} className="size-9" />
      )}
    </div>
  );
}

export default Badge;

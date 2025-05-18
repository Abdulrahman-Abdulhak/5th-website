import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function SubHeading({ children, className, style }: Props) {
  return (
    <p className={classNames("text-sub-heading", className)} style={style}>
      {children}
    </p>
  );
}

export default SubHeading;

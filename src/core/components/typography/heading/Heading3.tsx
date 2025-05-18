import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Heading3({ id, children, className, style }: Props) {
  return (
    <h3
      id={id}
      className={classNames("text-heading-3", className)}
      style={style}
    >
      {children}
    </h3>
  );
}

export default Heading3;

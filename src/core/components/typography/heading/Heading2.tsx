import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Heading2({ id, children, className, style }: Props) {
  return (
    <h2
      id={id}
      className={classNames("text-heading-2", className)}
      style={style}
    >
      {children}
    </h2>
  );
}

export default Heading2;

import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Heading1({ id, children, className, style }: Props) {
  return (
    <h1
      id={id}
      className={classNames("text-heading-1", className)}
      style={style}
    >
      {children}
    </h1>
  );
}

export default Heading1;

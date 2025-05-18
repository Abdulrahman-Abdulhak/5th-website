import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Heading6({ id, children, className, style }: Props) {
  return (
    <h6
      id={id}
      className={classNames("text-heading-6", className)}
      style={style}
    >
      {children}
    </h6>
  );
}

export default Heading6;

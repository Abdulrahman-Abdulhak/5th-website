import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Heading5({ id, children, className, style }: Props) {
  return (
    <h5
      id={id}
      className={classNames("text-heading-5", className)}
      style={style}
    >
      {children}
    </h5>
  );
}

export default Heading5;

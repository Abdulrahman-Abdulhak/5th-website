import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Heading4({ id, children, className, style }: Props) {
  return (
    <h4
      id={id}
      className={classNames("text-heading-4", className)}
      style={style}
    >
      {children}
    </h4>
  );
}

export default Heading4;

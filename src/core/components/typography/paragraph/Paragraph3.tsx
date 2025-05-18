import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Paragraph3({ id, children, className, style }: Props) {
  return (
    <p
      id={id}
      className={classNames("text-paragraph-3", className)}
      style={style}
    >
      {children}
    </p>
  );
}

export default Paragraph3;

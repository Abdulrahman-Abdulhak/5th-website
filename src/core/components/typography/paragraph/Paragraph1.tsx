import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Paragraph1({ id, children, className, style }: Props) {
  return (
    <p
      id={id}
      className={classNames("text-paragraph-1", className)}
      style={style}
    >
      {children}
    </p>
  );
}

export default Paragraph1;

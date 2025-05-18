import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Paragraph2({ id, children, className, style }: Props) {
  return (
    <p
      id={id}
      className={classNames("text-paragraph-2", className)}
      style={style}
    >
      {children}
    </p>
  );
}

export default Paragraph2;

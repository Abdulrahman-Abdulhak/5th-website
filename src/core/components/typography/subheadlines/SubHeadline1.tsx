import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function SubHeadline1({ children, className, style }: Props) {
  const _className = classNames("text-sub-h1", className);

  return (
    <p className={_className} style={style}>
      {children}
    </p>
  );
}

export default SubHeadline1;

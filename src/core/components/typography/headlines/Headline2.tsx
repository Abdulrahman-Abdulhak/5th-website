import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Headline2({ children, className, style }: Props) {
  const _className = classNames("text-h2", className);

  return (
    <h2 className={_className} style={style}>
      {children}
    </h2>
  );
}

export default Headline2;

import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Headline3({ children, className, style }: Props) {
  const _className = classNames("text-h3", className);

  return (
    <h3 className={_className} style={style}>
      {children}
    </h3>
  );
}

export default Headline3;

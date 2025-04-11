import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Headline4({ children, className, style }: Props) {
  const _className = classNames("text-h4", className);

  return (
    <h4 className={_className} style={style}>
      {children}
    </h4>
  );
}

export default Headline4;

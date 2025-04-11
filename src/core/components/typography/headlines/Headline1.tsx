import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Headline1({ children, className, style }: Props) {
  const _className = classNames("text-h1", className);

  return (
    <h1 className={_className} style={style}>
      {children}
    </h1>
  );
}

export default Headline1;

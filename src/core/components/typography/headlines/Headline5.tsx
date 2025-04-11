import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function Headline5({ children, className, style }: Props) {
  const _className = classNames("text-h5", className);

  return (
    <h5 className={_className} style={style}>
      {children}
    </h5>
  );
}

export default Headline5;

import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

function FooterText({ id, children, className, style }: Props) {
  return (
    <p id={id} className={classNames("text-footer", className)} style={style}>
      {children}
    </p>
  );
}

export default FooterText;

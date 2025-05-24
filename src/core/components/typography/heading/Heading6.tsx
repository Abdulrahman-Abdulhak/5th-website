//* JsDoc imports
import type Heading5 from "./Heading5";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a final title level for some container, the smallest heading text. (smaller than {@linkcode Heading5})
 * @returns An HTML h6 element that is styled using the "text-heading-6" tailwind custom class
 */
function Heading6({ id, children, className, style }: Props) {
  return (
    <h6
      id={id}
      className={classNames("text-heading-6", className)}
      style={style}
    >
      {children}
    </h6>
  );
}

export default Heading6;

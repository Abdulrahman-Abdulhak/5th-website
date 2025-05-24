//* JsDoc imports
import type Heading2 from "./Heading2";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a title for the page and it is the biggest heading. (bigger than {@linkcode Heading2})
 * @returns An HTML h1 element that is styled using the "text-heading-1" tailwind custom class
 */
function Heading1({ id, children, className, style }: Props) {
  return (
    <h1
      id={id}
      className={classNames("text-heading-1", className)}
      style={style}
    >
      {children}
    </h1>
  );
}

export default Heading1;

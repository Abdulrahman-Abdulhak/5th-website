//* JsDoc imports
import type Heading1 from "./Heading1";
import type Heading3 from "./Heading3";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a title for a section of the page. (bigger than {@linkcode Heading3} but smaller than {@linkcode Heading1})
 * @returns An HTML h2 element that is styled using the "text-heading-2" tailwind custom class
 */
function Heading2({ id, children, className, style }: Props) {
  return (
    <h2
      id={id}
      className={classNames("text-heading-2", className)}
      style={style}
    >
      {children}
    </h2>
  );
}

export default Heading2;

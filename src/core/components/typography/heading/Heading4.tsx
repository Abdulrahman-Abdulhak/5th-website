//* JsDoc imports
import type Heading3 from "./Heading3";
import type Heading5 from "./Heading5";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a title for a container of level 4. (bigger than {@linkcode Heading5} but smaller than {@linkcode Heading3})
 * @returns An HTML h4 element that is styled using the "text-heading-4" tailwind custom class
 */
function Heading4({ id, children, className, style }: Props) {
  return (
    <h4
      id={id}
      className={classNames("text-heading-4", className)}
      style={style}
    >
      {children}
    </h4>
  );
}

export default Heading4;

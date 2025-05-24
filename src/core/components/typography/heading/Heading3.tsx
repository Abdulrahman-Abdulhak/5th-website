//* JsDoc imports
import type Heading2 from "./Heading2";
import type Heading4 from "./Heading4";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a title for a container of level 3. (bigger than {@linkcode Heading4} but smaller than {@linkcode Heading2})
 * @returns An HTML h3 element that is styled using the "text-heading-3" tailwind custom class
 */
function Heading3({ id, children, className, style }: Props) {
  return (
    <h3
      id={id}
      className={classNames("text-heading-3", className)}
      style={style}
    >
      {children}
    </h3>
  );
}

export default Heading3;

//* JsDoc imports
import type Heading4 from "./Heading4";
import type Heading6 from "./Heading6";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a title for a container of level 5. (bigger than {@linkcode Heading6} but smaller than {@linkcode Heading4})
 * @returns An HTML h5 element that is styled using the "text-heading-5" tailwind custom class
 */
function Heading5({ id, children, className, style }: Props) {
  return (
    <h5
      id={id}
      className={classNames("text-heading-5", className)}
      style={style}
    >
      {children}
    </h5>
  );
}

export default Heading5;

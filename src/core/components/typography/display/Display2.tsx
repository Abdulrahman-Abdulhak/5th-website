//* JsDoc imports
import type Display1 from "./Display1";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a huge text element for decoration purposes. (smaller than {@linkcode Display1})
 * @returns A paragraph element that is styled using the "text-display-2" tailwind custom class
 */
function Display2({ id, children, className, style }: Props) {
  return (
    <p
      id={id}
      className={classNames("text-display-2", className)}
      style={style}
    >
      {children}
    </p>
  );
}

export default Display2;

//* JsDoc imports
import type Display2 from "./Display2";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a huge text element for decoration purposes. (bigger than {@linkcode Display2})
 * @returns A paragraph element that is styled using the "text-display-1" tailwind custom class
 */
function Display1({ id, children, className, style }: Props) {
  return (
    <p
      id={id}
      className={classNames("text-display-1", className)}
      style={style}
    >
      {children}
    </p>
  );
}

export default Display1;

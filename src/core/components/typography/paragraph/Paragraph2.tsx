//* JsDoc imports
import type Paragraph1 from "./Paragraph1";
import type Paragraph3 from "./Paragraph3";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a paragraph node. (smaller than {@linkcode Paragraph3} and bigger than {@linkcode Paragraph1})
 * @returns A paragraph element that is styled using the "text-paragraph-2" tailwind custom class
 */
function Paragraph2({ id, children, className, style }: Props) {
  return (
    <p
      id={id}
      className={classNames("text-paragraph-2", className)}
      style={style}
    >
      {children}
    </p>
  );
}

export default Paragraph2;

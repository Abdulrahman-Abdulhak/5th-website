//* JsDoc imports
import type Paragraph2 from "./Paragraph2";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a paragraph with a small text, the smallest level. (smaller than {@linkcode Paragraph2})
 * @returns A paragraph element that is styled using the "text-paragraph-1" tailwind custom class
 */
function Paragraph1({ id, children, className, style }: Props) {
  return (
    <p
      id={id}
      className={classNames("text-paragraph-1", className)}
      style={style}
    >
      {children}
    </p>
  );
}

export default Paragraph1;

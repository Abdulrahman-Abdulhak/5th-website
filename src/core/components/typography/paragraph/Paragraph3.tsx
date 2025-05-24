//* JsDoc imports
import type Paragraph2 from "./Paragraph2";

//* Needed imports
import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

/**
 * Used to create a paragraph with a big text, the biggest level. (bigger than {@linkcode Paragraph2})
 * @returns A paragraph element that is styled using the "text-paragraph-3" tailwind custom class
 */
function Paragraph3({ id, children, className, style }: Props) {
  return (
    <p
      id={id}
      className={classNames("text-paragraph-3", className)}
      style={style}
    >
      {children}
    </p>
  );
}

export default Paragraph3;

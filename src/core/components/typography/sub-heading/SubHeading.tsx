import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

// TODO: explain what is a heading element in below JsDoc
/**
 * Used to create a paragraph placed next to a Heading element as a short description for the containing section.
 * @returns A paragraph element that is styled using the "text-sub-heading" tailwind custom class
 */
function SubHeading({ children, className, style }: Props) {
  return (
    <p className={classNames("text-sub-heading", className)} style={style}>
      {children}
    </p>
  );
}

export default SubHeading;

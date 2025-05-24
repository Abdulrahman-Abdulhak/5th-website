import React from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

type Props = PropsReact<{}>;

// TODO: come up with a better description for bellow JsDoc
/**
 * Used to create a paragraph for captioning.
 * @returns A paragraph element that is styled using the "text-caption" tailwind custom class
 */
function CaptionText({ id, children, className, style }: Props) {
  return (
    <p id={id} className={classNames("text-caption", className)} style={style}>
      {children}
    </p>
  );
}

export default CaptionText;

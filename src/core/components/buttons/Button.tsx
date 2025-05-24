import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";

export type ButtonProps = PropsReact<{}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, id, className, style, ...rest }: ButtonProps) {
  return (
    <button
      type={rest.type ?? "button"}
      id={id}
      className={classNames(className)}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;

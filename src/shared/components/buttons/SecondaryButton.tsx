import React from "react";
import classNames from "classnames";

import Button, { ButtonProps } from "./Button";

type Props = ButtonProps;

function SecondaryButton({ className, children, ...rest }: Props) {
  return (
    <Button
      className={classNames(
        "bg-white active:bg-neutral-200 disabled:bg-white", // background
        "text-neutral-900 hover:text-primary-500 active:text-neutral-900 focus-visible:text-primary-500 disabled:text-neutral-300", // text
        "border border-neutral-300 hover:border-primary-500 active:border-neutral-300 focus-visible:border-primary-500 disabled:border-neutral-300", // border
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default SecondaryButton;

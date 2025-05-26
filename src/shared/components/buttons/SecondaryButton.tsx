import React from "react";
import classNames from "classnames";

import Button, { ButtonProps } from "./Button";

type Props = ButtonProps;

function SecondaryButton({ className, children, ...rest }: Props) {
  return (
    <Button
      className={classNames(
        "bg-white active:bg-state-neutral-200 disabled:bg-white", // background
        "text-state-neutral-900 hover:text-primary-500 active:text-state-neutral-900 focus-visible:text-primary-500 disabled:text-state-neutral-300", // text
        "border border-state-neutral-300 hover:border-primary-500 active:border-state-neutral-300 focus-visible:border-primary-500 disabled:border-state-neutral-300", // border
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default SecondaryButton;

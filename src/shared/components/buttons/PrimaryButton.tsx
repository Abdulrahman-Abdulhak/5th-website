import React from "react";
import classNames from "classnames";

import Button, { ButtonProps } from "./Button";

type Props = ButtonProps;

function PrimaryButton({ className, children, ...rest }: Props) {
  return (
    <Button
      className={classNames(
        "bg-primary-500 hover:bg-primary-400 focus:bg-primary-400 active:bg-primary-600 disabled:bg-state-neutral-400", // background
        "text-white", // text
        "border border-primary-500 hover:border-primary-400 active:border-primary-600 disabled:border-state-neutral-400 focus-visible:border-primary-600", // border
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;

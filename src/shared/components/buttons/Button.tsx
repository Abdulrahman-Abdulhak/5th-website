import React from "react";
import classNames from "classnames";

import { Button as CoreButton, Icon, Icons } from "@/core";
// TODO: refactor the type to be imported from
import { ButtonProps as CoreButtonProps } from "@/core/components/buttons/Button";

export type ButtonProps = {
  /** An icon to be added along side the children of the button, or as a stand alone child */
  icon?: Icons;
} & CoreButtonProps;

/** The base component for buttons in this project */
function Button({ icon, className, children, ...rest }: ButtonProps) {
  return (
    <CoreButton
      className={classNames(
        "button px-10 py-2 text-paragraph-2 font-semibold font-poppins rounded-lg",
        {
          "center-flex gap-2": (icon && children)?.toBool(),
        },
        className
      )}
      {...rest}
    >
      {icon && <Icon icon={icon as any} className="size-6" />}
      {children}
    </CoreButton>
  );
}

export default Button;

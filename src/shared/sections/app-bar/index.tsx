import React from "react";
import classNames from "classnames";

import { PropsWithClassName } from "@/core/types";

type Props = PropsWithClassName<{}>;

function AppBar({ className }: Props) {
  return <div className={classNames(className)}>AppBar</div>;
}

export default AppBar;

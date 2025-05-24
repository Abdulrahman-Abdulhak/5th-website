import React from "react";
import Image from "next/image";

import classNames from "classnames";

import { PropsWithClassName } from "@/core/types";

type Props = PropsWithClassName<{
  type?: "full" | "icon";
}>;

const logoPath: Record<Required<Props>["type"], string> = {
  full: "/full-logo.svg",
  icon: "icon-logo.svg",
};

const logoStaticSize: Record<Required<Props>["type"], [number, number]> = {
  full: [180, 62],
  icon: [79, 62],
};

function Logo({ type = "full", className }: Props) {
  return (
    <Image
      className={classNames(className)}
      src={logoPath[type]}
      alt="Smart Syria Horizon's logo"
      width={logoStaticSize[type][0]}
      height={logoStaticSize[type][1]}
    />
  );
}

export default Logo;

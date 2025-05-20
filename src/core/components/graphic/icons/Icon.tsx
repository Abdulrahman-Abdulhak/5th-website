"use client";

import React, { Suspense, useEffect, useState } from "react";
import classNames from "classnames";

import { PropsWithClassName, StartsWith } from "@/core/types";
import { getIcon } from "@/services";

import PlaceholderIcon from "./PlaceholderIcon";

type Props = PropsWithClassName<{
  icon: string;
  colorClass?: StartsWith<"text-">;
  sizeClass?: StartsWith<"size-" | "w-" | "h-">;
}>;

// TODO: Let parent handle the loading state
// TODO: Let parent handle errors. (use error boundary)
function SVG({
  icon,
  className,
  fallback,
}: Props & { fallback?: React.ReactNode }) {
  const [iconSvg, setIconSvg] = useState<string>("");

  useEffect(() => {
    getIcon(icon)
      .then((res) => {
        if (typeof res === "string") setIconSvg(res);
      })
      .catch((res) => setIconSvg(""));
  }, [icon]);

  return iconSvg ? (
    <div
      className={classNames(className)}
      dangerouslySetInnerHTML={{ __html: iconSvg }}
    />
  ) : (
    fallback
  );
}

// TODO: add a universal SVGs-container element, and make use of the "use" svg element
function Icon({ icon, colorClass, sizeClass, className }: Props) {
  const _className = classNames("icon", colorClass, sizeClass, className);

  const fallback = (
    <div className={_className}>
      <PlaceholderIcon />
    </div>
  );

  return (
    <Suspense fallback={fallback}>
      <SVG icon={icon} className={_className} fallback={fallback} />
    </Suspense>
  );
}

export default Icon;

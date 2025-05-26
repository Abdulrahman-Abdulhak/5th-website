"use client";

import React, { Suspense, useEffect, useState } from "react";
import classNames from "classnames";

import { PropsWithClassName, StartsWith } from "@/core/types";
import { getIcon } from "../api/assets.service";

import PlaceholderIcon from "./PlaceholderIcon";
import { Icons } from "../types";

type Props = PropsWithClassName<{
  /** an icon name available to use in the system */
  icon: Icons;
  /** tailwind text color class for coloring the icon. (icons use the current text color as a color) */
  colorClassName?: StartsWith<"text-">;
  /** tailwind sizing class */
  sizeClassName?: StartsWith<"size-" | "w-" | "h-" | "min-w-" | "min-h-">;
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
/**
 * Displays an icon from the icons stored in the app assets. includes:
 * - placeholder for loading and error states
 * - cache for icons to be fetched once
 * @default
 * sizeClass 100% of the parent size
 * className .icon
 * @returns a div element with the icon svg as a child
 */
function Icon({ icon, colorClassName, sizeClassName, className }: Props) {
  const _className = classNames(
    "icon",
    colorClassName,
    sizeClassName,
    className
  );

  const fallback = (
    <div className={_className}>
      <PlaceholderIcon />
    </div>
  );

  return icon === "no-icon" ? (
    fallback
  ) : (
    <Suspense fallback={fallback}>
      <SVG icon={icon} className={_className} fallback={fallback} />
    </Suspense>
  );
}

export default Icon;

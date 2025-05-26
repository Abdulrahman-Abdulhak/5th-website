import React from "react";
import Link from "next/link";

import classNames from "classnames";

import { Icon, Icons, Paragraph3 } from "@/core";
import { PropsReact, StartsWith } from "@/core/types";

type Props = PropsReact<{
  /** The icon to be shown next to the label */
  icon?: Icons | React.JSX.Element;
  /** The path this NavItem is pointing to */
  path: StartsWith<"/">;
  /** Use li HTML element */
  listItem?: boolean;
}>;

/**
 * Rendering the NavItem according to the Figma Design.
 * The children of this element will be used as a label to the actual item
 * @default
 * - listItem: true
 * @returns li or div HTML element
 */
function NavItem({
  icon,
  path,
  listItem,
  children,
  className,
  id,
  style,
}: Props) {
  const _className = classNames(
    "rounded-lg",
    { "flex items-center gap-2": icon && children },
    className
  );

  const inner = (
    <Link href={path} className={_className}>
      {icon && typeof icon === "string" ? (
        <Icon icon={icon} sizeClassName="size-6 min-w-6" />
      ) : (
        icon
      )}
      {children?.isPrimitive() ? (
        <Paragraph3 className="font-poppins">{children}</Paragraph3>
      ) : (
        children
      )}
    </Link>
  );

  return listItem ? (
    <li id={id} style={style}>
      {inner}
    </li>
  ) : (
    <div id={id} style={style}>
      {inner}
    </div>
  );
}

export default NavItem;

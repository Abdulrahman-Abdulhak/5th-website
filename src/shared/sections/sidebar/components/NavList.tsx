"use client";

import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { PropsWithClassName } from "@/core/types";

import { NavLink } from "../types";
import NavItem from "./NavItem";

type Props = PropsWithClassName<{
  /** a list of NavLinks to transform into NavItems  */
  children: NavLink | NavLink[];
}>;

/**
 * Takes a list of {@linkcode NavLink} as children maps over them and display the links
 * as the design says in Figma
 * @returns a ul HTML element containing a list of {@linkcode NavItem}
 */
function NavList({ children }: Props) {
  const pathname = usePathname();

  const actualChildren = Array.isArray(children) ? children : [children];

  return (
    <ul className={classNames("flex flex-col gap-3 max-w-48")}>
      {actualChildren.map(({ path, icon, label }) => {
        const active = pathname.startsWith(path);
        return (
          <NavItem
            key={path}
            path={path}
            icon={icon}
            listItem
            className={classNames("px-2 py-3 rounded-lg", {
              "text-state-neutral-900": !active,
              "text-primary-500 bg-state-neutral-100": active,
            })}
          >
            {label}
          </NavItem>
        );
      })}
    </ul>
  );
}

export default NavList;

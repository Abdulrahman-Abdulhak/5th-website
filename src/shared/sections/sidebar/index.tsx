import React from "react";
import classNames from "classnames";

import { PropsWithClassName } from "@/core/types";
import { Logo } from "@/shared/components";
import { NavList } from "./components";

type Props = PropsWithClassName<{}>;

/**
 * Creates the navigation bar in the side as the Figma design says
 * @returns aside HTML element with a {@linkcode Logo} and a list of links
 */
function Sidebar({ className }: Props) {
  return (
    <aside
      className={classNames(
        "sticky top-0 flex flex-col max-h-screen p-10 border-r border-state-neutral-900",
        className
      )}
    >
      <Logo className="mb-8" />
      <nav className="flex flex-col justify-between grow">
        <NavList>
          {[
            {
              path: "/",
              icon: "home-linear",
              label: "Dashboard",
            },
            {
              path: "/geo-data",
              icon: "map-linear",
              label: "Geo Data",
            },
            {
              path: "/plans",
              icon: "doc-search",
              label: "Plans & Study",
            },
            {
              path: "/investments",
              icon: "ai-chip-spark",
              label: "Regional Investments",
            },
            {
              path: "/chat",
              icon: "message",
              label: "Chat",
            },
          ]}
        </NavList>
        <NavList>
          {[
            {
              path: "/settings",
              icon: "settings-outline",
              label: "Settings",
            },
          ]}
        </NavList>
      </nav>
    </aside>
  );
}

export default Sidebar;

"use client";

import React, { useState } from "react";
import assert from "assert";
import classNames from "classnames";

import { ClassNameType, PropsWithClassName } from "@/core/types";

type Props = PropsWithClassName<{
  tabs: React.ReactNode[];
  views: React.ReactNode[];
  tabClassName?: ClassNameType;
  tabsContainerClassName?: ClassNameType;
  viewClassName?: ClassNameType;
}>;

function Notebook({
  tabs,
  views,
  className,
  tabClassName,
  tabsContainerClassName,
  viewClassName,
}: Props) {
  assert(
    tabs.length === views.length,
    "Tabs length should be the same as Views length when using the Notebook component"
  );

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const _className = classNames(className);
  const _tabsContainerClassName = classNames(
    "flex gap-6 border-b",
    tabsContainerClassName
  );
  const _tabClassName = classNames("cursor-default", tabClassName);
  const _viewClassName = classNames("mt-14", viewClassName);

  const tabClickHandler = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className={_className}>
      {/* TODO: use horizontal scroller */}
      <ul className={_tabsContainerClassName}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => tabClickHandler(index)}
            className={_tabClassName}
            data-active={activeTabIndex === index}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className={_viewClassName}>{views[activeTabIndex]}</div>
    </div>
  );
}

export default Notebook;

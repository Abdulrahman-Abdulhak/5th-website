"use client";

import React, { useRef } from "react";
import classNames from "classnames";

import "@/core/utils/built-ins"; // making sure that built-in methods has been defined

import PopupCard from "./PopupCard";
import { usePopPopup, usePopups } from "../hooks";
import { PopupProps } from "../types";

type Props = {
  PopupDisplayer?: React.FC<PopupProps>;
};

function PopupBoard({ PopupDisplayer = PopupCard }: Props) {
  const popups = usePopups();
  const pop = usePopPopup();
  const boardRef = useRef<HTMLDivElement | null>(null);

  const isShown = popups.toBool();

  const handleClick = (e: React.MouseEvent) => {
    //? To pop if the user clicked outside the popup (on the shadow).
    if (e.target === boardRef.current) pop();
  };

  return (
    <div
      ref={boardRef}
      onClick={handleClick}
      className={classNames(
        "absolute top-0 left-0 grid grid-rows-1 place-items-center",
        {
          "inset-0": isShown,
          "bg-gray-500/60": isShown,
        }
      )}
    >
      {popups.map((popup) => (
        <PopupDisplayer key={popup.id} popup={popup} />
      ))}
    </div>
  );
}

export default PopupBoard;

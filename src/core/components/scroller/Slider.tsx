"use client";

import React, { useRef } from "react";
import classNames from "classnames";

import { PropsReact } from "@/core/types";
import { useScroll } from "@/core/hooks";

type Props = PropsReact<{
  slides: React.ReactNode[];
  displayedSlides: number;
}>;

function computeSlideHeight(inner: HTMLElement | null) {
  const sliderHeight = inner
    ?.querySelector("li")
    ?.getBoundingClientRect()?.height;

  if (!sliderHeight) return 0;
  return sliderHeight;
}

// TODO: Add Scrollbar
function Slider({ className, style, slides, displayedSlides }: Props) {
  const inner = useRef<HTMLUListElement>(null);
  const slideBy = useScroll(inner);

  const _outerStyle: React.CSSProperties = {
    ...style,
    maxHeight: computeSlideHeight(inner.current) * displayedSlides,
  };

  const _innerStyle: React.CSSProperties = {
    transform: `translateY(${slideBy}px)`,
  };

  const _className = classNames("outer-slider overflow-hidden", className);

  return (
    <div className={_className} style={_outerStyle}>
      <ul ref={inner} className="inner-slider" style={_innerStyle}>
        {slides.map((child, index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;

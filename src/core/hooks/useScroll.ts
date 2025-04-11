"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { EventTypes } from "../types";
import { useScrollEvent } from "./useEvents";

type Options =
  | {
      sensitivity: number;
    }
  | undefined;

//   TODO: Fix jiggling problem
function useScroll(
  element: EventTypes.ElementRef,
  options: Options = { sensitivity: 0.5 }
) {
  const [slidingDistance, setSlidingDistance] = useState(0);
  const slidingDistanceRef = useRef(slidingDistance);

  useEffect(() => {
    slidingDistanceRef.current = slidingDistance;
  }, [slidingDistance]);

  const addToSliding = (deg: number, remSlidingDist: number) => {
    let slideBy;
    if (deg > 0) {
      slideBy = Math.min(options.sensitivity * deg, remSlidingDist);
    } else {
      slideBy = Math.max(options.sensitivity * deg, remSlidingDist);
    }

    setSlidingDistance((prev) => prev + slideBy);
  };

  const canSlideBy = (direction: "up" | "down") => {
    if (direction === "down") {
      return -slidingDistanceRef.current;
    }

    let offsetDiff: number;
    if (element instanceof Window) {
      offsetDiff =
        document.body.getBoundingClientRect().height - element.innerHeight;
    } else {
      offsetDiff =
        (element.current?.getBoundingClientRect().height ?? 0) -
        (element.current?.parentElement?.getBoundingClientRect().height ?? 0);
    }

    return offsetDiff + slidingDistanceRef.current;
  };

  useScrollEvent(
    element,
    (e) => {
      const val = -e.deltaY;
      const direction = val > 0 ? "down" : "up";
      const remSlidingDist = canSlideBy(direction);

      if (!remSlidingDist) return;

      addToSliding(val, Math.sign(val) * remSlidingDist);
    },
    [canSlideBy]
  );

  return slidingDistance;
}

export default useScroll;

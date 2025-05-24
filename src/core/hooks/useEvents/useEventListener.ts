"use client";

import { useEffect, useRef, useState } from "react";

import { EventTypes } from "@/core/types";

export const addListener = (
  elementRef: EventTypes.ElementRef,
  event: EventTypes.Events,
  cb: EventTypes.CallBack,
  addEventOptions?:
    | EventTypes.Options
    | { add: EventTypes.Options; remove: EventTypes.RemoveOptions }
) => {
  const options =
    addEventOptions === undefined
      ? undefined
      : typeof addEventOptions === "boolean"
      ? addEventOptions
      : Object.hasOwn(addEventOptions, "add")
      ? (addEventOptions as { add: AddEventListenerOptions }).add
      : (addEventOptions as AddEventListenerOptions);

  if (elementRef instanceof Window) {
    elementRef.addEventListener(event, cb, options);
  } else {
    elementRef?.current?.addEventListener(event, cb, options);
  }
};

export const removeListener = (
  elementRef: EventTypes.ElementRef,
  event: EventTypes.Events,
  cb: EventTypes.CallBack,
  removeEventOptions?:
    | EventTypes.Options
    | { add: EventTypes.Options; remove: EventTypes.RemoveOptions }
) => {
  // TODO: use typecasting instead
  const options =
    removeEventOptions === undefined
      ? undefined
      : typeof removeEventOptions === "boolean"
      ? removeEventOptions
      : Object.hasOwn(removeEventOptions, "remove")
      ? (removeEventOptions as { remove: EventListenerOptions }).remove
      : (removeEventOptions as EventListenerOptions);

  if (elementRef instanceof Window) {
    elementRef.removeEventListener(event, cb, options);
  } else {
    elementRef?.current?.removeEventListener(event, cb);
  }
};

export const useEventListener = (
  event: EventTypes.Events | EventTypes.Events[],
  callBack: EventTypes.CallBack,
  elementRef: EventTypes.ElementRef = window,
  eventOptions?:
    | EventTypes.Options
    | { add: EventTypes.Options; remove: EventTypes.RemoveOptions },
  dependencies?: any[]
) => {
  const [enabled, setEnabled] = useState(true);
  const cb = useRef(callBack);

  const eventDependencies = <any>[...(dependencies ?? []), enabled];
  Array.isArray(event)
    ? eventDependencies.push(...event)
    : eventDependencies.push(event);
  useEffect(() => {
    if (!enabled) return;

    if (Array.isArray(event)) {
      event.forEach((e) =>
        addListener(elementRef, e, cb.current, eventOptions)
      );
    } else {
      addListener(elementRef, event, cb.current, eventOptions);
    }

    return () => {
      if (Array.isArray(event)) {
        event.forEach((e) =>
          removeListener(elementRef, e, cb.current, eventOptions)
        );
      } else {
        removeListener(elementRef, event, cb.current, eventOptions);
      }
    };
  }, eventDependencies);

  const enable = () => setEnabled((prev) => true);
  const disable = () => setEnabled((prev) => false);
  return [enable, disable];
};

export default useEventListener;

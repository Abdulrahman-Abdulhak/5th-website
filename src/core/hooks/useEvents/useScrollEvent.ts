import { EventTypes } from "@/core/types";
import useEventListener from "./useEventListener";

const preventDefault = (e: Event) => {
  e.preventDefault();
};

type CallBack = ((e: WheelEvent) => void) | (() => void);

// TODO: update for horizontal scroll
const useScrollEvent = (
  elementRef: EventTypes.ElementRef,
  callback: CallBack,
  dependencies: any[]
) => {
  let supportsPassive = false;
  try {
    //* ignore typescript error
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  const wheelOpt = supportsPassive ? { passive: false } : false;
  const wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  const listener = (e: Event) => {
    preventDefault(e);
    callback(e as WheelEvent);
  };

  const [enableFF, disableFF] = useEventListener(
    "DOMMouseScroll",
    listener,
    elementRef,
    false,
    dependencies
  ); // Older FF
  const [enable, disable] = useEventListener(
    [wheelEvent, "touchmove"],
    listener,
    elementRef,
    wheelOpt,
    dependencies
  );

  const enableAll = () => {
    enableFF();
    enable();
  };
  const disableAll = () => {
    disableFF();
    disable();
  };

  return [enableAll, disableAll];
};

export default useScrollEvent;

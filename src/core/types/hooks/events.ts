export type scrollEvents =
  | "DOMMouseScroll"
  | "touchmove"
  | "wheel"
  | "mousewheel";

export type mouseEvents = "click";

export type Events = keyof HTMLElementEventMap | mouseEvents | scrollEvents;

export type CallBack = (() => void) | EventListener;

export type ElementRef = Window | React.RefObject<HTMLElement | null>;

export type Options = boolean | AddEventListenerOptions;
export type RemoveOptions = boolean | EventListenerOptions;

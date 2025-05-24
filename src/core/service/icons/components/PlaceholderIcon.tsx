import React from "react";

/**
 * the placeholder icon for the loading and error state of any icon
 * @returns an svg element
 */
function PlaceholderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="134"
      height="169"
      viewBox="0 0 134 169"
      fill="none"
    >
      <path
        d="M66.2234 83.4663L130.5 2.5L2 2M66.2234 83.4663L2 2M66.2234 83.4663L130.5 165M66.2234 83.4663L2 164V2"
        stroke="currentcolor"
        strokeWidth="3"
      />
      <path d="M131 165V2" stroke="currentcolor" strokeWidth="3" />
      <path d="M131.5 165H1.5" stroke="currentcolor" strokeWidth="3" />
    </svg>
  );
}

export default PlaceholderIcon;

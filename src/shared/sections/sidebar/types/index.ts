import { Icons } from "@/core";
import { StartsWith } from "@/core/types";

export type NavLink = {
  /** the path this NavLink leads to */
  path: StartsWith<"/">;
  /** the label used in the display of this NavLink */
  label?: string;
  /** the icon used in the display of this NavLink */
  icon?: Icons;
};

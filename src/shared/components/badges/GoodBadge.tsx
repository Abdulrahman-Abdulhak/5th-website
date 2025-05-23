import React from "react";

import Badge from "./Badge";
import { BadgeProps } from "./types";

type Props = Required<BadgeProps>;

function GoodBadge({ icon }: Props) {
  return <Badge icon={icon} className="bg-neutral-100 text-primary-500" />;
}

export default GoodBadge;

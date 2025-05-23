import React from "react";

import Badge from "./Badge";
import { BadgeProps } from "./types";

type Props = Required<BadgeProps>;

function BadBadge({ icon }: Props) {
  return (
    <Badge icon={icon} className="bg-state-error-50 text-state-error-500" />
  );
}

export default BadBadge;

"use client";

import { Icon, usePushPopup } from "@/core";
import { useEffect } from "react";

export default function Home() {
  const pushPopup = usePushPopup();

  useEffect(() => {
    pushPopup({
      id: 0,
      label: "Are you sure?",
      type: "confirm",
      content: "Some Popup Confirmation",
    });
  }, []);

  return <Icon icon="warning-outline" className="size-20" />;
}

"use client";

import { Icon, usePushPopup } from "@/core";
import { useEffect } from "react";

export default function Home() {
  const pushPopup = usePushPopup();

  useEffect(() => {
    pushPopup({
      id: 0,
      type: "confirm",
      content: "Some Popup Confirmation",
    });
  }, []);

  return <Icon icon="cloud-error" className="size-20" />;
}

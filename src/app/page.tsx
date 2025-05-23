"use client";

import { useEffect } from "react";

import { Icon, usePushPopup } from "@/core";

export default function Home() {
  const pushPopup = usePushPopup();

  useEffect(() => {
    pushPopup({
      id: 0,
      label: "Are you sure?",
      type: "success",
      content: "Some Popup Confirmation",
    });
  }, []);

  return <Icon icon="warning-outline" className="size-20" />;
}

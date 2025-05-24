"use client";

import { useEffect } from "react";

import { Icon, usePushPopup } from "@/core";
import { PrimaryButton, SecondaryButton } from "@/shared";

export default function Home() {
  // const pushPopup = usePushPopup();

  // useEffect(() => {
  //   pushPopup({
  //     id: 0,
  //     label: "Are you sure?",
  //     type: "success",
  //     content: "Some Popup Confirmation",
  //   });
  // }, []);

  return (
    <div>
      <PrimaryButton className="m-10" disabled>
        Continue
      </PrimaryButton>
      <SecondaryButton className="m-4" disabled icon="close-circle" />
    </div>
  );
}

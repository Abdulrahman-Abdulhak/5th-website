"use client";

import { useEffect } from "react";

import { Icon, usePushPopup } from "@/core";
import { PrimaryButton, SecondaryButton } from "@/shared";

export default function Home() {
  const pushPopup = usePushPopup();

  useEffect(() => {
    pushPopup({
      id: 0,
      type: "danger",
      label: "Delete the data?",
      content: "Are you sure want to delete your data?",
      cancelActionLabel: "No, Thanks",
      continueActionLabel: "Yes, Delete",
    });
  }, []);

  return (
    <div>
      <PrimaryButton className="m-10" disabled>
        Continue
      </PrimaryButton>
      <SecondaryButton className="m-4" disabled icon="close-circle" />
    </div>
  );
}

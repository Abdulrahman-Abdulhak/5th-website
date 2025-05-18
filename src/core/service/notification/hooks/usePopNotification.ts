import { AppNotification } from "../types";
import { useNotificationStore } from "./store";

export function usePopNotification() {
  const popNotification = useNotificationStore((state) => state.pop);
  return popNotification;
}

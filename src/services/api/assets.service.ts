"use server";

import { assetsServer } from "./servers";

const api = assetsServer;

export async function getIcon(icon: string) {
  const res = await api.get<string>(`/icons/${icon}`);
  return res.data;
}

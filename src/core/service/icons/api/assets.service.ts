"use server";

import { API } from "@/core/utils";

const assetsServerBasePath = process.env.APP_URL + "/api/assets";
const api = API.single<string>(assetsServerBasePath);

export async function getIcon(icon: string) {
  const res = await api.get(`/icons/${icon}`);
  return res.data;
}

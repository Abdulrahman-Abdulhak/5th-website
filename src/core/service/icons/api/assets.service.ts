"use server";

import { API } from "@/core/utils";

const assetsServerBasePath = process.env.APP_URL + "/api/assets";
const api = API.single<string>(assetsServerBasePath);

/**
 * A GET request to the app internal API system for retrieving the icon svg
 * @param icon the icon file name without the extension
 * @returns the icon svg file as a string if the icon exists
 * @returns null if the icon requested doesn't exist or if an error happens
 */
export async function getIcon(icon: string) {
  const res = await api.get(`/icons/${icon}`);
  return res.data;
}

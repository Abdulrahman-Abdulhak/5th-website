"use server";

import { mainServer } from "./servers";

const basePath = "/test";
const api = mainServer.subPath(basePath);

export async function isServerUp() {
  const res = await api.get<boolean>("/server-up");
  const isUp = res.status === 200;

  return isUp;
}

export async function isServerDown() {
  return !(await isServerUp());
}

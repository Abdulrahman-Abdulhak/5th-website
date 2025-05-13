import serverAPI from ".";

const basePath = "/test";
const api = serverAPI.subPath(basePath);

export async function isServerUp() {
  const res = await api.get<boolean>("/server-up");
  const isUp = res.status === 200;

  return isUp;
}

export async function isServerDown() {
  return !(await isServerUp());
}

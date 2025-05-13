import { isServerUp } from "services";

export default async function Home() {
  const serverUp = await isServerUp();
  return <div>{serverUp ? "server is up" : "server is down"}</div>;
}

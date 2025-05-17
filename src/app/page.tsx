import { isServerUp, login, register } from "services";

export default async function Home() {
  const cred = await login({
    username: "abd",
    password: "pass1!@dSds",
  });

  return <div>{JSON.stringify(cred)}</div>;
}

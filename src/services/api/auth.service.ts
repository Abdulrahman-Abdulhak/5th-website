"use server";

import assert from "assert";

import { User } from "../types";
import { mainServer } from "./servers";

const basePath = "/user";
const api = mainServer.subPath(basePath);

type RegisterParam = User<false>;
export const register = async ({
  email,
  firstName,
  lastName,
  password,
  phone,
  username,
}: RegisterParam) => {
  const res = await api.post<{
    user: User;
    token: string;
  }>("/register", {
    email,
    first_name: firstName,
    last_name: lastName,
    password,
    phone,
    username,
  });

  res.data;
  console.log(res.data);
};

type LoginParam = { username?: string; email?: string; password: string };
export const login = async ({ username, email, password }: LoginParam) => {
  assert(
    Object.xor(username, email),
    "Either one but only one of email or username should have a value"
  );

  const res = await api.post<{}>("/login", {
    authenticator: { username, email },
    password,
  });

  return res.data;
};

export type User<Complete = true> = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
} & (Complete extends true ? { id: number } : {});

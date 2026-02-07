import { api } from "../api";
import { IndexUserResponse } from "../user";

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
  city_id: number;
};

export type RegisterResponse = {
  token: string;
  user: IndexUserResponse;
};

export function register({name, email, password, city_id}: RegisterRequest) {
  return api<RegisterResponse>("/auth/register", {
    method: "POST",
    body: { 
      name, 
      email,
      password,
      city_id
    },
  });
}
import { api } from "./api";

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  token: string;
};

export function register({name, email, password}: RegisterRequest) {
  return api<RegisterResponse>("/api/register", {
    method: "POST",
    body: { 
      name, 
      email,
      password
    },
  });
}
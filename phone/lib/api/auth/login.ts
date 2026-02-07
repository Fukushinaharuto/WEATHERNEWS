
import { api } from "../api";
import { IndexUserResponse } from "../user";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: IndexUserResponse;
};

export function login({email, password}: LoginRequest) {
  return api<LoginResponse>("/auth/login", {
    method: "POST",
    body: { email, password },
  });
}
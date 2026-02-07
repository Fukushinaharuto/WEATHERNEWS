import { api } from "@/lib/api/api";

export type IndexLocationRequest = {
  prefecture_name: string;
};

export type IndexLocationResponse = {
  cities: string[]
};

export function indexLocation({prefecture_name}: IndexLocationRequest) {
  return api<IndexLocationResponse>(`/user/location/${prefecture_name}`, {
    method: "GET",
  });
}
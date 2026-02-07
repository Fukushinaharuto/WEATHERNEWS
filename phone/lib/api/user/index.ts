import { api } from "@/lib/api/api";

export type IndexUserResponse = {
  id: string;
  name: string;
  cityId: number;
  cityName: string;
  imageUrl: string;
  // バッジ系
};

export function indexUser() {
  return api<IndexUserResponse>(`/user`, {
    method: "GET",
  });
}
import { api } from "@/lib/api/api";

export type CityRequest = {
  city_name: string;
};

export type CityResponse = {
  cityId: number;
};

export function updateCity({city_name}: CityRequest) {
  return api<CityResponse>("/user/city", {
    method: "PATCH",
    body: { city_name },
  });
}
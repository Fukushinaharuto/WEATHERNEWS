import { api } from "@/lib/api/api";

export type CityRequest = {
  post_id: number;
};


export function createLikePost({post_id}: CityRequest) {
  return api("/post/like", {
    method: "POST",
    body: { post_id },
  });
}
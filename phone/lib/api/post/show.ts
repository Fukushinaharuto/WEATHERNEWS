import { api } from "@/lib/api/api";

export type ShowPostRequest = {
  post_id: number;
};
export type ShowPostResponse = {
  id: number,
  postedBy: string,
  categoryId: number,
  weatherType : string,
  temperature: number,
  precipitationProb: number,
  windSpeed: number,
  windDirection: string,
  isLiked: boolean,
  likeCount: number,
  message: string,
  createdAt: string,
  imagesUrl: string[], 
  year: number,
  month: number,
  day: number,
  cityName: string,
};

export function showPost({post_id}: ShowPostRequest) {
  return api<ShowPostResponse>(`/post/show/${post_id}`, {
    method: "GET",
  });
}
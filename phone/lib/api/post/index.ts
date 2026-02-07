import { api } from "@/lib/api/api";

export type IndexPostRequest = {
  city_id: number;
  category_id: number
};
export type Post = {
  id: number,
  categoryId: number,
  postedBy: string;
  weatherType : string;
  temperature: number;
  isLiked: boolean,
  likeCount: number,
  message: string,
  imageUrl: string,
  createdAt: string
}
export type IndexPostResponse = {
  city_name: string;
  posts: Post[]
};

export function indexPost({city_id, category_id}: IndexPostRequest) {
  return api<IndexPostResponse>(`/post/${city_id}?category_id=${category_id}`, {
    method: "GET",
  });
}
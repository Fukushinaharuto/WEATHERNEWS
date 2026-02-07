import { api } from "@/lib/api/api";

export type IndexUserProfileResponse = {
  postCount: number;
  likeCount: number;
  activeDays: number;
  latest: {
    latestActiveDate: string;
    postCount: number,
    likeCount: number,
  }[],
}

export function indexUserProfile() {
  return api<IndexUserProfileResponse>(`/user/profile`, {
    method: "GET",
  });
}
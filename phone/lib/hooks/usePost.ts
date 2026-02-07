import { createPost, CreatePostRequest } from "@/lib/api/post/create";
import { useState } from "react";
import Toast from "react-native-toast-message";
import useSWR, { useSWRConfig } from "swr";
import { indexPost, IndexPostResponse } from "../api/post";
import { createLikePost } from "../api/post/like";
import { showPost, ShowPostResponse } from "../api/post/show";

export function useIndexPost(city_id: number, category_id: number) {
  const key = city_id
    ? `/post?city_id=${city_id}&category_id=${category_id}`
    : null;

  const { data, error, isLoading, mutate } = useSWR(
    key,
    () => indexPost({ city_id, category_id })
  );
  console.log(data);
  return {
    posts: data?.posts ?? [],
    cityName: data?.city_name ?? "",
    isLoading,
    isError: !!error,
    mutate, // ← これで再取得・再検証できる
  };
}

export function useShowPost(post_id: number) {
  const key = post_id
    ? `/post/show/${post_id}`
    : null;

  const { data, error, isLoading, mutate } = useSWR(
    key,
    () => showPost({ post_id })
  );

  return {
    post: data,
    isLoading,
    isError: !!error,
    mutate,
  };
}

export function useCreatePost() {
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);
    const submit = async (data: CreatePostRequest) => {
    setIsLoading(true);
    const listKey = `/post?city_id=${data.cityId}&category_id=${data.categoryId}`;
    const userProfileKey = "/user/profile";
    console.log(data)
    try {
      await createPost(data);
      Toast.show({
        type: "success",
        text1: "投稿しました！",
      });
      // フェッチしたデータで更新
      mutate(listKey);
      mutate(userProfileKey);
    } catch (e: any) {
      if (e?.status === 422) {
        // バリデーションエラー
        Toast.show({
          type: "error",
          text1: e.message,
        });
      } else {
        // それ以外のエラー
        Toast.show({
          type: "error",
          text1: "投稿に失敗しました",
        });
      }
      throw e;
    } finally {
      setIsLoading(false);
    }
  };
  return {
    submit,
    isLoading,
  };
}

type CreateLikePost = {
  postId: number;
  isliked: boolean;
  likeCount: number;
  cityId?: number;
  categoryId?: number;
};

export function useCreateLikePost() {
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);

  const submit = async ({ postId, isliked, likeCount, cityId, categoryId }: CreateLikePost) => {
    setIsLoading(true);
    const listKey = `/post?city_id=${cityId}&category_id=${categoryId}`;
    const showKey = `/post/show/${postId}`;
    const userProfileKey = "/user/profile";
    // ① 楽観的にキャッシュ更新（一覧）
    mutate<IndexPostResponse>(
      listKey,
      (current) => {
        if (!current) return current;
    
        return {
          ...current,
          posts: current.posts.map((p) =>
            p.id === postId
              ? {
                  ...p,
                  isLiked: !isliked,
                  likeCount: isliked ? likeCount - 1 : likeCount + 1,
                }
              : p
          ),
        };
      },
      false
    );

    // ② 楽観的にキャッシュ更新（詳細）
    mutate<ShowPostResponse>(
      showKey,
      (current) => {
        if (!current) return current;
        return {
          ...current,
          isLiked: !isliked,
          likeCount: isliked ? likeCount - 1 : likeCount + 1,
        };
      },
      false
    );
    try {
      await createLikePost({post_id: postId});
      // フェッチしたデータで更新
      mutate(listKey);
      mutate(showKey);
      mutate(userProfileKey);
    } catch {
      mutate(listKey);
      mutate(showKey);
      mutate(userProfileKey);
      Toast.show({
        type: "error",
        text1: "いいねに失敗しました！",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return {
    submit,
    isLoading,
  };
}
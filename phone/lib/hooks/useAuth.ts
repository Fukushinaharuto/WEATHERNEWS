// lib/hooks/useAuth.ts
import { HttpError } from "@/lib/api/api";
import { login, LoginRequest } from "@/lib/api/auth/login";
import { useUserStore } from "@/store/useUserStore";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { register } from "../api/auth/register";

export function useLogin() {
  // const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useUserStore((s) => s.setUser);
  const submit = async ({ email, password }: LoginRequest) => {
    setIsLoading(true);
    // この後ユーザーの更新処理を記載予定
    // 改善　const key = ユーザー更新
    try {
      const res = await login({email, password});
      SecureStore.setItemAsync("auth_token", res.token);
      SecureStore.setItemAsync("user_city", res.user.cityId.toString());
      setUser(res.user);
      Toast.show({
        type: "success",
        text1: "ログインに成功しました！",
      });
      router.replace(`/post?city_id=${res.user.cityId}`);
    }  catch (e) {
      if (e instanceof Error) {
        Toast.show({
          type: "error",
          text1: e.message,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "ログインに失敗しました！",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return {
    submit,
    isLoading,
  };
}

type Register = {
  name: string;
  email: string;
  password: string;
}
export function useRegister() {
  // const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useUserStore((s) => s.setUser);
  const submit = async ({ name, email, password }: Register) => {
    setIsLoading(true);
    // この後ユーザーの更新処理を記載予定
    // 改善　const key = ユーザー更新
    try {
      const cityId = await SecureStore.getItemAsync("user_city");
      console.log(cityId);
      if (!cityId) {
        Toast.show({
          type: "error",
          text1: "地域が選択されていません",
        });
        return;
      }
      const res = await register({name, email, password, city_id: Number(cityId)});
      SecureStore.setItemAsync("auth_token", res.token);
      setUser(res.user);
      console.log(res.token)
      Toast.show({
        type: "success",
        text1: "ユーザー登録に成功しました！",
      });
      console.log(`/post?city_id=${cityId}`)
      router.replace(`/post?city_id=${res.user.cityId}`);
    } catch (e) {
      if (e instanceof HttpError && e.status === 422) {
        // バリデーションエラー（Laravelからのメッセージ）
        Toast.show({
          type: "error",
          text1: e.message,
        });
      } else {
        // それ以外のすべてのエラー
        Toast.show({
          type: "error",
          text1: "ユーザー登録に失敗しました！",
        });
      }
    }finally {
      setIsLoading(false);
    }
  };
  return {
    submit,
    isLoading,
  };
}

import { useState } from "react";
import Toast from "react-native-toast-message";
import useSWR, { useSWRConfig } from "swr";
import { indexHelp } from "../api/help";
import { CreateHelpRequest, createHelp } from "../api/help/create";
import { createAssignments } from "../api/help/createAssignments";

export function useIndexHelp(city_id: number) {
  const key = city_id
    ? `/help?city_id=${city_id}`
    : null;

  const { data, error, isLoading, mutate } = useSWR(
    key,
    () => indexHelp({ city_id })
  );

  return {
    tasks: data ?? [],
    isLoading,
    isError: !!error,
    mutate,
  };
}

export function useCreateAssignments() {
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);
  
    const submit = async (city_id: number, help_request_id: number) => {
    setIsLoading(true);
    const key = city_id
    ? `/help?city_id=${city_id}`
    : null;
    try {
      await createAssignments({ help_request_id });
      Toast.show({
        type: "success",
        text1: "助けに向かいましょう！",
      });
      // フェッチしたデータで更新
      mutate(key);
    } catch (e: any) {
      if (e?.status === 422) {
        // バリデーションエラー
        Toast.show({
          type: "error",
          text1: e.data.message,
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

export function useCreateHelp() {
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);
  
    const submit = async (data: CreateHelpRequest) => {
    setIsLoading(true);
    const key = data.city_id
    ? `/help?city_id=${data.city_id}`
    : null;
    try {
      await createHelp(data);
      Toast.show({
        type: "success",
        text1: "助けを申請しました！",
      });
      // フェッチしたデータで更新
      mutate(key);
    } catch (e: any) {
      if (e?.status === 422) {
        // バリデーションエラー
        Toast.show({
          type: "error",
          text1: e.data.message,
        });
      } else {
        // それ以外のエラー
        Toast.show({
          type: "error",
          text1: "助けを呼ぶのに失敗しました！",
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


import useSWR from "swr";
import { indexLocation } from "../api/location";

export function useIndexLocation(prefecture_name: string) {
  const key = prefecture_name
    ? `/location/${prefecture_name}`
    : null; // city_id が無い時は取得しない

  const { data, error, isLoading, mutate } = useSWR(
    key,
    () => indexLocation({ prefecture_name })
  );

  return {
    cities: data?.cities ?? [],
    isLoading,
    isError: !!error,
    mutate, // ← これで再取得・再検証できる
  };
}

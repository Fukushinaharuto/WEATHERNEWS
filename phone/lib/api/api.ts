// lib/api.ts
import { getToken } from "./token";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

type ApiOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
};

export async function api<T>(
  endpoint: string,
  { method = "GET", body }: ApiOptions = {}
): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const token = await getToken();
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.message ?? "通信エラーが発生しました");
    }

    return json as T;
  } catch (error) {
    if ((error as Error).name === "AbortError") {
      throw new Error("通信がタイムアウトしました");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

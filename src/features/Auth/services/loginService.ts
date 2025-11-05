import { axiosInstance } from "../../../lib/axios";

export async function login(email: string, password: string) {
  try {
    const { data } = await axiosInstance.post(`/auth/login`, {
      emailId: email,
      password,
    });
    // API might return user directly or wrapped under `data.data.user`.
    // Also backend may return a token (e.g. JWT) under data.data.token or data.token.
    const user = data.data?.user ?? data.data;
    const token = data.data?.token ?? data.token ?? null;

    // If token exists, return both so callers can persist it and set auth headers.
    if (token) return { user, token };
    return user;
  } catch (err: any) {
    console.log(err.message);
  }
}

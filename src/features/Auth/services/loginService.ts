import { axiosInstance } from "../../../lib/axios";

export async function login(email:string, password:string) {
  try {
    const { data } = await axiosInstance.post(`/auth/login`, {
      emailId: email,
      password,
    });
    return data.data;
  } catch (err: any) {
    console.log(err.message);
  }
}

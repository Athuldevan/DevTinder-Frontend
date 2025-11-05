import axios from "axios";
//  production
// export const axiosInstance = axios.create({
//   baseURL: "/api/v1",check

//   withCredentials: true,
// });

// developemetn
export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1", // 👈 Only the base API URL
  withCredentials: true,
});
//baseURL: "http://127.0.0.1:8000/api/v1",
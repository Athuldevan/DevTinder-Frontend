import axios from "axios";

let baseURL = "/api/v1";

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
   baseURL = "http://127.0.0.1:8000/api/v1";
}

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

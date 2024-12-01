import { BASE_API_URL, tokenSample } from "@/config";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    const token = tokenSample;
    if (token) {
      config.headers["Authorization"] = "Token " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

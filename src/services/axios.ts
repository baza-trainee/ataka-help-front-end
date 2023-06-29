import axios from "axios";
import { toast } from "react-toastify";
import { refresh } from "./auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL,
  isServer = typeof window === "undefined";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,

  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivateJson = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivateFormData = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosPrivateFormData.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      await refresh();

      return axiosPrivateFormData(originalRequest);
    }

    return Promise.reject(error);
  },
);

axiosPrivateJson.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      await refresh();

      return axiosPrivateJson(originalRequest);
    }

    return Promise.reject(error);
  },
);

// axiosPublic.interceptors.response.use(
//   async response => {
//     if ((response.data.status = 200 && response.config.url === "/feedback")) {
//       toast.success("Дякуємо за Ваш відгук!");
//     }
//     return response;
//   },
//   async error => {
//     if (!error.response) {
//       toast.error("Сталася помилка... Спробуйте пізніше!");
//     }
//     if (error.response.status === 400 && error.config.url === "/feedback") {
//       toast.error("Сталася помилка... Спробуйте пізніше!");
//     }
//     if (error.response.status === 403 && error.config.url === "/feedback") {
//       toast.error("Сталася помилка... Спробуйте ще раз!");
//     }

//     return Promise.reject(error);
//   },
// );

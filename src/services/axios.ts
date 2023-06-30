import axios from "axios";

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
      try {
        await refresh();

        return await axiosPrivateFormData(originalRequest);
      } catch (error) {
        sessionStorage.removeItem(
          `${process.env.NEXT_PUBLIC_SESSION_STORAGE_KEY}`,
        );
        return (window.location.href = "/login");
      }
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
      try {
        await refresh();

        return await axiosPrivateJson(originalRequest);
      } catch (error) {
        sessionStorage.removeItem(
          `${process.env.NEXT_PUBLIC_SESSION_STORAGE_KEY}`,
        );
        return (window.location.href = "/login");
      }
    }

    return Promise.reject(error);
  },
);

import { axiosPrivateJson } from "../axios";

export const refresh = async () => {
  try {
    const response = await axiosPrivateJson.post("/auth/refresh");
    return response;
  } catch (error) {
    sessionStorage.removeItem(`${process.env.NEXT_PUBLIC_SESSION_STORAGE_KEY}`);
    return (window.location.href = "/login");
  }
};

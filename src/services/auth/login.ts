import { ILoginForm } from "@/types";
import { axiosPublic } from "../axios";

export const loginUser = async (data: ILoginForm) => {
  const response = await axiosPublic.post("/auth/login", data, {
    withCredentials: true,
  });

  return response;
};

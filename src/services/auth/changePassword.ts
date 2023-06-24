import { ChangePasswordType } from "@/types";
import { axiosPrivateJson } from "../axios";

export const changePassword = async (data: ChangePasswordType) => {
  const response = await axiosPrivateJson.post("/auth/change", data);
  return response;
};

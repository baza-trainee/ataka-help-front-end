import { IChangePassword } from "@/types";
import { axiosPrivateJson } from "../axios";

export const changePassword = async (data: IChangePassword) => {
  const response = await axiosPrivateJson.post("/auth/change", data);
  return response;
};

import { axiosPrivateJson } from "../axios";

export const logout = async () => {
  const response = await axiosPrivateJson.get("/auth/logout");
  return response;
};

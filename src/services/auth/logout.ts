import { axiosPrivateJson } from "../axios";

export const logout = async () => {
  const response = await axiosPrivateJson.post("/auth/logout");
  return response;
};

import { axiosPrivateJson } from "../axios";

export const refresh = async () => {
  const response = await axiosPrivateJson.post("/auth/refresh");
  return response;
};

import { axiosPrivateJson } from "../axios";

export const refresh = async () => {
  const response = await axiosPrivateJson.post("/auth/refresh"); //need to send refresh cookies
  return response;
};

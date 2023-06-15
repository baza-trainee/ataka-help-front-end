import { axiosPrivateJson } from "../axios";

export const deleteReport = async () => {
  const response = await axiosPrivateJson.delete("/reports");
  return response;
};

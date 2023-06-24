import { axiosPrivateJson } from "../axios";

export const deleteSlide = async (id: string) => {
  const response = await axiosPrivateJson.delete(`/slider/${id}`);
  return response;
};

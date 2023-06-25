import { axiosPrivateJson } from "../axios";

export const deleteCard = async (id: string) => {
  const response = await axiosPrivateJson.delete(`/cards/${id}`);
  return response;
};

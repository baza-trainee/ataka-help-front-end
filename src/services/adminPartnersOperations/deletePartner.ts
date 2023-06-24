import { axiosPrivateJson } from "../axios";

export const deletePartner = async (id: string) => {
  const response = await axiosPrivateJson.delete(`/partners/${id}`);
  return response;
};

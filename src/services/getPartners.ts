import { AxiosResponse } from "axios";
import { axiosPublic } from "./axios";
import { IPartner } from "@/types";
type Partners = {
  partners: IPartner[];
  total: number;
};
export const getPartners = async (): Promise<Partners> => {
  const { data }: AxiosResponse<Partners> = await axiosPublic.get("/partners");

  return data;
};

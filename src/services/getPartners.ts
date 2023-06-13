import { AxiosResponse } from "axios";
import { axiosPublic } from "./axios";
type Partners = {
  partners: [
    {
      thumb: string;
      alt: string;
    },
  ]; //TODO: change after partners will be finished on back-end and move type to types
};
export const getPartners = async (): Promise<Partners> => {
  const { data }: AxiosResponse<Partners> = await axiosPublic.get("/partners");

  return data;
};

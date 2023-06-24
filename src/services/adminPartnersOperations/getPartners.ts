import { AxiosResponse } from "axios";

import { axiosPublic } from "../axios";
import { Partners } from "@/types";

export const getPartners = async (): Promise<Partners> => {
  const { data }: AxiosResponse<Partners> = await axiosPublic.get("/partners");
  return data;
};

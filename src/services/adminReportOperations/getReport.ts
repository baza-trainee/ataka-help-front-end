import { AxiosResponse } from "axios";

import { Report } from "@/types";
import { axiosPublic } from "../axios";

export const getReport = async () => {
  const { data }: AxiosResponse<Report> = await axiosPublic.get("/reports");

  return data;
};

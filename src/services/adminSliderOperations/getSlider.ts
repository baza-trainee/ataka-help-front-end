import { AxiosResponse } from "axios";

import { axiosPublic } from "../axios";
import { Sliders } from "@/types";

export const getSlider = async (): Promise<Sliders> => {
  const { data }: AxiosResponse<Sliders> = await axiosPublic.get("/slider");
  return data;
};

import { AxiosResponse } from "axios";
import { axiosPublic } from "./axios";
type Sliders = {
  slider: [{ thumb: string; alt: string; title: string; id: string }];
};

export const getSlider = async (): Promise<Sliders> => {
  const { data }: AxiosResponse<Sliders> = await axiosPublic.get("/slider");

  return data;
};

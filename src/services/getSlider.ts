import { AxiosResponse } from "axios";
import { axiosPublic } from "./axios";
type Sliders = {
  slider: [{ thumb: string; alt: string; title: string }]; //TODO: change after back-end will be finished and move type to types
};

export const getSlider = async (): Promise<Sliders> => {
  const { data }: AxiosResponse<Sliders> = await axiosPublic.get("/slider");

  return data;
};

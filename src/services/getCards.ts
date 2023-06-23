import { AxiosResponse } from "axios";
import { Cards } from "@/types";
import { axiosPublic } from "./axios";

export const getCards = async (): Promise<Cards> => {
  const { data }: AxiosResponse<Cards> = await axiosPublic.get("/cards");
  return data;
};

import { AxiosResponse } from "axios";

import { Contacts } from "@/types";
import { axiosPublic } from "./axios";

export const getContacts = async (): Promise<Contacts> => {
  const { data }: AxiosResponse<Contacts> = await axiosPublic.get("/contacts");

  return data;
};

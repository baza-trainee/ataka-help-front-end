import { Contacts } from "@/types";
import { axiosPrivateJson } from "./axios";

export const sendContacts = async (contacts: Contacts) => {
  const { data } = await axiosPrivateJson.put("/contacts", contacts);
  return data;
};

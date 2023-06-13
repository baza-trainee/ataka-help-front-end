import { IFieldData } from "@/types";
import { axiosPrivateFormData } from "./axios";

export const sendCard = async (card: IFieldData) => {
  const { data } = await axiosPrivateFormData.post("/cards", card);

  return data;
};

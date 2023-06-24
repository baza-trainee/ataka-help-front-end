import { IFieldData } from "@/types";
import { axiosPrivateFormData } from "../axios";

export const sendSlide = async (slide: IFieldData) => {
  const { data } = await axiosPrivateFormData.post("/slider", slide);
  return data;
};

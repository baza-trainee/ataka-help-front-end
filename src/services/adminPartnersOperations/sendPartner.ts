import { IFieldData } from "@/types";
import { axiosPrivateFormData } from "../axios";

export const sendPartner = async (partner: IFieldData) => {
  const { data } = await axiosPrivateFormData.post("/partners", partner);
  return data;
};

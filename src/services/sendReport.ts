import { IFieldData } from "@/types";
import { axiosPrivateFormData } from "./axios";

export const sendReport = async (report: IFieldData) => {
  const { data } = await axiosPrivateFormData.put("/reports", report);

  return data;
};

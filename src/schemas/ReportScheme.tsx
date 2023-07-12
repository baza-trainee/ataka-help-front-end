import * as yup from "yup";

import { MAX_FILE_SIZE } from "@/constants";

export const ReportScheme = yup
  .object({
    thumb: yup
      .mixed()
      .test("required", "Обов'язкове поле", (value: any) => value?.length > 0)
      .test("fileSize", "Розмір файлу має бути максимум 5 MВ", (value: any) => {
        return value?.length && value[0].size <= MAX_FILE_SIZE;
      })
      .test("fileType", "Невалідний формат", (value: any) => {
        return value?.length && ["application/pdf"].includes(value[0].type);
      }),
  })
  .required();

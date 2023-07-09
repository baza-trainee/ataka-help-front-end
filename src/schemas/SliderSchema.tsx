import * as yup from "yup";

import { MAX_FILE_SIZE } from "@/constants";

export const SliderScheme = yup
  .object({
    thumb: yup
      .mixed()
      .test("required", "Обов'язкове поле", (value: any) => value?.length > 0)
      .test("fileSize", "Розмір файлу має бути максимум 5 MВ", (value: any) => {
        return value?.length && value[0].size <= MAX_FILE_SIZE;
      })
      .test("fileType", "Невалідний формат", (value: any) => {
        return (
          value?.length &&
          ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(
            value[0].type,
          )
        );
      }),
    alt: yup
      .string()
      .required("Обов'язкове поле")
      .min(10, "Опис має містити мінімум 10 символів")
      .max(30, "Опис має містити максимум 30 символів"),
    title: yup
      .string()
      .required("Обов'язкове поле")
      .min(10, "Заголовок має містити мінімум 10 символів")
      .max(60, "Опис має містити максимум 60 символів"),
  })
  .required();

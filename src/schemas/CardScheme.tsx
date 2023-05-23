import * as yup from "yup";

import { MAX_FILE_SIZE } from "@/constants";

export const CardScheme = yup
  .object({
    thumb: yup
      .mixed()
      .test("required", "Обов'язкове поле", (value: any) => value?.length > 0)
      .test("fileSize", "Розмір файлу має бути максимум 2 MВ", (value: any) => {
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
      .min(3, "Заголовок має містити мінімум 3 символи")
      .max(300, "Заголовок має містити максимум 300 символів"),
    description: yup
      .array()
      .of(
        yup.object().shape({
          item: yup.string().required(),
        }),
      )
      .required(),
  })
  .required();

import * as yup from "yup";

import { PHONE_NUMBER_REGEX } from "@/constants";

export const ContactScheme = yup
  .object({
    number: yup
      .string()
      .required("Обов'язкове поле")
      .matches(PHONE_NUMBER_REGEX, "Формат має бути: +38 ХХХ ХХХ ХХХХ"),
  })
  .required();

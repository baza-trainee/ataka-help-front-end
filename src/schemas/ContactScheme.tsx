import * as yup from "yup";

import { PHONE_NUMBER_REGEX } from "@/constants";
import { EMAIL_REGEX } from "@/constants/regex";

export const ContactScheme = yup
  .object({
    phone1: yup
      .string()
      .required("Обов'язкове поле")
      .matches(PHONE_NUMBER_REGEX, "Формат має бути: +38 ХХХ ХХХ ХХХХ"),
    phone2: yup
      .string()
      .required("Обов'язкове поле")
      .matches(PHONE_NUMBER_REGEX, "Формат має бути: +38 ХХХ ХХХ ХХХХ"),
    email: yup
      .string()
      .required("Обов'язкове поле")
      .matches(EMAIL_REGEX, "Невалідний формат"),
  })
  .required();

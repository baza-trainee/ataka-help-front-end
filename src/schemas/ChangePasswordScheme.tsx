import * as yup from "yup";

import { PASSWORD_REGEX } from "@/constants";

export const ChangePasswordScheme = yup
  .object({
    currentPassword: yup.string().required("Обов'язкове поле"),
    newPassword: yup
      .string()
      .required("Обов'язкове поле")
      .min(8, "Пароль має містити мінімум 8 символів")
      .max(14, "Пароль має містити максимум 14 символів")
      .matches(
        PASSWORD_REGEX,
        "Пароль має містити мінімум одну велику літеру, одну маленьку літеру, одну цифру та один спеціальний символ",
      ),
    newPasswordConfirmed: yup
      .string()
      .required("Обов'язкове поле")
      .oneOf([yup.ref("newPassword")], "Новий пароль не співпадає"),
  })
  .required();

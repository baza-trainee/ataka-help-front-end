import * as yup from "yup";
import { EMAIL_REGEX } from "@/constants/regex";

export const FeedbackSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Ім’я повинно бути не менше 2 знаків")
    .max(50, "Ім’я повинно бути не більше 50 знаків")
    .required("Введіть ім’я"),
  email: yup
    .string()
    .email("Введіть дійсний email")
    .matches(
      EMAIL_REGEX,
      "Введіть email, який не належить до російських поштових сервісів",
    )
    .required("Введіть email"),
  comment: yup
    .string()
    .max(300, "Просимо скоротити ваше повідомлення до 300 знаків")
    .required("Введіть повідомлення"),
});

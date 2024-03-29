import * as yup from "yup";
import {
  EMAIL_REGEX,
  EMAIL_REGEX_RU,
  NAME_REGEX,
  COMMENT_REGEX,
} from "@/constants/regex";

export const FeedbackSchema = yup.object().shape({
  name: yup
    .string()
    .required("Введіть ім’я")
    .trim()
    .matches(NAME_REGEX, "Ім'я недійсне")
    .min(2, "Ім’я повинно бути не менше 2 знаків")
    .max(50, "Ім’я повинно бути не більше 50 знаків"),
  email: yup
    .string()
    .required("Введіть email")
    .email("Введіть дійсний email")
    .matches(EMAIL_REGEX, "Введіть дійсний email")
    .matches(EMAIL_REGEX_RU, "Email з доменом .ru не підтримується"),
  comment: yup
    .string()
    .matches(COMMENT_REGEX, "Повідомлення недійсне")
    .required("Введіть повідомлення")
    .max(300, "Скоротіть повідомлення до 300 знаків"),
});

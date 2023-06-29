import * as yup from "yup";
import { EMAIL_REGEX, EMAIL_REGEX_RU, NAME_REGEX } from "@/constants/regex";

export const LoginSchema = yup.object().shape({
  login: yup.string().required("Введіть email"),
  password: yup.string().required("Введіть пароль"),
});

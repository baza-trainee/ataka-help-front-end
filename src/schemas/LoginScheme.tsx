import * as yup from "yup";


export const LoginSchema = yup.object().shape({
  login: yup.string().required("Введіть email"),
  password: yup.string().required("Введіть пароль"),
});

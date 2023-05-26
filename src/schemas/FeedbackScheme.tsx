import * as yup from "yup";

export const FeedbackSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  comment: yup.string().required(),
});

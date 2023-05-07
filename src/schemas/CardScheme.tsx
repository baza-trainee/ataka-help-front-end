import * as yup from "yup";

export const CardScheme = yup
  .object({
    thumb: yup
      .mixed()
      .test("required", "Required field", (value: any) => value?.length > 0)
      .test("fileSize", "File size is too large", (value: any) => {
        return value?.length && value[0].size <= 5242880;
      })
      .test("fileType", "Unsupported file format", (value: any) => {
        return (
          value?.length &&
          ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
        );
      }),
    alt: yup
      .string()
      .required("Required field")
      .min(3, "Must be at least 3 characters")
      .max(30, "Must be at most 30 characters"),
    title: yup
      .string()
      .required("Required field")
      .min(3, "Must be at least 3 characters")
      .max(300, "Must be at most 300 characters"),
    description: yup
      .array()
      .of(
        yup
          .string()
          .required("Remove redundant fields")
          .min(3, "Must be at least 3 characters")
      ),
  })
  .required();

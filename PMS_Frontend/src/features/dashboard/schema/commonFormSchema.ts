import * as Yup from "yup";

export const ValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  rememberMe: Yup.boolean(),
  isActive: Yup.boolean(),
  isEnable: Yup.boolean(),
  date: Yup.date().required(),
  city:Yup.string(),
  tags: Yup.string(),
  search: Yup.string(),
});
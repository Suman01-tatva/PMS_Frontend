import * as Yup from "yup";

export const ValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  isActive: Yup.boolean(),
  isEnable: Yup.boolean(),
  date: Yup.date().nullable().required("Date is required"),
  city: Yup.string().required("City is required"),
  tags: Yup.array().of(Yup.string()).min(1, "Select at least one tag"),
});

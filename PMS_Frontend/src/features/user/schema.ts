import * as Yup from "yup";

export const profileValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });


export const changePasswordSchema = Yup.object({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .required("New password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  
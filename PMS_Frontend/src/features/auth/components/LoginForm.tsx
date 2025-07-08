import React from "react";
import { Formik, type FormikHelpers, Form } from "formik";
import * as Yup from "yup";
import SubmitButton from "../../../common/components/SubmitButton";
import Checkbox from "../../../common/components/Checkbox";
import InputField from "../../../common/components/TextBox";

interface LoginFormProps {
  loading: boolean;
  error?: string | null;
  onSubmit: (
    values: LoginFormValues,
    helpers: FormikHelpers<LoginFormValues>
  ) => void | Promise<void>;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  rememberMe: Yup.boolean(),
});

const LoginForm: React.FC<LoginFormProps> = ({ loading, onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <h2 className="text-2xl font-semibold my-3 text-center text-gray-800">
            Login
          </h2>

          <div className="mb-4">
            <InputField
              name="email"
              type="email"
              placeholder="example@gmail.com"
              autoComplete="email"
            />
          </div>

          <div className="mb-4">
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <Checkbox
              name="rememberMe"
              label="Remember Me"
              checked={values.rememberMe}
              onChange={(e) => setFieldValue("rememberMe", e.target.checked)}
            />
            <a
              href="/forgotpassword"
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot password?
            </a>
          </div>
          <SubmitButton className="w-full">
            {loading || isSubmitting ? "Logging in..." : "Login"}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

import React from "react";
import { Formik, Field, ErrorMessage, type FormikHelpers, Form } from "formik";
import * as Yup from "yup";

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
      {({ isSubmitting }) => (
        <Form>
          <h2 className="text-2xl font-semibold my-3 text-center text-gray-800">
            Login
          </h2>

          <div className="mb-4">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="mb-4">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center space-x-2 text-gray-700 select-none">
              <Field
                type="checkbox"
                name="rememberMe"
                className="w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <span className="mx-2">Remember me</span>
            </label>
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full text-white rounded py-1.5 bg-gray-500 font-semibold hover:bg-gray-700 transition"
            disabled={loading || isSubmitting}
          >
            {loading || isSubmitting ? "Logging in..." : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
import React from "react";
import { Formik, Form } from "formik";
import Checkbox from "../../../common/components/Checkbox";
import "../../../common/style/formControl.css";
import Button from "../../../common/components/Button";
import { loginValidationSchema } from "../schema/loginSechema";
import { PUBLIC_ROUTES } from "../../../consts/routes";
import InputField from "../../../common/components/TextBox";
import { fieldPresets } from "../../common/types/formTypes";

const LoginForm: React.FC<LoginFormProps> = ({ loading, onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={loginValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <h2 className="text-2xl font-semibold my-3 text-center text-gray-800">
            Login
          </h2>

          <div className="mb-4">
            <InputField value={values.email} {...fieldPresets.email} />
          </div>

          <div className="mb-4">
            <InputField value={values.password} {...fieldPresets.password} />
          </div>

          <div className="flex items-center justify-between mb-6">
            <Checkbox
              name="rememberMe"
              label="Remember Me"
              checked={values.rememberMe}
              onChange={(e) => setFieldValue("rememberMe", e.target.checked)}
            />
            <a
              href={PUBLIC_ROUTES.FORGOTPASSWORD}
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot password?
            </a>
          </div>
          <div>
            <Button type="submit" className="submit-btn">
              {loading || isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import InputField from "../../../common/components/TextBox";
import Button from "../../../common/components/Button";
import "../auth.css";
import { validationSchema } from "../schema/forgotPasswordSchema";

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  loading,
  error,
  onSubmit,
}) => {
  return (
    <div>
      <div className="row mb-5">
        <div className="d-flex align-items-center justify-content-center">
          <h3 className="text-dark text-2xl font-semibold">Forgot Password</h3>
        </div>
      </div>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form id="forgotPasswordForm">
            <div className="form-input-div mt-3 relative">
              <InputField
                name="email"
                type="email"
                placeholder="example@gmail.com"
                autoComplete="email"
              />
            </div>
            {error && <div className="text-danger fs-6 mx-2 mb-3">{error}</div>}

            <div className="my-3">
              <Button
                type="submit"
                className="submit-btn"
              >
                {loading || isSubmitting ? "Submitting..." : "Reset Password"}
              </Button>
            </div>
            <div className="my-3">
              <Link
                to="/login"
                className="w-full text-white rounded py-1 bg-gray-500 font-semibold hover:bg-gray-700 transition block text-center"
              >
                Back to Login
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
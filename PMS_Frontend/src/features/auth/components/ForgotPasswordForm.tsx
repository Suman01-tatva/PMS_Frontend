import React from "react";
import { Formik, Form } from "formik";
import InputField from "../../../common/components/TextBox";
import Button from "../../../common/components/Button";
import "../auth.css";
import { validationSchema } from "../schema/forgotPasswordSchema";
import { buttonConfigs, inputFieldConfigs } from "../../common/types/formControllTypes";

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
              <InputField inputConfig={inputFieldConfigs.forgotPasswordEmail} />
            </div>
            {error && <div className="text-danger fs-6 mx-2 mb-3">{error}</div>}

            <div className="my-3">
              <Button buttonConfig={buttonConfigs.forgotPasswordBtn}>
                {loading || isSubmitting ? "Submitting..." : "Reset Password"}
              </Button>
            </div>
            <div className="my-3">
              <Button buttonConfig={buttonConfigs.backToLoginBtn}
              >
                Back to Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;

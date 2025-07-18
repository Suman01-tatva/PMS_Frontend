import React from "react";
import { Formik, Form } from "formik";
import InputField from "../../../common/components/formControlls/textBox/TextBox";
import Button from "../../../common/components/formControlls/button/Button";
import { resetPasswordValidationSchema } from "../schema/resetPasswordSchema";
import { buttonConfigs, inputFieldConfigs } from "../const/loginConst";

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  loading,
  error,
  onSubmit,
  email,
}) => {
  const togglePasswordVisibility = (fieldId: string, icon: HTMLElement) => {
    const input = document.getElementById(fieldId) as HTMLInputElement;
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  };
  return (
    <>
      <div className="row mb-5">
        <div className="d-flex align-items-center justify-content-center p-0">
          <h1 className="text-dark">Reset Password</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <Formik
          initialValues={{ Email: email, NewPassword: "", ConfirmPassword: "" }}
          enableReinitialize={true}
          validationSchema={resetPasswordValidationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form id="resetPasswordForm">
              <div className="mb-3 position-relative">
                 <InputField inputConfig={inputFieldConfigs.resetPasswordEmail} />
                <input type="hidden" name="email" id="email" value={email} />
                <span className="form-input-icon">
                  <i className="fa-solid fa-user" style={{ color: "gray" }}></i>
                </span>
              </div>
              <div className="mb-3 position-relative">
                  <InputField inputConfig={inputFieldConfigs.newPassword} />
                <span className="form-input-icon">
                  <i
                    className="fas fa-eye eye-icon"
                    style={{ color: "gray", cursor: "pointer" }}
                    onClick={(e) =>
                      togglePasswordVisibility(
                        "NewPassword",
                        e.currentTarget as HTMLElement
                      )
                    }
                  ></i>
                </span>
              </div>
              <div className="mb-3 position-relative">
                 <InputField inputConfig={inputFieldConfigs.confirmPassword} />
              </div>
              {error && <div className="text-danger fs-6 mb-3">{error}</div>}
              <div className="my-3">
                <Button buttonConfig= {buttonConfigs.resetPasswordBtn}>
                  {loading || isSubmitting ? "Resetting..." : "Reset Password"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ResetPasswordForm;

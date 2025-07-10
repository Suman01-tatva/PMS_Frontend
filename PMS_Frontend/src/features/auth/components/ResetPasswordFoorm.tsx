import React from "react";
import { Formik, Form } from "formik";
import InputField from "../../../common/components/TextBox";
import Button from "../../../common/components/Button";
import { resetPasswordValidationSchema } from "../schema/resetPasswordSchema";

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
          validationSchema={resetPasswordValidationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form id="resetPasswordForm">
              <div className="mb-3 position-relative">
                <InputField
                  name="Email"
                  type="email"
                  value={email}
                  disabled={true}
                  className="form-control p-2"
                  id="Email"
                  placeholder="Email Address*"
                />
                <input type="hidden" name="email" id="email" value={email} />
                <span className="form-input-icon">
                  <i className="fa-solid fa-user" style={{ color: "gray" }}></i>
                </span>
              </div>
              <div className="mb-3 position-relative">
                <InputField
                  name="NewPassword"
                  type="password"
                  placeholder="New Password*"
                  className="form-control p-2"
                  id="NewPassword"
                />
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
                <InputField
                  name="ConfirmPassword"
                  type="password"
                  placeholder="Confirm New Password*"
                  className="form-control p-2"
                  id="ConfirmPassword"
                />
                <span className="form-input-icon">
                  <i
                    className="fas fa-eye eye-icon"
                    style={{ color: "gray", cursor: "pointer" }}
                    onClick={(e) =>
                      togglePasswordVisibility(
                        "ConfirmPassword",
                        e.currentTarget as HTMLElement
                      )
                    }
                  ></i>
                </span>
              </div>
              {error && <div className="text-danger fs-6 mb-3">{error}</div>}
              <div className="my-3">
                <Button className="w-full submit-btn" type="submit">
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

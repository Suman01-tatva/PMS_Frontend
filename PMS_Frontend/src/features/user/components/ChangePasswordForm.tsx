import React from "react";
import { Formik, Form, Field } from "formik";
import InputField from "../../../common/components/formControlls/textBox/TextBox";
import Button from "../../../common/components/formControlls/button/Button";
import { changePasswordSchema } from "../schema";
import { profileFormInputConfig } from "../const/authConst";

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  initialValues = {
    userId: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
  onSubmit,
}) => {
  return (
    <div>
      <hr className="my-4" />
      <h5>Change Password</h5>

      <Formik
        initialValues={initialValues}
        validationSchema={changePasswordSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form id="changePasswordForm" className="row">
            <Field type="hidden" name="userId" />

            <div className="form-input-container mt-3 col-md-4 position-relative">
              <InputField
                inputConfig={profileFormInputConfig.currentPasswordField}
              />
            </div>

            <div className="form-input-container mt-3 col-md-4 position-relative">
              <InputField
                inputConfig={profileFormInputConfig.newPasswordField}
              />
            </div>

            <div className="form-input-container mt-3 col-md-4 position-relative">
              <InputField
                inputConfig={profileFormInputConfig.confirmPasswordField}
              />
            </div>

            <div className="text-end mt-4 col-12">
              <Button
                buttonConfig={profileFormInputConfig.changePasswordButton}
              >
                {isSubmitting ? "Updating..." : "Update Password"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePasswordForm;

import React from "react";
import { Formik, Form, Field } from "formik";
import InputField from "../../../common/components/TextBox";
import Button from "../../../common/components/Button";
import { changePasswordSchema } from "../schema";

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
                type="password"
                name="currentPassword"
                label="Current Password*"
                id="currentPassword"
              />
            </div>

            <div className="form-input-container mt-3 col-md-4 position-relative">
              <InputField
                type="password"
                name="newPassword"
                label="New Password*"
                id="newPassword"
              />
            </div>

            <div className="form-input-container mt-3 col-md-4 position-relative">
              <InputField
                type="password"
                name="confirmPassword"
                label="Confirm Password*"
                id="confirmPassword"
              />
            </div>

            <div className="text-end mt-4 col-12">
              <Button
                type="submit"
                className="w-auto submit-btn"
                disabled={isSubmitting}
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

import React from "react";
import { Formik, Form, Field } from "formik";
import { profileValidationSchema } from "../schema";
import InputField from "../../../common/components/TextBox";
import Button from "../../../common/components/Button";

const ProfileForm: React.FC<ProfileFormProps> = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form id="editProfileForm" className="row g-3">
          <Field type="hidden" name="userId" />

          <div className="col-md">
            <div className="mb-3 form-floating">
              <InputField
                name="name"
                type="text"
                className="form-control"
                label="Name"
                id="name"
              />
            </div>

            <div className="mb-3 form-floating">
              <InputField
                name="email"
                type="email"
                className="form-control"
                label="Email"
                id="email"
              />
            </div>

            <div className="mb-3 form-floating">
              <InputField
                name="role"
                type="text"
                className="form-control"
                label="Role"
                id="role"
                readOnly
              />
            </div>

            <div className="mb-3 form-floating">
              <InputField
                name="joinedDate"
                type="text"
                className="form-control"
                label="Joined On"
                id="joinedOn"
                readOnly
              />
            </div>
          </div>

          <div className="text-end mt-4 col-12">
            <Button
              type="submit"
              className="submit-btn w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;

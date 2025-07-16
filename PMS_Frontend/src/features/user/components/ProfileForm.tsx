import React from "react";
import { Formik, Form, Field } from "formik";
import { profileValidationSchema } from "../schema";
import InputField from "../../../common/components/formControlls/textBox/TextBox";
import Button from "../../../common/components/formControlls/button/Button";
import { profileFormInputConfig } from "../const/authConst";

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
                inputConfig={profileFormInputConfig.profileName}
              />
            </div>

            <div className="mb-3 form-floating">
              <InputField
                inputConfig={profileFormInputConfig.profileEmail}
              />
            </div>

            <div className="mb-3 form-floating">
              <InputField
                inputConfig={profileFormInputConfig.profileRole}
              />
            </div>

            <div className="mb-3 form-floating">
              <InputField
                inputConfig={profileFormInputConfig.joiningDate}
              />
            </div>
          </div>

          <div className="text-end mt-4 col-12">
            <Button
              buttonConfig={profileFormInputConfig.updateProfileButton}
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
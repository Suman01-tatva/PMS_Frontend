import {
  type CustomButtonProps,
  type InputFieldProps,
} from "../../../common/types/commonTypes";

const profileName: InputFieldProps = {
  id: "name",
  name: "name",
  type: "text",
  className: "form-controll",
  label: "Name",
};

const profileEmail: InputFieldProps = {
  name: "email",
  type: "email",
  className: "form-control",
  label: "Email",
  id: "email",
};

const joiningDate: InputFieldProps = {
  name: "joinedDate",
  type: "text",
  className: "form-control",
  label: "Joining Date",
  id: "joinedOn",
  readonly: true,
  disabled: true,
};

const profileRole: InputFieldProps = {
  name: "role",
  type: "text",
  className: "form-control",
  label: "Role",
  id: "role",
  readonly: true,
  disabled: true,
};

const updateProfileButton: Omit<CustomButtonProps, "children"> = {
  type: "submit",
  className: "submit-btn w-auto",
};

const currentPasswordField: InputFieldProps = {
  type: "password",
  name: "currentPassword",
  label: "Current Password*",
  id: "currentPassword",
};

const newPasswordField: InputFieldProps = {
  type: "password",
  name: "newPassword",
  label: "New Password*",
  id: "newPassword",
};

const confirmPasswordField: InputFieldProps = {
  type: "password",
  name: "confirmPassword",
  label: "Confirm Password*",
  id: "confirmPassword",
};

const changePasswordButton: Omit<CustomButtonProps, "children"> = {
  type: "submit",
  className: "w-auto submit-btn",
};

export const profileFormInputConfig = {
  profileName: profileName,
  profileEmail: profileEmail,
  profileRole: profileRole,
  joiningDate: joiningDate,
  updateProfileButton: updateProfileButton,
  currentPasswordField: currentPasswordField,
  newPasswordField: newPasswordField,
  confirmPasswordField: confirmPasswordField,
  changePasswordButton: changePasswordButton,
};

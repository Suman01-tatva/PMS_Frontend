import type {
  CustomButtonProps,
  InputFieldProps,
} from "../../../common/types/commonTypes";

const emailInput: InputFieldProps = {
  id: "email",
  name: "email",
  type: "email",
  label: "Email",
};

const passwordInput: InputFieldProps = {
  id: "password",
  name: "password",
  type: "password",
  label: "Password",
  autoComplete: "current-password",
};

const numberInput = {
  name: "number",
  type: "number",
  label: "Enter",
};

const dateInput = {
  name: "date",
  type: "date",
  label: "Select a date",
};

const timeInput = {
  name: "time",
  type: "time",
  label: "Select a time",
};

const textInput = {
  name: "text",
  type: "text",
  placeholder: "Enter text",
};

const resetPasswordEmailInput: InputFieldProps = {
  disabled: true,
  id: "Email",
  name: "Email",
  type: "email",
  label: "Email",
};

const newPasswordInput: InputFieldProps = {
  id: "NewPassword",
  name: "NewPassword",
  type: "password",
  label: "New Password",
};

const confirmPasswordInput: InputFieldProps = {
  id: "ConfirmPassword",
  name: "ConfirmPassword",
  type: "password",
  label: "Confirm Password",
};

const loginBtnConfig: Omit<CustomButtonProps, "children"> = {
  type: "submit",
  className: "submit-btn",
};

const resetPasswordBtnConfig: Omit<CustomButtonProps, "children"> = loginBtnConfig;

const forgotPasswordBtnConfig: Omit<CustomButtonProps, "children"> = loginBtnConfig;

const backToLoginBtnConfig: Omit<CustomButtonProps, "children"> = {
  to:"/login",
  type: "button",
  className: "submit-btn",
}

const loginDate: InputFieldProps = {
  id: "loginDate",
  name: "loginDate",
  type: "date",
  label: "Login Date",
}

export const inputFieldConfigs = {
  loginEmail: emailInput,
  loginPassword: passwordInput,
  forgotPasswordEmail: emailInput,
  numberInput: numberInput,
  dateInput: dateInput,
  timeInput: timeInput,
  textInput: textInput,
  resetPasswordEmail: resetPasswordEmailInput,
  newPassword: newPasswordInput,
  confirmPassword: confirmPasswordInput,
  loginDate: loginDate,
};

export const buttonConfigs = {
  loginBtn: loginBtnConfig,
  resetPasswordBtn: resetPasswordBtnConfig,
  forgotPasswordBtn: forgotPasswordBtnConfig,
  backToLoginBtn: backToLoginBtnConfig,
};

import type { InputProps } from "../../../common/types/types";

const emailInput: InputProps = {
  id: "email",
  name: "email",
  type: "email",
  label: "Email Address",
};

const passwordInput: InputProps = {
  id: "password",
  name: "password",
  type: "password",
  label: "Enter your password",
  autoComplete: "current-password",
};

const numberInput = {
  name: "number",
  type: "number",
  label: "Enter a number",
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

const resetPasswordEmailInput: InputProps = {
  disabled: true,
  id: "Email",
  name: "Email",
  type: "email",
  autoComplete: "email",
};

const newPasswordInput: InputProps = {
  id: "NewPassword",
  name: "NewPassword",
  type: "password",
  label: "New Password",
  autoComplete: "new-password",
};

const confirmPasswordInput: InputProps = {
  id: "ConfirmPassword",
  name: "ConfirmPassword",
  type: "password",
  label: "Confirm Password",
  autoComplete: "new-password",
};
export const fieldPresets = {
  email: emailInput,
  password: passwordInput,
  number: numberInput,
  date: dateInput,
  time: timeInput,
  text: textInput,
  resetPasswordEmail: resetPasswordEmailInput,
  newPassword: newPasswordInput,
  confirmPassword: confirmPasswordInput,
};

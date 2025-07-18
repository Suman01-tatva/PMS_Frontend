export const LOGIN = "Login";
export const LOGOUT = "Logout";
export const SUBMIT = "Submit";
export const ACCESS_TOKEN = "access_token";
export const NO_DATA_FOUND = "No data found";
export const LOADING = "Loading...";

export const ERRORS = {
  UNEXPECTED_ERROR: "An unexpected error occurred, Please try again later",
  LOGOUT_SUCCESS: "Logout Successful",
  SESSION_EXPIRED: "Session Expired, Please login again",
  FORBID: "Access Denied",
};

export const navItemClass = (path: string, currentPath: string) =>
  `px-3 py-2 rounded hover:bg-gray-500 transition-colors font-semibold ${
    currentPath === path ? "font-semibold text-white underline-none bg-gray-500" : ""
  }`;

export const inputFieldTypes = {
  TEXT: "text",
  PASSWORD: "password",
  EMAIL: "email",
  NUMBER: "number",
  DATE: "date",
  TIME: "time",
};

export type inputFieldTypes =  "email" | "text" | "password" | "number" | "date";
export type buttonTypes = "button" | "submit" | "reset";

export interface Option {
  value: string;
  label: string;
}
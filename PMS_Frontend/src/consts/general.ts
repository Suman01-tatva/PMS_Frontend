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
  `px-3 py-2 rounded hover:bg-gray-200 transition-colors ${
    currentPath === path ? "font-semibold text-blue-600 underline-none bg-gray-300" : ""
  }`;

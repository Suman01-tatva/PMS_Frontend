import Cookies from "js-cookie";

export const getAccessToken = () => {
  return Cookies.get("access_token");
};

export const storeAccessToken = (
  accessToken: string,
  isRememberMe: boolean
) => {
  Cookies.set("access_token", accessToken, {
    expires: isRememberMe ? 30 : 7,
    secure: true,
    sameSite: "strict",
  });
};

export const storeIsAuthenticated = (isAuthenticated: boolean) => {
  localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
};

export const storeUserData = (user: object) => {
  localStorage.setItem("user", user ? JSON.stringify(user) : "");
};

export const getUserData = () => {
  return localStorage.getItem("user");
};

export const removeAccessToken = () => {
  Cookies.remove("access_token");
};

export default {
  getAccessToken,
  storeAccessToken,
  removeAccessToken,
  storeUserData,
  getUserData,
};

import { GET, POST } from "../../common/api/apiConfig";
import { PUBLIC_ROUTES } from "../../consts/api.routes";

export const loginUser = (data: LoginFormValues) => {
  const response = POST<LoginFormValues, LoginResponse>(
    PUBLIC_ROUTES.LOGIN,
    data
  );
  return response;
};

export const forgotPassword = (data: ForgotPasswordFormValues) => {
  const response = POST<ForgotPasswordFormValues, ForgotPasswordResponse>(
    PUBLIC_ROUTES.FORGOTPASSWORD.replace(":email", data.email),
    data
  );
  return response;
};

export const resetPassword = (data: ForgotPasswordToken) => {
  const response = GET<ForgotPasswordToken, ResetPasswordResponse>(
    PUBLIC_ROUTES.RESETPASSWORD.replace(":token", data.token),
  );
  return response;
};

export const submitResetPassword = (data: ResetPasswordFormValues) => {
  console.log("submitResetPassword", data);
  const response = POST<ResetPasswordFormValues, ApiResponse<null>>(
    PUBLIC_ROUTES.SUBMITRESETPASSWORD,
    data
  );
  return response;
};
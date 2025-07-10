import API from "../../common/api/apiConfig";
import { PUBLIC_ROUTES } from "../../consts/api.routes";

// PRIVATE_ROUTES.USER_ROUTES.CREATE;
// export const getProduct = () => {
//   return API('GET', product.index)
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

export const loginUser = (data: LoginFormValues) => {
  const response = API<LoginFormValues, LoginResponse>(
    "POST",
    PUBLIC_ROUTES.LOGIN,
    data
  );
  return response;
};

export const forgotPassword = (data: ForgotPasswordFormValues) => {
  const response = API<ForgotPasswordFormValues, ForgotPasswordResponse>(
    "POST",
    PUBLIC_ROUTES.FORGOTPASSWORD,
    data
  );
  return response;
};

export const resetPassword = (data: ForgotPasswordToken) => {
  const response = API<ForgotPasswordToken, ResetPasswordResponse>(
    "GET",
    PUBLIC_ROUTES.RESETPASSWORD.replace(":token", data.token),
  );
  return response;
};

export const submitResetPassword = (data: ResetPasswordFormValues) => {
  console.log("submitResetPassword", data);
  const response = API<ResetPasswordFormValues, ApiResponse<null>>(
    "POST",
    PUBLIC_ROUTES.SUBMITRESETPASSWORD,
    data
  );
  return response;
};

// export const getEditProduct = (id) => {
//   return API('GET', `${product.index}/${id}`)
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export const updateProduct = (id, data) => {
//   return API('PUT', `${product.index}/${id}`, data)
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

// export const deleteProduct = (id) => {
//   return API('DELETE', `${product.index}/${id}`)
//     .then((res) => {
//       return res;
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

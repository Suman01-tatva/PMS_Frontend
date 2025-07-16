import { GET, POST } from "../../common/api/apiConfig";
import { PRIVATE_ROUTES } from "../../consts/api.routes";

export const getProfileDetails = (id: string) => {
    const response = GET<GetProfileDetailsRequest, ApiResponse<ProfileFormValues>>(
      PRIVATE_ROUTES.PROFILE.replace(":id", id),
    );
    return response;
  };

  export const updateProfileDetails = (data: ProfileFormValues) => {
    const response = POST<ProfileFormValues, ApiResponse<ProfileFormValues>>(
      PRIVATE_ROUTES.UPDATE_PROFILE,
      data
    );
    return response;
  };

  export const changePassword = (data: ChangePasswordFormValues) => {
    const response = POST<ChangePasswordFormValues, ApiResponse<string>>(
      PRIVATE_ROUTES.CHANGE_PASSWORD,
      data
    );
    return response;
  };
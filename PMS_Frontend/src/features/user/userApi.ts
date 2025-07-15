import { GET } from "../../common/api/apiConfig";
import { PRIVATE_ROUTES } from "../../consts/api.routes";

export const getProfileDetails = (id: string) => {
    const response = GET<GetProfileDetailsRequest, ApiResponse<ProfileFormValues>>(
      PRIVATE_ROUTES.PROFILE.replace(":id", id),
    );
    return response;
  };
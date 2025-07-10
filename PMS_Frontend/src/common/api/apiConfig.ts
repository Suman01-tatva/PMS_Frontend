import axios, { type AxiosResponse } from "axios";
import { getAccessToken, removeAccessToken } from "../../utils/authUtils";
import toastService from "../../utils/toastr";

export default async function API<TRequest, TResponse>(
  method: string,
  endPoint: string,
  data: TRequest | null = null
): Promise<AxiosResponse<TResponse>> {
  console.log(data, endPoint, method);
  try {
    const response = await axios({
      method: method,
      url: endPoint,
      headers: {
        Authorization: `Bearer ${getAccessToken()}`
      },
      data: data,
      params: data && data ? data : null,
    });
    return response;
  } catch (error) {
    if (error.response?.status === 401) {
      toastService.error("Session expired! Please, Login again.");
      removeAccessToken();
      window.location.href = `/login`;
      throw new Error("Session expired!");
    } else {
      throw error.response;
    }
  }
}

export { API };
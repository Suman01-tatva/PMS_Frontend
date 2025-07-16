// import axios, { type AxiosResponse } from "axios";
// import { getAccessToken, removeAccessToken } from "../../utils/authUtils";
// import toastService from "../../utils/toastr";

// export default async function API<TRequest, TResponse>(
//   method: string,
//   endPoint: string,
//   data: TRequest | null = null
// ): Promise<AxiosResponse<TResponse>> {
//   console.log(data, endPoint, method);
//   try {
//     const response = await axios({
//       method: method,
//       url: endPoint,
//       headers: {
//         Authorization: `Bearer ${getAccessToken()}`
//       },
//       data: data,
//       params: data && data ? data : null,
//     });
//     return response;
//   } catch (error) {
//     if (error.response?.status === 401) {
//       toastService.error("Session expired! Please, Login again.");
//       removeAccessToken();
//       window.location.href = `/login`;
//       throw new Error("Session expired!");
//     } else {
//       throw error.response;
//     }
//   }
// }

// export { API };
import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import { getAccessToken, removeAccessToken } from "../../utils/authUtils";
import toastService from "../../utils/toastr";
import { ERRORS } from "../../consts/general";
import { PUBLIC_ROUTES } from "../../consts/routes";
import type { ErrorResponseData } from "../types/formControllTypes";
const BASE_URL = import.meta.env.API_URL || "http://localhost:5254/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    const data = error.response?.data as ErrorResponseData | undefined;

    if (status === 401) {
      toastService.error(ERRORS.SESSION_EXPIRED);
      removeAccessToken();
      window.location.href = PUBLIC_ROUTES.LOGIN;
      return Promise.reject(new Error(ERRORS.SESSION_EXPIRED));
    }

    if (status === 403) {
      toastService.error(ERRORS.FORBID);
      return Promise.reject(new Error(ERRORS.FORBID));
    }

    const message = data?.errors
      ? Object.values(data.errors).flat().join(", ")
      : data?.message || ERRORS.UNEXPECTED_ERROR;

    toastService.error(message);
    return Promise.reject(new Error(message));
  }
);

export async function GET<TRequest, TResponse>(
  url: string,
  params?: TRequest
): Promise<AxiosResponse<TResponse>> {
  return apiClient.get<TResponse>(url, { params });
}

export async function POST<TRequest, TResponse>(
  url: string,
  data: TRequest
): Promise<AxiosResponse<TResponse>> {
  return apiClient.post<TResponse>(url, data);
}

export async function PUT<TRequest, TResponse>(
  url: string,
  data: TRequest
): Promise<AxiosResponse<TResponse>> {
  return apiClient.put<TResponse>(url, data);
}

export async function DELETE<TResponse>(
  url: string,
  data?: Record<string, undefined>,
  params?: Record<string, undefined>
): Promise<AxiosResponse<TResponse>> {
  return apiClient.delete<TResponse>(url, { data, params });
}

export { apiClient };

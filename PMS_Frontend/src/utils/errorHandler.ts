import { AxiosError } from "axios";

// Define the structure of the API error response
export interface ApiErrorResponse {
  data: {
    isSuccess: boolean;
    statusCode: number;
    message: string;
    data: null | unknown;
  };
  status: number;
  statusText: string;
}

export const handleApiError = (
  error: unknown,
  defaultMessage: string = "An error occurred"
): string => {
  if (isAxiosError(error)) {
    const apiError = error as ApiErrorResponse;
    return apiError.data.message || defaultMessage;
  }
  return defaultMessage;
};

const isAxiosError = (error: unknown): error is ApiErrorResponse => {
  return (error as AxiosError).isAxiosError === true;
};

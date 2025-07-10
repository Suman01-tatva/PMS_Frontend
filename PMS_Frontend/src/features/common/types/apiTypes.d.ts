declare interface ApiResponse<T> {
  isSuccess: boolean;
  statusCode: number;
  data: T;
  message?: string;
}
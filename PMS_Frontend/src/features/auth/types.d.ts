declare interface LoginResponse {
  isSuccess: boolean;
  data: {
    user?: {
      id: string;
      name: string;
      email: string;
    };
    token?: string;
  };
  message?: string;
}

declare interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}
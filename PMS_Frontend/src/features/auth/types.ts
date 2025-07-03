export interface LoginUser {
  rememberMe: boolean;
  email: string;
  password: string;
}

export interface LoginResponse {
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

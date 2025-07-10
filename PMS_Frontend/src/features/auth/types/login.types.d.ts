declare interface LoginFormProps {
  loading: boolean;
  error?: string | null;
  onSubmit: (
    values: LoginFormValues,
    helpers: FormikHelpers<LoginFormValues>
  ) => void | Promise<void>;
}

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

declare interface User {
  id: string;
  name: string;
  email: string;
}

declare interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

declare interface LoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

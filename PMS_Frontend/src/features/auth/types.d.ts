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

declare interface ForgotPasswordFormValues {
  email: string;
}
 
declare interface ForgotPasswordFormProps {
  loading: boolean;
  error?: string | null;
  successMessage?: string | null;
  onSubmit: (
    values: ForgotPasswordFormValues,
    helpers: FormikHelpers<ForgotPasswordFormValues>
  ) => void | Promise<void>;
}
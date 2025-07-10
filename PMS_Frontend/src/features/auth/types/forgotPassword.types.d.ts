declare interface ForgotPasswordFormValues {
  email: string;
}

declare interface ForgotPasswordToken {
  token: string;
}

declare interface ForgotPasswordResponse {
  isSuccess: boolean;
  statusCode: number;
  data: {
    message: string;
  };
  message?: string;
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

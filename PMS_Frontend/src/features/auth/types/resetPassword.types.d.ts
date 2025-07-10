declare interface ResetPasswordPayload {
  email: string;
}

declare interface ResetPasswordResponse {
  isSuccess: boolean;
  statusCode: number;
  data: {
    email: string;
  };
  message?: string;
}

declare interface ResetPasswordFormValues {
  Email: string;
  NewPassword: string;
  ConfirmPassword: string;
}

declare interface ResetPasswordFormProps {
  loading: boolean;
  error?: string | null;
  successMessage?: string | null;
  onSubmit: (
    values: ResetPasswordFormValues,
    helpers: FormikHelpers<ResetPasswordFormValues>
  ) => void | Promise<void>;
  email?: string;
}

interface ProfileFormValues {
    userId: string;
    name: string;
    email: string;
    role: string;
    joinedOn: string;
  }
  
  interface ProfileFormProps {
    initialValues: ProfileFormValues;
    onSubmit: (values: ProfileFormValues) => void;
  }

  interface ChangePasswordFormValues {
    userId?: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }
  
  interface ChangePasswordFormProps {
    initialValues?: ChangePasswordFormValues;
    onSubmit: (values: ChangePasswordFormValues) => void | Promise<void>;
  }

  interface GetProfileDetailsRequest {
    id: string;
  }
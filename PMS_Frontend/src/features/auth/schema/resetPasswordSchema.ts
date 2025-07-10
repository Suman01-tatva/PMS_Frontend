import * as Yup from 'yup';

export const resetPasswordValidationSchema = Yup.object({
  Email: Yup.string(),
  NewPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      'Password must be strong'
    )
    .required('New password is required'),
  ConfirmPassword: Yup.string()
    .oneOf([Yup.ref('NewPassword')], 'Passwords must match')
    .required('Confirm password is required'),
});
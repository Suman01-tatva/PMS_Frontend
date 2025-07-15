import { useField, type FieldHookConfig } from "formik";

export const useFieldError = (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const showError = Boolean(meta.touched && meta.error);
  const helperText = showError ? meta.error : "";
  return {
    field,
    showError,
    helperText,
  };
};

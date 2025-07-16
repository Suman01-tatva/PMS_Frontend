import type { Dayjs } from "dayjs";
import { useField, useFormikContext, type FieldHookConfig } from "formik";

export const useFieldError = <T = string | string[] | number | Dayjs | null>(
  props: FieldHookConfig<T>
) => {
  const [field, meta] = useField<T>(props);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  const showError = Boolean(meta.touched && meta.error);
  const helperText = showError ? meta.error : "";

  return {
    field,
    showError,
    helperText,
    setValue: (val: T) => setFieldValue(field.name, val),
    setTouched: (val: boolean) => setFieldTouched(field.name, val),
  };
};

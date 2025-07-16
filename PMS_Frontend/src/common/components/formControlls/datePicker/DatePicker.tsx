import React from "react";
import { useFieldError } from "../../../../hooks/useFieldError";
import { FormHelperText, FormControl, FormLabel } from "@mui/material";
import type { ExtraProps } from "../../../types/formControllTypes";
import type { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type DatePickerFieldProps = ExtraProps & {
  name: string;
  label?: string;
  fullWidth?: boolean;
  disabled?: boolean;
};

const DatePickerField: React.FC<{inputConfig :DatePickerFieldProps}> = ({
  inputConfig
}) => {
  const { name, label, fullWidth = true, disabled = false } = inputConfig;
  const { field, showError, helperText, setValue, setTouched } =
    useFieldError<Dayjs | null>({ name });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl fullWidth={fullWidth} error={showError} margin="normal">
        {label && <FormLabel>{label}</FormLabel>}
        <DatePicker
          value={field.value || null}
          onChange={(date) => setValue(date)}
          onBlur={() => setTouched(true)}
          disabled={disabled}
          slotProps={{
            textField: {
              variant: "outlined",
              fullWidth,
              error: showError,
              helperText,
            },
          }}
          {...field}
        />
        {showError && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </LocalizationProvider>
  );
};

export default DatePickerField;

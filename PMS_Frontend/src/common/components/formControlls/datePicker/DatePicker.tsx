import React from "react";
import { useFieldError } from "../../../../hooks/useFieldError";
import { FormControl, FormLabel } from "@mui/material";
import type { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { DatePickerFieldProps } from "./types";

const DatePickerField: React.FC<{ dateConfig: DatePickerFieldProps }> = ({
  dateConfig,
}) => {
  const { name, label, fullWidth = true, disabled = false } = dateConfig;
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
      </FormControl>
    </LocalizationProvider>
  );
};

export default DatePickerField;

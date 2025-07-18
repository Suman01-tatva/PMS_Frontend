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
  const { label, fullWidth = true, disabled = false, ...props } = dateConfig;
  const { field, showError, helperText, setValue } =
    useFieldError<Dayjs | null>({ ...props });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl fullWidth={fullWidth} error={showError} margin="normal">
        {label && <FormLabel>{label}</FormLabel>}
        <DatePicker
          {...field}
          value={field.value || null}
          onChange={(date) => {
            setValue(date);
          }}
          disabled={disabled}
          slotProps={{
            textField: {
              variant: "outlined",
              fullWidth,
              error: showError,
              helperText,
            },
          }}
          format="DD/MM/YYYY"
        />
      </FormControl>
    </LocalizationProvider>
  );
};

export default DatePickerField;

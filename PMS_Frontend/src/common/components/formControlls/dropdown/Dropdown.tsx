import React from "react";
import { type SelectChangeEvent } from "@mui/material/Select";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
} from "@mui/material";
import { useFieldError } from "../../../../hooks/useFieldError";
import type { DropdownFieldProps } from "./types";

const DropdownField: React.FC<{ dropDownConfig: DropdownFieldProps }> = ({
  dropDownConfig,
}) => {
  const {
    fullWidth = true,
    defaultValue = "",
    ...props
  } = dropDownConfig;

  const { field, showError, helperText, setValue } = useFieldError({...props});

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth={fullWidth} error={showError} margin="normal">
      <div></div>
      <InputLabel id={`${props.name}-label`}>{props.label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={props.name}
        label={props.label}
        value={field.value ?? defaultValue}
        onChange={handleChange}
        {...field}
      >
        {defaultValue && (
          <MenuItem value="" disabled>
            {defaultValue}
          </MenuItem>
        )}
        {props.options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {showError && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default DropdownField;

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

const DropdownField: React.FC<DropdownFieldProps> = ({
  name,
  label,
  options,
  fullWidth = true,
  defaultValue = "",
}) => {
  const { field, showError, helperText, setValue } = useFieldError(name);

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl fullWidth={fullWidth} error={showError} margin="normal">
      <div>
        
      </div>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        label={label}
        value={field.value ?? defaultValue}
        onChange={handleChange}
        {...field}
      >
        {defaultValue && (
          <MenuItem value="" disabled>
            {defaultValue}
          </MenuItem>
        )}
        {options.map((option) => (
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

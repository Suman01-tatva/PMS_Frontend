import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  type SelectChangeEvent,
  FormHelperText,
} from "@mui/material";
import { useFieldError } from "../../../../hooks/useFieldError";
import type { MultiSelectDropdownProps } from "./types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  name,
  label,
  options,
  className = "",
}) => {
  const { field, showError, helperText, setValue } = useFieldError<
    string[] | string
  >({
    name,
  });
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl fullWidth sx={{ m: 1 }} error={showError}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={`${name}-select`}
        multiple
        value={field.value || []}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        MenuProps={MenuProps}
        renderValue={(selected) =>
          Array.isArray(selected) ? selected.join(", ") : ""
        }
        className={className}
        {...field}
      >
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

export default MultiSelectDropdown;

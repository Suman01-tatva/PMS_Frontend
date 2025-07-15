import React from "react";
import { useField } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

interface Option {
  value: string | number;
  label: string;
}

interface DropdownFieldProps {
  name: string;
  label: string;
  options: Option[];
  fullWidth?: boolean;
  defaultValue?: string | number;
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  name,
  label,
  options,
  fullWidth = true,
  defaultValue = "Select Options",
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (event: SelectChangeEvent<typeof field.value>) => {
    const { value } = event.target;
    helpers.setValue(value);
  };

  const showError = Boolean(meta.touched && meta.error);

  return (
    <FormControl fullWidth={fullWidth} error={showError} margin="normal">
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        label={label}
        value={field.value || defaultValue}
        onChange={handleChange}
      >
        <MenuItem
          value={defaultValue}
          selected
          disabled
        >
          Select an option
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {showError && <FormHelperText>{meta.error}</FormHelperText>}
    </FormControl>
  );
};

export default DropdownField;
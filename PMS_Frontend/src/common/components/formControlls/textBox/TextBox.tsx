import React from "react";
import { TextField } from "@mui/material";
import { useFieldError } from "../../../../hooks/useFieldError";
import type { InputFieldProps } from "../../../types/formControllTypes";

const InputField: React.FC<{ inputConfig: InputFieldProps }> = ({ inputConfig }) => {
  const { type = "text", disabled = false, readonly = false, onChange , ...props } = inputConfig;
  const { field, showError, helperText } = useFieldError(props);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };
  
  return (
    <div>
      <TextField
        id={props.id}
        name={props.name}
        type={type}
        label={props.label}
        autoComplete={props.autoComplete}
        className={props.className}
        fullWidth
        variant="outlined"
        disabled={disabled}
        aria-readonly={readonly}
        onChange={handleOnChange}
        error={showError}
        helperText={helperText}
        {...field}
      />
    </div>
  );
};

export default InputField;

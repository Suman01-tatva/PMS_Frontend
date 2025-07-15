import React from "react";
import { TextField } from "@mui/material";
import { useFieldError } from "../../hooks/useFieldError";
import type { InputFieldProps } from "../types/types";

const InputField: React.FC<{ inputConfig: InputFieldProps }> = ({ inputConfig }) => {
  const { type = "text", disabled = false, readonly = false, ...props } = inputConfig;
  const { field, showError, helperText } = useFieldError(props);
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
        error={showError}
        helperText={helperText}
        {...field}
      />
    </div>
  );
};

export default InputField;

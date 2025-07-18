import React from "react";
import type { CustomCheckboxProps } from "./types";
import MuiCheckbox from "@mui/material/Checkbox";
import { useFieldError } from "../../../../hooks/useFieldError";

const CustomCheckbox: React.FC<{ checkBoxConfig: CustomCheckboxProps }> = ({
  checkBoxConfig,
}) => {
  const { label, id, className, labelClassName, ...props } = checkBoxConfig;
  const { field } = useFieldError<boolean | string>({ ...props });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    props.onChange(e, props.checked);
  };

  return (
    <label
      htmlFor={id}
      className={`flex items-center space-x-2 select-none cursor-pointer text-[var(--colorGrey)] ${
        labelClassName || ""
      }`}
    >
      <MuiCheckbox
        id={id}
        className={className}
        onChange={onChange}
        {...props}
      />
      <span className="mx-2">{label}</span>
    </label>
  );
};

export default CustomCheckbox;

import React from "react";
import MuiCheckbox, { type CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

interface CustomCheckboxProps extends MuiCheckboxProps {
  label: string;
  id?: string;
  className?: string;
  labelClassName?: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  id,
  className,
  labelClassName,
  ...rest
}) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center space-x-2 select-none cursor-pointer text-[var(--colorGrey)] ${labelClassName || ""}`}
    >
      <MuiCheckbox
        id={id}
        className={className}
        {...rest}
      />
      <span className="mx-2">{label}</span>
    </label>
  );
};

export default CustomCheckbox;

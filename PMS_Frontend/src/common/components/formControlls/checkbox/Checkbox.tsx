import React from "react";
import type { CustomCheckboxProps } from "./types";
import MuiCheckbox from "@mui/material/Checkbox";

const CustomCheckbox: React.FC<{ checkBoxConfig: CustomCheckboxProps }> = ({
  checkBoxConfig,
}) => {
  const { label, id, className, labelClassName, ...props } = checkBoxConfig;
  return (
    <label
      htmlFor={id}
      className={`flex items-center space-x-2 select-none cursor-pointer text-[var(--colorGrey)] ${
        labelClassName || ""
      }`}
    >
      <MuiCheckbox id={id} className={className} {...props} />
      <span className="mx-2">{label}</span>
    </label>
  );
};

export default CustomCheckbox;

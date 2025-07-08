import React, { type InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id, className, ...rest }) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center space-x-2 select-none cursor-pointer text-[var(--colorGrey)] ${className || ""}`}
    >
      <input
        type="checkbox"
        id={id}
        className="w-4 h-4 rounded border-2 focus:ring-2 focus:ring-[var(--colorLightgreen)] border-[var(--colorGrey)] text-[var(--colorBlack)]"
        {...rest}
      />
      <span className="mx-2">{label}</span>
    </label>
  );
};

export default Checkbox;
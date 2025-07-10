import React from "react";
import { useField, type FieldHookConfig } from "formik";

const InputField: React.FC<InputProps & FieldHookConfig<string>> = ({
  label,
  type = "text",
  placeholder,
  className,
  disabled=false,
  readonly,
  value,
  id,
  name,
  autoComplete,
}) => {
  const [field, meta] = useField({ name, type });
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id || name}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        {...field}
        id={id || name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        readOnly={readonly}
        value={value}
        className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-10 ${meta.touched && meta.error ? "focus:ring-2 focus:ring-red-500 focus:border-red-300" : "focus:ring-2 focus:ring-gray-500 focus:border-gray-300"} ${className || ""}`}
      />
      {meta.touched && meta.error ? (
        <p className="text-red-500 text-sm mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default InputField;
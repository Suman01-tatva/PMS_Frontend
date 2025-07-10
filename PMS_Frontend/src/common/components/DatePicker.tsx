import React from "react";
import { useField } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker"; 
import ReactDatePickerProps from "react-datepicker";

type DatePickerFieldProps = ExtraProps &
  Omit<ReactDatePickerProps, "value" | "onChange" | "name"> & {
    name: string;
  };

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  placeholder = "Select a date",
  className,
  disabled,
  id,
  name,
  errorRingColor = "red",
  ringColor = "gray",
  ...datepickerProps
}) => {
  const [field, meta, helpers] = useField<Date | null>(name);

  const selectedDate =
    field.value && !(field.value instanceof Date)
      ? new Date(field.value)
      : (field.value as Date | null);

  const error = meta.touched && meta.error;

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

      <DatePicker
        id={id || name}
        selected={selectedDate}
        onChange={(date: Date | null) => helpers.setValue(date)}
        onBlur={() => helpers.setTouched(true)}
        placeholderText={placeholder}
        disabled={disabled}
        className={`w-full p-3 border rounded-md focus:outline-none transition
          ${error ? `border-${errorRingColor}-300 focus:ring-2 focus:ring-${errorRingColor}-500`
                   : `border-${ringColor}-300 focus:ring-2 focus:ring-${ringColor}-500`}
          ${className || ""}`}
        {...datepickerProps}
      />

      {error ? (
        <p className="text-red-500 text-sm mt-1">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default DatePickerField;
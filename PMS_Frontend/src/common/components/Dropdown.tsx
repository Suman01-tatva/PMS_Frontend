import React from 'react';
import { type FieldProps } from 'formik';

declare interface DropdownFieldProps extends FieldProps {
  label: string;
  options: DropdownOption[];
  placeholder?: string;
}

const Dropdown: React.FC<DropdownFieldProps> = ({
  field, 
  form: { touched, errors }, 
  label,
  options,
  placeholder,
}) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <div className="mb-4">
      <label htmlFor={field.name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        id={field.name}
        {...field}
        className={`h-14 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          hasError ? 'border-red-500' : ''
        }`}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hasError && (
        <p className="text-red-500 text-xs italic mt-1">{errors[field.name] as string}</p>
      )}
    </div>
  );
};

export default Dropdown;
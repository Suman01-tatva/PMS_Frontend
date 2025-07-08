import React, { useState, useRef, useEffect } from 'react';
import { useField, useFormikContext } from 'formik';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectDropdownProps {
  name: string;
  label: string;
  options: Option[];
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ name, label, options }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedValues: string[] = Array.isArray(field.value) ? field.value : [];

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (optionValue: string) => {
    let newSelectedValues;
    if (selectedValues.includes(optionValue)) {
      newSelectedValues = selectedValues.filter((val) => val !== optionValue);
    } else {
      newSelectedValues = [...selectedValues, optionValue];
    }
    setFieldValue(name, newSelectedValues);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isError = meta.touched && meta.error;

  return (
    <div className="relative" ref={dropdownRef}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div
        className={`mt-1 p-2 border rounded-md shadow-sm cursor-pointer ${
          isError ? 'border-red-500' : 'border-gray-300'
        }`}
        onClick={handleToggle}
      >
        {selectedValues.length > 0
          ? `${selectedValues.length} selected`
          : `Select ${label.toLowerCase()}`}
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              className={`p-2 cursor-pointer hover:bg-gray-100 ${
                selectedValues.includes(option.value) ? 'bg-blue-100' : ''
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}

      {isError && <p className="mt-1 text-sm text-red-600">{meta.error}</p>}
    </div>
  );
};

export default MultiSelectDropdown;
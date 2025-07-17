export interface Option {
  value: string;
  label: string;
}

export interface DropdownFieldProps {
  name: string;
  label: string;
  options: Option[];
  fullWidth?: boolean;
  defaultValue?: string | number;
  onChange?:  (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface MultiSelectDropdownProps {
  name: string;
  label: string;
  options: Option[];
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  hoverStyle?: React.CSSProperties;
}

export interface CancelButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export interface SubmitButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export interface ToggleProps {
  label?: string;
  initial?: boolean;
  onToggle?: (state: boolean) => void;
}

export interface PopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  size?: "sm" | "lg" | "xl" | "md";
  children?: React.ReactNode;
}

export interface ExtraProps {
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  errorRingColor?: string;
  ringColor?: string;
}

export interface DropdownOption {
  value: string;
  label: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface MultiSelectDropdownProps {
  name: string;
  label: string;
  options: Option[];
  className?: string;
}

export interface InputFieldProps extends CommonProps{
  type: 'email' | 'text'| 'password' | 'number' | 'date' ;
  autoComplete?: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface CommonProps {
  id: string;
  name: string;
  value?: string | number | boolean;
  label?: string;
  placeholder?: string;
  className?: string;
}

export interface ErrorResponseData {
  errors?: Record<string, string[]>;
  message?: string;
  [key: string]: undefined | string | Record<string, string[]>;
}

export interface CheckboxProps {
  label: string;
  name: string;
  disabled?: boolean;
  className?: string;
}

export interface CustomButtonProps extends ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  to?: string;  
}

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
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
}
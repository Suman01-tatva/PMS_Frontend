declare interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
}

declare interface CancelButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

declare interface SubmitButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

declare interface ToggleProps {
  label?: string;
  initial?: boolean;
  onToggle?: (state: boolean) => void;
}

declare interface PopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  size?: 'sm' | 'lg' | 'xl' | 'md';
  children?: React.ReactNode;
}

declare interface ExtraProps {
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  errorRingColor?: string;
  ringColor?: string; 
}

declare interface DropdownOption {
  value: string;
  label: string;
}

declare interface Option {
  value: string;
  label: string;
}

declare interface MultiSelectDropdownProps {
  name: string;
  label: string;
  options: Option[];
}

declare interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  name: string;
  autoComplete?: string;
}

interface ErrorResponseData {
  errors?: Record<string, string[]>;
  message?: string;
  [key: string]: undefined | string | Record<string, string[]>;
}
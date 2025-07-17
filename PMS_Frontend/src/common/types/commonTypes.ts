export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  hoverStyle?: React.CSSProperties;
}

export interface InputFieldProps extends CommonFieldProps {
  type: "email" | "text" | "password" | "number" | "date";
  autoComplete?: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CommonFieldProps {
  id: string;
  name: string;
  value?: string | number | boolean;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export interface ErrorResponseData {
  errors?: Record<string, string[]>;
  message?: string;
  [key: string]: undefined | string | Record<string, string[]>;
}

export interface CustomButtonProps extends ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  to?: string;
}
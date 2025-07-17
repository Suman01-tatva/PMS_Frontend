export interface InputFieldProps {
  id: string;
  name: string;
  value?: string | number | boolean;
  label?: string;
  placeholder?: string;
  className?: string;
  type: "email" | "text" | "password" | "number" | "date";
  autoComplete?: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

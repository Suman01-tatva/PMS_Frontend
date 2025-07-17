import type { SwitchProps } from "@mui/material";

export interface ToggleSwitchProps extends SwitchProps {
  id: string;
  name: string;
  value?: string | number | boolean;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

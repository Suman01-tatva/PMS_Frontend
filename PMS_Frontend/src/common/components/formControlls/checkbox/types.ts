import { type CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";

export interface CustomCheckboxProps extends MuiCheckboxProps {
  label: string;
  id?: string;
  name?: string;
  className?: string;
  labelClassName?: string;
}
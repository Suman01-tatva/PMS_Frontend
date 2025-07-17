import { type ButtonProps as MUIButtonProps } from "@mui/material";

export interface ButtonProps extends MUIButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  hoverStyle?: React.CSSProperties;
  to?: string;
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

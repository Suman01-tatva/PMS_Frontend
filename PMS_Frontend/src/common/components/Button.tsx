import React from "react";
import { Button as MUIButton, type ButtonProps as MUIButtonProps } from "@mui/material";

interface CustomButtonProps extends MUIButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  style,
  ...rest
}) => {
  return (
    <MUIButton
      variant="contained" 
      type={type}
      onClick={onClick}
      className={className}
      style={style}
      fullWidth={true}
      {...rest} 
    >
      {children}
    </MUIButton>
  );
};

export default Button;
import React, { type ReactNode } from "react";
import {
  Button as MUIButton,
  type ButtonProps as MUIButtonProps,
} from "@mui/material";
import { Link } from "react-router";

interface CustomButtonProps extends MUIButtonProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  to?:string;
}

const Button: React.FC<{ buttonConfig: CustomButtonProps, children: React.ReactNode }> = ({
  buttonConfig,
  children,
}) => {
  const {
    onClick,
    type = "button",
    className,
    style,
    to,
    ...props
  } = buttonConfig;
  return (
    <MUIButton
      variant="contained"
      component={to ? Link : "button"}
      type={type}
      to={to}
      onClick={onClick}
      className={className}
      style={style}
      fullWidth={true}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
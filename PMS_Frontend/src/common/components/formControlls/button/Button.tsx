import { Button as MUIButton } from "@mui/material";
import { Link } from "react-router";
import { type ButtonProps } from "./types";

const Button: React.FC<{
  buttonConfig: ButtonProps;
  children: React.ReactNode;
}> = ({ buttonConfig, children }) => {
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
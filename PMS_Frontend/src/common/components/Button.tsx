// src/components/Button.tsx
import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  style,
  hoverStyle,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-1 px-3 rounded font-bold transition-colors duration-300 ${
        className || ""
      }`}
      style={isHovered ? { ...style, ...hoverStyle } : style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;


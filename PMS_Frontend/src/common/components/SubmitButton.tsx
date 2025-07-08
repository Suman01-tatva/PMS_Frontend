// src/components/SubmitButton.tsx
import React from "react";
import Button from "./Button";

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  onClick,
  className,
}) => (
  <Button
    type="submit"
    onClick={onClick}
    className={className}
    style={{
      backgroundColor: "var(--colorDarkGray)",
      color: "var(--colorLight)",
      border: "1px solid var(--colorDarkGray)",
    }}
    hoverStyle={{
      backgroundColor: "var(--colorDark)",
      color: "var(--colorLight)",
      border: "1px solid var(--colorDark)",
    }}
  >
    {children}
  </Button>
);

export default SubmitButton;

// src/components/CancelButton.tsx
import React from "react";
import Button from "./Button";

const CancelButton: React.FC<CancelButtonProps> = ({
  children,
  onClick,
  className,
}) => (
  <Button
    type="button"
    onClick={onClick}
    className={className}
    style={{
      backgroundColor: "var(--colorLight)",
      color: "var(--colorDarkGray)",
      border: "1px solid var(--colorDarkGray)",
    }}
    hoverStyle={{
      backgroundColor: "var(--colorDarkGray)",
      color: "var(--colorLight)",
      border: "1px solid var(--colorDarkGray)",
    }}
  >
    {children}
  </Button>
);
export default CancelButton;

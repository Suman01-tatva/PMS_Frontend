declare interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
}

declare interface CancelButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

declare interface SubmitButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

declare interface ToggleProps {
    label?: string;
    initial?: boolean;
    onToggle?: (state: boolean) => void;
  }
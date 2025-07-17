export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
}
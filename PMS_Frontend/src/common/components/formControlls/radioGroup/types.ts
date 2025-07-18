import type { Option } from "../../../../consts/general";

export interface RadioGroupFieldProps {
  label?: string;
  name: string;
  value: string;
  options: Option[];
  orientation?: "row" | "column";
  disabledOptions?: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
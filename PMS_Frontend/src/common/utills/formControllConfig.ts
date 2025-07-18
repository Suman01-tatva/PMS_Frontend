import type {
  buttonTypes,
  inputFieldTypes,
  Option,
} from "../../consts/general";
import type { ButtonProps } from "../components/formControlls/button/types";
import type { DatePickerFieldProps } from "../components/formControlls/datePicker/types";
import type {
  DropdownFieldProps,
  MultiSelectDropdownProps,
} from "../components/formControlls/dropdown/types";
import type { SearchBarProps } from "../components/formControlls/searchBar/types";
import type { InputFieldProps } from "../components/formControlls/textBox/types";

export const GetInputFieldConfig = (
  name: string,
  type: inputFieldTypes,
  label?: string,
  placeholder?: string,
  className?: string,
  autoComplete?: string,
  disabled?: boolean,
  readonly?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string | number | boolean
): InputFieldProps => {
  const config: InputFieldProps = {
    id: "test",
    name: name,
    type: type ?? "text",
    value: value ?? "",
    label: label,
    placeholder: placeholder,
    className: className,
    autoComplete: autoComplete,
    disabled: disabled,
    readonly: readonly,
    onChange: onChange,
  };
  return config;
};

export const GetDatePickerConfig = (
  id?: string,
  name?: string,
  className?: string,
  fullWidth?: boolean,
  disabled?: boolean,
  onChange?: () => void
): DatePickerFieldProps => {
  const config: DatePickerFieldProps = {
    id: "test",
    name: name,
    className: className,
    disabled: disabled,
    fullWidth: fullWidth,
    onChange: onChange,
  };
  return config;
};

export const GetButtonConfig = (
  type?: buttonTypes,
  className?: string,
  style?: React.CSSProperties,
  disabled?: boolean,
  hoverStyle?: React.CSSProperties,
  to?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
): ButtonProps => {
  const config: ButtonProps = {
    onClick: onClick,
    type: type ?? "button",
    className: className,
    style: style,
    disabled: disabled,
    hoverStyle: hoverStyle,
    to: to,
  };
  return config;
};

export const GetDropdownConfig = (
  name: string,
  label: string,
  options: Option[],
  fullWidth?: boolean,
  defaultValue?: string | number,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
): DropdownFieldProps => {
  const config: DropdownFieldProps = {
    name: name,
    label: label,
    options: options,
    fullWidth: fullWidth,
    defaultValue: defaultValue,
    onChange: onChange,
  };
  return config;
};

export const GetMultiSelectDropdownConfig = (
  name: string,
  label: string,
  options: Option[],
  className?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
): MultiSelectDropdownProps => {
  const config: MultiSelectDropdownProps = {
    name: name,
    label: label,
    options: options,
    className: className,
    onChange: onChange,
  };
  return config;
};

export const GetSearchBarConfig = (
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
  name?: string,
  id?: string,
  className?: string
): SearchBarProps => {
  const config: SearchBarProps = {
    id: id,
    name: name,
    className: className,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
  };
  return config;
};

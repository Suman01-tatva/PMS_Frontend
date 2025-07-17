import React from "react";
import { Switch } from "@mui/material";
import { useField } from "formik";
import type { ToggleSwitchProps } from "./types";

const ToggleSwitch: React.FC<{
  switchConfig: ToggleSwitchProps;
}> = ({ switchConfig }) => {
  const { ...props } = switchConfig;

  const [switchField, meta] = useField({ ...props });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switchField.onChange(e);
    if (props.onChange) props.onChange(e);
  };
  return (
    <>
      <Switch
        {...switchField}
        checked={switchField.value}
        className={props.className}
        disabled={props.disabled}
        onChange={handleChange}
      />
      <span className="ml-2">{props.label}</span>
      {meta.touched && meta.error ? (
        <div className="text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export default ToggleSwitch;

import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import type { RadioGroupFieldProps } from "./types";


const RadioGroupField: React.FC<RadioGroupFieldProps> = ({
  label,
  name,
  value,
  options,
  orientation = "column",
  disabledOptions = [],
  onChange,
  className = "",
}) => {
  return (
    <FormControl className={className}>
      {label && (
        <FormLabel id={`${name}-label`}>
          {label}
        </FormLabel>
      )}
      <RadioGroup
        row={orientation === "row"}
        aria-labelledby={`${name}-label`}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            disabled={disabledOptions.includes(option.value)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupField;

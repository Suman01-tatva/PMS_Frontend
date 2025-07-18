// import React from "react";
// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   OutlinedInput,
//   Select,
//   type SelectChangeEvent,
//   FormHelperText,
//   Checkbox,
//   ListItemText,
// } from "@mui/material";
// import { useFieldError } from "../../../../hooks/useFieldError";
// import type { MultiSelectDropdownProps, Option } from "./types";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const MultiSelectDropdown: React.FC<{multiSelectDropdownConfig : MultiSelectDropdownProps}> = ({
//  multiSelectDropdownConfig
// }) => {
//   const {
//     className = "", ...props }  = multiSelectDropdownConfig;
//   const { field, showError, helperText, setValue } = useFieldError<
//     string[] | string
//   >({
//    ...props
//   });
//   const handleChange = (event: SelectChangeEvent<string[]>) => {
//     const {
//       target: { value },
//     } = event;
//     setValue(typeof value === "string" ? value.split(",") : value);
//   };

//   return (
//     <FormControl fullWidth sx={{ m: 1 }} error={showError} className="mx-0">
//       <InputLabel id={`${name}-label`}>{props.label}</InputLabel>
//       <Select
//         labelId={`${name}-label`}
//         id={`${name}-select`}
//         multiple
//         value={field.value || []}
//         onChange={handleChange}
//         input={<OutlinedInput label={props.label} />}
//         MenuProps={MenuProps}
//         renderValue={(selected) =>
//           Array.isArray(selected) ? selected.join(", ") : ""
//         }
//         className={className}
//         {...field}
//       >
//         {props.options.map((option: Option) => (
//           <MenuItem key={option.value} value={option.label}>
//             <Checkbox checked={props.options.includes(option)} />
//             <ListItemText primary={option.label} />
//           </MenuItem>
//         ))}
//       </Select>
//       {showError && <FormHelperText>{helperText}</FormHelperText>}
//     </FormControl>
//   );
// };

// export default MultiSelectDropdown;
import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  type SelectChangeEvent,
  FormHelperText,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useFieldError } from "../../../../hooks/useFieldError";
import type { MultiSelectDropdownProps, Option } from "./types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MultiSelectDropdown: React.FC<{
  multiSelectDropdownConfig: MultiSelectDropdownProps;
}> = ({ multiSelectDropdownConfig }) => {
  const { className = "", ...props } = multiSelectDropdownConfig;
  const { field, showError, helperText, setValue } = useFieldError<string[]>({
    ...props,
  });

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };

  const selectedValues = field.value || [];

  return (
    <FormControl fullWidth sx={{ m: 1 }} error={showError} className="mx-0">
      <InputLabel id={`${field.name}-label`}>{props.label}</InputLabel>
      <Select
        labelId={`${field.name}-label`}
        id={`${field.name}-select`}
        multiple
        value={selectedValues}
        onChange={handleChange}
        input={<OutlinedInput label={props.label} />}
        MenuProps={MenuProps}
        renderValue={(selected) =>
          props.options
            .filter((option : Option) => selected.includes(option.value
            ))
            .map((option) => option.label)
            .join(", ")
        }
        className={className}
        {...field}
      >
        {props.options.map((option:Option) => (
          <MenuItem key={option.value} value={option.value}>
            <Checkbox checked={selectedValues.includes(option.value)} />
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
      {showError && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default MultiSelectDropdown;

// import React from "react";
// // import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
// import { TextField } from "@mui/material";
// import { useFieldError } from "../../../../hooks/useFieldError";
// import type { InputFieldProps } from "./types";
// // import Visibility from '@mui/icons-material/Visibility';
// // import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const InputField: React.FC<{ inputConfig: InputFieldProps }> = ({
//   inputConfig,
// }) => {
//   const {
//     type = "text",
//     disabled = false,
//     readonly = false,
//     onChange,
//     ...props
//   } = inputConfig;
//   const { field, showError, helperText } = useFieldError(props);

//   const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (onChange) {
//       onChange(event);
//     }
//   };

//   // const [showPassword, setShowPassword] = React.useState(false);

//   // const handleClickShowPassword = () => setShowPassword((show) => !show);

//   // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//   //   event.preventDefault();
//   // };

//   // const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//   //   event.preventDefault();
//   // };

//   return (
//     <div>
//       <TextField
//         id={props.id}
//         name={props.name}
//         type={type}
//         label={props.label}
//         autoComplete={props.autoComplete}
//         className={props.className}
//         fullWidth
//         variant="outlined"
//         disabled={disabled}
//         aria-readonly={readonly}
//         onChange={handleOnChange}
//         error={showError}
//         helperText={helperText}
//         {...field}
//       />
//     </div>
//   );
// };

// export default InputField;
import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFieldError } from "../../../../hooks/useFieldError";
import type { InputFieldProps } from "./types";

const InputField: React.FC<{ inputConfig: InputFieldProps }> = ({ inputConfig }) => {
  const {
    type = "text",
    disabled = false,
    readonly = false,
    onChange,
    ...props
  } = inputConfig;

  const { field, showError, helperText } = useFieldError(props);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <TextField
        id={props.id}
        name={props.name}
        type={type === "password" && showPassword ? "text" : type}
        label={props.label}
        autoComplete={props.autoComplete}
        className={props.className}
        fullWidth
        variant="outlined"
        disabled={disabled}
        aria-readonly={readonly}
        onChange={handleOnChange}
        error={showError}
        helperText={helperText}
        InputProps={
          type === "password"
            ? {
                ...field,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleShowPassword}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                      size="small"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : { ...field }
        }
      />
    </div>
  );
};

export default InputField;

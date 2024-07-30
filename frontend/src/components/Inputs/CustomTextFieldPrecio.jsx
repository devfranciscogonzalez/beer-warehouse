import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

const CustomTextFieldPrice = ({ control, name, label, currency="CLP", ...rest }) => {
  const renderEndAdornment = (isDirty, error) => {
    return error ? (
      <ErrorOutlineIcon sx={{ color: "error.main" }} />
    ) : isDirty ? (
      <CheckCircleOutlineIcon sx={{ color: "primary.main" }} />
    ) : null;
  };

  const renderHelperText = (isDirty, error) => {
    return error ? error.message : isDirty ? "Correcto" : "";
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error, isDirty } }) => (
        <TextField
          {...field}
          id={name}
          label={label}
          variant="outlined"
          type="text"
          fullWidth
          error={!!error}
          autoComplete={name}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{currency}</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {renderEndAdornment(isDirty, error)}
              </InputAdornment>
            ),
          }}
          helperText={renderHelperText(isDirty, error)}
          FormHelperTextProps={{
            sx: {
              color: isDirty && !error ? "primary.main" : "error.main",
            },
          }}
          {...rest}
        />
      )}
    />
  );
};

export default CustomTextFieldPrice;

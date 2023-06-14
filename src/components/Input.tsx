import { Controller } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";

import { InputType } from "@/data/formData";

const Input: React.FC<InputType> = ({
  control,
  data: { name, inputProps, rules },
}) => {
  return (
    <FormControl fullWidth sx={{ mb: "10px" }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <TextField
            required={!!rules?.required}
            helperText={error?.message}
            error={!!error}
            {...inputProps}
            {...field}
          />
        )}
      />
    </FormControl>
  );
};

export default Input;

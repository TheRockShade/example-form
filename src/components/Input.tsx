import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface InputProps {
  control: any;
  inputData: {
    name: string;
    inputProps: Object;
    rules?: {
      required: boolean;
    };
  };
}

const Input: React.FC<InputProps> = ({
  control,
  inputData: { name, inputProps, rules },
}) => {
  return (
    <FormControl fullWidth sx={{ mb: '10px' }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <TextField
            required={rules?.required}
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

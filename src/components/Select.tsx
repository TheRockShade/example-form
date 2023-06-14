import { Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select as MSelect,
  MenuItem,
} from "@mui/material";

import { InputType } from "@/data/formData";

const Select: React.FC<InputType> = ({
  control,
  data: { name, label, options, rules },
}) => {
  const labelId = `${name}-label`;

  return (
    <FormControl fullWidth sx={{ mb: "10px" }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <MSelect labelId={labelId} label={label} {...field}>
            {options?.map((option) => (
              <MenuItem key={option.id} {...option.otherProps}>
                {option.label}
              </MenuItem>
            ))}
          </MSelect>
        )}
      />
    </FormControl>
  );
};

export default Select;

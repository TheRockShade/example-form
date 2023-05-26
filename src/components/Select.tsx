import {
  FormControl,
  InputLabel,
  Select as MSelect,
  MenuItem,
} from "@mui/material";
import { Controller } from "react-hook-form";

interface SelectProps {
  control: any;
  data: {
    id: number;
    name: string;
    label: string;
    options: any;
    rules?: {
      required: boolean;
    };
  };
}

const Select: React.FC<SelectProps> = ({
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
            {options.map((option: any) => (
              <MenuItem value={option.value} key={option.value}>
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

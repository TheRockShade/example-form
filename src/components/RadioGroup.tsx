import { Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  RadioGroup as MRadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { InputType } from "@/data/formData";

const RadioGroup: React.FC<InputType> = ({
  data: { label, name, rules, inputs },
  control,
}) => {
  return (
    <FormControl fullWidth sx={{ mb: "10px" }}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field }) => (
          <MRadioGroup row {...field}>
            {inputs?.map((input) => (
              <FormControlLabel
                key={input.id}
                control={<Radio />}
                {...input.otherProps}
              />
            ))}
          </MRadioGroup>
        )}
      />
    </FormControl>
  );
};

export default RadioGroup;

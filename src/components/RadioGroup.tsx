import { Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  RadioGroup as MRadioGroup,
} from "@mui/material";
import Radio from "./Radio";
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
              <Radio key={input.id} {...input.otherProps} />
            ))}
          </MRadioGroup>
        )}
      />
    </FormControl>
  );
};

export default RadioGroup;

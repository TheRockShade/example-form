import { Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  RadioGroup as MRadioGroup,
} from "@mui/material";
import Radio from "./Radio";

interface RadioProps {
  data: any;
  control: any;
}

const RadioGroup: React.FC<RadioProps> = ({ data: {label, name, rules, inputs}, control }) => {
  return (
    <FormControl fullWidth sx={{ mb: "10px" }}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field }) => (
          <MRadioGroup row {...field} defaultValue={"male"}>
            {inputs.map((input: any) => (
              <Radio key={input.value} {...input} />
            ))}
          </MRadioGroup>
        )}
      />
    </FormControl>
  );
};

export default RadioGroup;

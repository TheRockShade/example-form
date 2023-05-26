import { FormControlLabel, Radio as MRadio } from "@mui/material";

interface RadioProps {
  label: string;
  value: string;
}

const Radio: React.FC<RadioProps> = (props) => {
  return <FormControlLabel control={<MRadio />} {...props} />;
};

export default Radio;

import { FormControlLabel, FormControlLabelProps, Radio as MRadio } from "@mui/material";

const Radio: React.FC<FormControlLabelProps> = (props) => {
  return <FormControlLabel {...props} control={<MRadio/>} />;
};

export default Radio;

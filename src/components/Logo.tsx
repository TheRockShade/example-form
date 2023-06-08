import { Typography } from "@mui/material";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div>
      <Typography variant="h6" component="h1">
        Form Example
      </Typography>
    </div>
  );
};

export default Logo;

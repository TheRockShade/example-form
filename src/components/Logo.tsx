import styled from "@emotion/styled";
import { Typography } from "@mui/material";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const Container = styled("div")({
    color: "#fff",
    textDecoration: "none",
  });

  return (
    <Container>
      <Typography variant="h6" component="h1">
        Form Example
      </Typography>
    </Container>
  );
};

export default Logo;

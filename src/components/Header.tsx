import { AppBar, Container, Toolbar } from "@mui/material";

import Logo from "@/components/Logo";

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: "20px" }}>
      <Container>
        <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

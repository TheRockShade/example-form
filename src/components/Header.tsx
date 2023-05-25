import { AppBar, Toolbar } from "@mui/material";
import Logo from "./Logo";

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: "10px" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

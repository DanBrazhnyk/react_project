import * as React from "react";
import AppBar from "@mui/material/AppBar";
const Header = ({ children }) => {
  return (
    <AppBar
      position="static"
      sx={{
        flexGrow: 1,
        height: "688px",
        background: "linear-gradient(to right, #2A5D67, #2D8DAC)",
      }}
    >{children}</AppBar>
  );
};
export default Header;

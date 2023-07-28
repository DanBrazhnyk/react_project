import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import {Nike} from "../importsStyledImages/importsStyledImages"
import {Men,Women,Kids,Collection,Search,Cart} from "../importsBtn/ImportsBtn"
const NavBar = () => {
  return (
    <Toolbar sx={{ borderBottom: "1px solid white",}}>
    <Nike/>
    <Men/>
    <Women/>
    <Kids/>
    <Collection/>
    <Search/>
    <Cart/>
    </Toolbar>
  );
};
export default NavBar;
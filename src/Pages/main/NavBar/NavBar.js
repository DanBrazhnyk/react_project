import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Nike } from "../importsStyledImages/importsStyledImages";
import { Search } from "../../importsBtn/ImportsBtn";
import Cart from "../Cart/Cart";
import { useState, useEffect } from "react";
import { IconButton } from "@mui/joy";
const NavBar = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Toolbar sx={{ borderBottom: "1px solid white" }}>
      <Nike width="60px" height="21px" marginLeft="68px" />
      {children}
     
        <Search />
      
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
  
    </Toolbar>
  );
};
export default React.memo(NavBar);

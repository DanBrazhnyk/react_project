import * as React from "react";
import Button from "@mui/material/Button";
const NavButton =(props)=>{
    return(
        <Button
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "600",
          color: props.color,
          marginLeft:props.marginLeft
        }}
        onClick={props.onClick}
      >
        {props.name}
      </Button>
    )
}
export default NavButton
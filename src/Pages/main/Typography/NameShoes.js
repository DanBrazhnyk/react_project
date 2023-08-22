import * as React from "react";
import Typography from "@mui/material/Typography";
const NameShoes =(props)=>{
    return(
        <Typography
        style={{
          color: "white",
          fontSize:"25px",
          fontWeight: "600",
          textAlign: "center",
          marginTop:props.marginTop,
        }}
      >
       {props.children}
      </Typography>
    )
}
export default NameShoes
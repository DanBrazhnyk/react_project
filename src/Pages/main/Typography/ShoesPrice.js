import * as React from "react";
import Typography from "@mui/material/Typography";
const ShoesPrice =({children})=>{
    return(
        <Typography
        style={{
          color: "white",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        {children}
      </Typography>
    )
}
export default ShoesPrice
import * as React from "react";
import Typography from "@mui/material/Typography";
const FooterTypography =({children})=>{
    return(
        <Typography
            sx={{
              margin: "26px 0px 20px 30px",
              fontWeight: "bold",
              color: "white",
              fontSize: "20px",
            }}
          >
            {children}
          </Typography>
    )
}
export default FooterTypography
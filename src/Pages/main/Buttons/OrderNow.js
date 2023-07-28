import * as React from "react";
import Button from "@mui/material/Button";
const Order =()=>{
    return(
        <Button
              sx={{
                fontFamily: "Montserrat, sans-serif",
                left: "160px",
                fontWeight: "800",
                height: "60px",
                width: "150px",
                backgroundColor: "#54BACF",
                color: "white",
                borderRadius: "18px",
                top: "-150px",
              }}
            >
              Order now
            </Button>
    )
}
export default Order
import * as React from "react";
import Button from "@mui/material/Button";
const ShopNow =({ onClick })=>{
    return(
        <Button
        sx={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "800",
          height: "60px",
          width: "150px",
          backgroundColor: "#54BACF",
          color: "white",
          borderRadius: "18px",
          top: "22px",
          left: "40px",
        }}
        onClick={onClick}
      >
        Shop now
      </Button>
    )
}
export default ShopNow
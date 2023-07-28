import * as React from "react";
import Box from "@mui/material/Box";
import {Airmax} from "../../importsStyledImages/importsStyledImages";
import {MenTypography} from "../../importsTypography/importsTypography";
import ShopNow from "../../Buttons/ShopNow";
const AvailableMen = () => {
  return (
    <Box
    sx={{
      backgroundColor: "#2A5D67",
      borderRadius: "20px",
      padding: "10px",
      height: "300px",
      width: "220px",
    }}
  >
    <Airmax/>
    <MenTypography/>
    <ShopNow/>
    </Box>
  );
};
export default AvailableMen;
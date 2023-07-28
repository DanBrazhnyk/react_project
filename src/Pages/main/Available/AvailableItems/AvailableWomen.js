import * as React from "react";
import Box from "@mui/material/Box";
import {Airforce} from "../../importsStyledImages/importsStyledImages";
import {WomenTypography} from "../../importsTypography/importsTypography";
import ShopNow from "../../Buttons/ShopNow";
const AvailableWomen = () => {
  return (
    <Box
    sx={{
      backgroundColor: "#2A5D67",
      borderRadius: "20px",
      padding: "10px",
      height: "300px",
      width: "220px",
      marginLeft:"33px"
    }}
  >
    <Airforce/>
    <WomenTypography/>
    <ShopNow/>
    </Box>
  );
};
export default AvailableWomen;
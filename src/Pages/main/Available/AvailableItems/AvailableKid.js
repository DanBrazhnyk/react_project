import * as React from "react";
import Box from "@mui/material/Box";
import {OrangeAirmax} from  "../../importsStyledImages/importsStyledImages";
import {KidsTypography} from "../../importsTypography/importsTypography";
import ShopNow from "../../Buttons/ShopNow";
const AvailableKid = () => {
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
    <OrangeAirmax/>
    <KidsTypography/>
    <ShopNow/>
    </Box>
  );
};
export default AvailableKid;
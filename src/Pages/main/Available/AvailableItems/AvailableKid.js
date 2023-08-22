import * as React from "react";
import Box from "@mui/material/Box";
import {OrangeAirmax} from  "../../importsStyledImages/importsStyledImages";
import {KidsTypography} from "../../importsTypography/importsTypography";
const AvailableKid = ({children}) => {
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
    <OrangeAirmax  height="118px"
        width="210px"
        marginLeft="8px"
        marginTop="25px"/>
    <KidsTypography/>
    {children}
    </Box>
  );
};
export default AvailableKid;
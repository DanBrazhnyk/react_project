import * as React from "react";
import Box from "@mui/material/Box";
import {Airmax} from "../../importsStyledImages/importsStyledImages";
import {MenTypography} from "../../importsTypography/importsTypography";
const AvailableMen = ({children}) => {
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
    <Airmax height="118px" width="210px" marginLeft="8px" marginTop="25px"/>
    <MenTypography/>
    {children}
    </Box>
  );
};
export default AvailableMen;
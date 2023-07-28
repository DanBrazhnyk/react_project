import * as React from "react";
import Box from "@mui/material/Box";
import {JustDoIt,NikeCapslock,NikeShoesCollection} from '../importsTypography/importsTypography'
import {Jordan,MainLine,MiddleLine,BelowLine} from "../importsStyledImages/importsStyledImages"
import Order from "../Buttons/OrderNow";
const BrandedHeaderWithQuote = () => {
  return (
    <Box sx={{ px: "24px" }}>
    <NikeShoesCollection/>
    <JustDoIt/>
    <Order/>
    <MainLine/>
    <MiddleLine/>
    <BelowLine/>
    <NikeCapslock/>
    <Jordan />
  </Box>
  );
};
export default BrandedHeaderWithQuote;
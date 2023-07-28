import * as React from "react";
import Box from "@mui/material/Box";
import AvailableProducts from "../Typography/AvailableProducts";
import AvailableMen from "./AvailableItems/AvailableMen";
import AvailableWomen from "./AvailableItems/AvailableWomen";
import AvailableKid from "./AvailableItems/AvailableKid";
import AvailableNew from "./AvailableItems/AvailableNew";
const AvailableProductsItems = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#E2E7F7",
        height: "770px",
        zIndex: -1,
      }}
    >
      <AvailableProducts />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <AvailableMen />
        <AvailableWomen />
        <AvailableKid />
        <AvailableNew />
      </Box>
    </Box>
  );
};
export default AvailableProductsItems;

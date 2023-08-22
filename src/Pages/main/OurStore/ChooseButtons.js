import * as React from "react";
import { Box } from "@mui/material";
const ButtonsContainer = ({children}) => {
  return (
    <Box
    sx={{
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      marginLeft: "39%",
      marginTop: "25px",
    }}
  >
    {children}
    </Box>
  );
};
export default React.memo(ButtonsContainer);
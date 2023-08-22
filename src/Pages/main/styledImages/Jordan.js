import * as React from "react";
import { jordan } from "../../importsImg/ImportsImg";
import zIndex from "@mui/material/styles/zIndex";
export const Jordan = () => {
  return (
    <img
      src={jordan}
      alt="error "
      style={{
        height:"680px",
        width:"680px",
        position: "absolute",
        marginLeft: "620px",
        marginTop: "-534px",
        zIndex:1
      }}
    />
  );
};

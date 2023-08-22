import * as React from "react";
import Button from "@mui/material/Button";
const Women = ({ onClick }) => {
  return (
    <Button
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "600",
        color: "white",
        marginLeft:"40px"
      }}
      onClick={onClick }
    >
      Women
    </Button>
  );
};
export default Women;

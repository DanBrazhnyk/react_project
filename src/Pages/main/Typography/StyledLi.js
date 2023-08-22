import * as React from "react";

const Li = ({children}) => {
  return (
    <li
              style={{
                marginLeft: "10px",
                marginBottom: "26px",
                color: "white",
                fontSize: "16px",
              }}
            >
             {children}
            </li>
  );
};
export default Li;
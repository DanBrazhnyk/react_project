import * as React from "react";

const ContainerStore = ({children}) => {
  return (
    <div
    id="our-store"
    style={{
      height: "880px",
      backgroundColor: "#CACFDF",
      marginTop: "-30px",
    }}
  >
      {children}
  </div>
    
  );
};
export default React.memo(ContainerStore);
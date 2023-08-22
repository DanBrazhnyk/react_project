import * as React from "react";
const ContainerNewProducts =({children})=>{
return(
    <div
    id="new-products"
    style={{
      width: "100%",
      backgroundColor: "#E2E7F7",
      height: "630px",
      marginTop: "-30px",
    }}
  >
    {children}
    </div>
)
}
export default ContainerNewProducts
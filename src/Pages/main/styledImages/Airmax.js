import * as React from "react";
import { airmax } from "../../importsImg/ImportsImg";
const Airmax = (props) => {
  return (
    <img
      src={airmax}
      alt="error"
      style={{
        height: props.height,
        width: props.width,
        marginLeft:props.marginLeft,
        marginTop: props.marginTop,
      }}
    />
  );
};
export default Airmax;

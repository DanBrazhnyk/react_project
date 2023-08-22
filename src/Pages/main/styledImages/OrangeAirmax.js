import * as React from "react";
import { airmaxOrange } from "../../importsImg/ImportsImg";
const OrangeAirmax = (props) => {
  return (
    <img
      src={airmaxOrange}
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
export default OrangeAirmax;

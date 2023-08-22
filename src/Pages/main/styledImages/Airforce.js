import * as React from "react";
import { airforce } from "../../importsImg/ImportsImg";
const Airforce = (props) => {
  return (
    <img
      src={airforce}
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
export default Airforce;

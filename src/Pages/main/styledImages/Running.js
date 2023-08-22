import * as React from "react";
import { running } from "../../importsImg/ImportsImg";
const Running = (props) => {
  return (
    <img
      src={running}
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
export default Running;

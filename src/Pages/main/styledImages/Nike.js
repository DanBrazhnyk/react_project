import * as React from "react";
import { nike } from "../../importsImg/ImportsImg";
const Nike = (props) => {
  return (
    <img style={{marginLeft:props.marginLeft, width:props.width , height:props.height ,paddingTop:props.paddingTop}} src={nike} alt="error" />
  );
};
export default Nike;

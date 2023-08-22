import * as React from "react";
import { motion } from "framer-motion";
const OurStoreButton = (props) => {
  return (
    <motion.button
            whileHover={{ scale: 1.1 }}
            style={{
              border: "none",
              borderRadius: "12px",
              width: props.width,
              height:  props.height,
              backgroundColor:props.backgroundColor ,
              color:props.color,
              marginLeft:props.marginLeft,
              fontWeight: "600",
              fontSize: "15px",
            }}
            onClick={props.onClick}
            transition={{ type: "spring", stiffness: 1000, damping: 10 }}
          >{props.children}
          </motion.button>
  );
};
export default React.memo(OurStoreButton);
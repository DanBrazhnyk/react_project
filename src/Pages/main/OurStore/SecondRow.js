import * as React from "react";
import { motion } from "framer-motion";
const SecondRowShoes =(props)=>{
    return(
        <motion.div
        animate={{
            marginLeft:props.marginLeft,
          }}
          style={{
            display: props.display,
            marginLeft: "330px",
            marginTop: props.marginTop,
            gap: "40px",
          }}
        >
        {props.children}
      </motion.div>
    )
}
export default SecondRowShoes
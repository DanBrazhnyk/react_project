import * as React from "react";
import { motion } from "framer-motion";
const FirstRowShoes =(props)=>{
    return(
        <motion.div
          animate={{ marginLeft:props.marginLeft }}
          style={{
            marginTop: "40px",
            display:props.display,
            marginBottom: "45px",
            gap: "40px",
          }}
        >
        {props.children}
      </motion.div>
    )
}
export default FirstRowShoes
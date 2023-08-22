import * as React from "react";
import { motion } from "framer-motion";
const ItemWrapper =(props)=>{
    return(
      <motion.div
      style={{
        display:props.display,
        backgroundColor: "#2A5D67",
        borderRadius: "20px",
        boxShadow: "5px 24px 15px grey",
        height: "250px",
        width: "190px",
      }}
      initial={{ y: -100, x: -100 }}
      whileInView={{ y: 0, x: 0 }}
      whileHover={{ boxShadow: "0px 0px 0px", scale: 1.2 }}
      transition={{ type: "spring", duration: 0.6 }}
    >
      {props.children}
    </motion.div>
    )
}
export default ItemWrapper
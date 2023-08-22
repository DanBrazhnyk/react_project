import * as React from "react";
import { motion } from "framer-motion";
const  NewProductsTitle =()=>{
    return(
        <motion.p
        style={{
          paddingTop: "120px",
          color: "#2A5D67",
          fontWeight: "bold",
          fontSize: "28px",
          marginLeft: "140px",
        }}
        initial={{ x: -1000 }}
        whileInView={{ x: 0 }}
        transition={{ type: "tween", duration: 0.4 }}
      >
        New Products
      </motion.p>
    )
}
export default NewProductsTitle
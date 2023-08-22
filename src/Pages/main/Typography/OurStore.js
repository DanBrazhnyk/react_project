import * as React from "react";
import { motion } from "framer-motion";
const OurStore = () => {
  return (
    <motion.p
    style={{
      color: "#2A5D67",
      fontSize: "29px",
      fontWeight: "bold",
      paddingTop: "80px",
      marginLeft: "230px",
    }}
    initial={{ x: -1000 }}
    whileInView={{ x: 0 }}
    transition={{ type: "tween", duration: 0.4 }}
  >
    Our store
  </motion.p>
  );
};
export default React.memo(OurStore);
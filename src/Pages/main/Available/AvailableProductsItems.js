import * as React from "react";

import AvailableProducts from "../Typography/AvailableProducts";
import { motion } from "framer-motion";
const AvailableProductsItems = ({children}) => {
  return (
    <div
      id="available"
      style={{
        width: "100%",
        backgroundColor: "#E2E7F7",
        height: "770px",
        zIndex: -1,
      }}>
      <AvailableProducts />
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
        initial={{ x: 1000 }}
        whileInView={{ x: 0 }}
        transition={{ type: "tween", duration: 0.8 }}>
        {children}
      </motion.div>
    </div>
  );
};
export default React.memo(AvailableProductsItems);

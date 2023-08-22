import React from "react";
import { useState } from "react";
import { shoppingCart } from "../../importsImg/ImportsImg";
import { motion } from "framer-motion";
const Cart = ({ cartItems, setCartItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price.replace("$", "")),
      0
    );
  };
  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const removeShoes = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };
 const Buy =()=>
 {
    alert("Thank you for your buying ,have a nice day")
    setCartItems([]);
 }
  return (
    <>
      {isOpen === false && (
        <img
          src={shoppingCart}
          alt="error"
          onClick={openCart}
          style={{ width: "30px", height: "30px" }}
        />
      )}
      {isOpen === true && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
          style={{
            maxHeight: "400px",
            marginTop: "360px",
            marginLeft: "970px",
            width: "490px",
            position: "absolute",
            backgroundColor: "rgb(0, 36, 128)",
            zIndex: 2,
            overflowY: "auto",
            borderRadius: "30px",
          }}
        >
          {cartItems.map((item, index) => (
            <div
              style={{
                display: "flex",
                marginLeft: "30px",
                width: "410px",
                height: "80px",
                marginTop: "10px",
                marginBottom: "10px",
                borderRadius: "18px",
                background: "linear-gradient(to right, #642bff,#ff22e6)",
                marginRight: "30px",
              }}
              key={index}
            >
              <img
                src={item.srcImg}
                alt={item.title}
                style={{
                  width: "60px",
                  height: "50px",
                  marginTop: "10px",
                  marginLeft: "6px",
                }}
              />
              <p
                style={{
                  width: "60px",
                  height: "55px",
                  marginTop: "26px",
                  marginLeft: "10px",
                  marginRight: "10px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  color: "white",
                  marginTop: "26px",
                  fontWeight: "bold",
                }}
              >
                {item.price}
              </p>
              <p
                style={{
                  width: "60px",
                  height: "55px",
                  marginTop: "26px",
                  marginLeft: "10px",
                  marginRight: "10px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Size:{item.choiceColor}
              </p>
              <p
                style={{
                  width: "60px",
                  height: "55px",
                  marginTop: "26px",
                  marginLeft: "10px",
                  marginRight: "10px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Color:{item.choiceSize}
              </p>
              <motion.button
                whileHover={{ backgroundColor: "red", color: "white" }}
                style={{
                  width: "50px",
                  height: "45px",
                  marginTop: "15px",
                  marginLeft: "20px",
                  marginRight: "10px",
                  border: "none",
                  borderRadius: "12px",
                  color: "Red",
                  fontWeight: "bold",
                }}
                onClick={() => removeShoes(index)}
              >
                Delete
              </motion.button>
            </div>
          ))}
          <p
            style={{
              marginLeft: "190px",
              width: "100px",
              height: "20px",
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Total: ${calculateTotal()}
          </p>
          <motion.button
            whileHover={{ backgroundColor: "orange", color: "white" }}
            style={{
              marginLeft: "210px",
              marginBottom: "13px",
              backgroundColor: "white",
              color: "orange",
              borderRadius: "12px",
              border: "none",
              width: "75px",
              height: "30px",
            }}
            onClick={()=>Buy()}
          >
            Buy all
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: "orange", color: "white" }}
            style={{
              marginLeft: "210px",
              marginBottom: "13px",
              backgroundColor: "white",
              color: "orange",
              borderRadius: "12px",
              border: "none",
              width: "75px",
              height: "30px",
            }}
            onClick={closeCart}
          >
            Close
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default Cart;

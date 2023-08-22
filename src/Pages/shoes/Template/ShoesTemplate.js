import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import { arrowLeft, nikeBlack } from "../../importsImg/ImportsImg";
import { Search } from "../../importsBtn/ImportsBtn";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import Cart from "../../main/Cart/Cart";

const ShoesTemplate = (props) => {
  const [choiceColor, setChoiceColor] = useState(null);
  const [choiceSize, setChoiceSize] = useState(null);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const userChoiceColor = (value) => {
    setChoiceColor(value);
  };

  const userChoiceSize = (value) => {
    setChoiceSize(value);
  };
  const Buy =()=>
  {
     alert("Thank you for your buying ,have a nice day")
     
  }
  const addToCart = () => {
    if (choiceColor !== null && choiceSize !== null) {
      const newItem = {
        srcImg: props.srcImg,
        title: props.title,
        choiceColor: choiceColor,
        choiceSize: choiceSize,
        price:props.price
      };
      setCartItems((prevItems) => [...prevItems, newItem]);
      setChoiceSize(null);
      setChoiceColor(null);
      alert('You succefully add shoes')
    }else{
      alert("You must choose color and size")
    }
  };
 
  return (
    <div style={{ backgroundColor: "#D9D9D9", height: "100vh" }}>
      <Toolbar sx={{ borderBottom: "1px solid black" }}>
        <img
          style={{ marginLeft: "68px", width: "80px", height: "41px" }}
          src={nikeBlack}
          alt="error"
        />
        <Button
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            color: "black",
            marginLeft: "470px",
          }}
        >
          Men
        </Button>
        <Button
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            color: "black",
            marginLeft: "40px",
          }}
        >
          Women
        </Button>
        <Button
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "600",
            color: "black",
            marginLeft: "40px",
          }}
        >
          Kids
        </Button>
        <Search />
        <Cart  cartItems={cartItems}  setCartItems={setCartItems}/>
      </Toolbar>
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        style={{ display: "flex" }}
      >
        <Link to="/">
          <img
            src={arrowLeft}
            alt="error"
            style={{ marginTop: "18px", marginLeft: "200px" }}
          />
        </Link>
        <p
          style={{
            marginTop: "18px",
            marginLeft: "10px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "42px",
          }}
        >
          Color/Size/Brand
        </p>
      </motion.div>
      <div style={{ display: "flex" }}>
        <motion.p
          style={{
            height: "150px",
            fontWeight: "bold",
            marginRight: "-170px",
            marginTop: "-30px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "44px",
            marginLeft: "230px",
          }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
        >
          Nike
        </motion.p>
        <motion.p
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          style={props.titleStyle}
        >
          {props.title}
        </motion.p>
        <motion.p
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          style={props.textStyle}
        >
          {props.text}
        </motion.p>
        <motion.img
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          src={props.srcImg}
          alt="error"
          style={props.imgStyle}
        />
      </div>
      <motion.div style={{ marginTop: "-100px" }}>
        <motion.button
          style={{
            borderRadius: "11px",
            height: "50px",
            width: "120px",
            backgroundColor: "black",
            color: "pink",
            marginLeft: "230px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
          }}
          whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          onClick={()=>Buy()}
        >
          Buy
        </motion.button>
        <motion.button
          style={{
            backgroundColor: "black",
            color: "pink",
            marginLeft: "30px",
            borderRadius: "11px",
            height: "50px",
            width: "120px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
          }}
          whileHover={{ scale: 1.1, backgroundColor: "white", color: "black" }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          onClick={addToCart} 
        >
          Add to cart
        </motion.button>
        <motion.p
          style={{
            marginTop: "-43px",
            marginLeft: "522px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "30px",
          }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
        >
          {props.price}
          
        </motion.p>
      </motion.div>
      <motion.div style={{ marginLeft: "270px" }}>
      <motion.button
          style={{
            backgroundColor: "#D9D9D9",
            marginRight: "20px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
            border:choiceColor===7?"3px black solid":"none",
          }}
          whileHover={{ scale: 1.1 }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          onClick={()=>userChoiceColor(7)}
        >
          7
        </motion.button>
        <motion.button
          style={{
            backgroundColor: "#D9D9D9",
            border:choiceColor===8?"3px black solid":"none",
            marginRight: "20px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          whileHover={{ scale: 1.1 }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          onClick={()=>userChoiceColor(8)}
        >
          8
        </motion.button>
        <motion.button
          style={{
            backgroundColor: "#D9D9D9",
            border:choiceColor===9?"3px black solid":"none",
            marginRight: "20px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          whileHover={{ scale: 1.1 }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          onClick={()=>userChoiceColor(9)}
        >
          9
        </motion.button>
        <motion.button
          style={{
            backgroundColor: "#D9D9D9",
            border:choiceColor===10?"3px black solid":"none",
            marginRight: "20px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          whileHover={{ scale: 1.1 }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          onClick={()=>userChoiceColor(10)}
        >
          10
        </motion.button>
        <motion.button
          style={{
            backgroundColor: "#D9D9D9",
            border:choiceColor===11?"3px black solid":"none",
            marginRight: "20px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          whileHover={{ scale: 1.1 }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          onClick={()=>userChoiceColor(11)}
        >
          11
        </motion.button>
        <motion.button
          style={{
            backgroundColor: "#D9D9D9",
            border:choiceColor===12?"3px black solid":"none",
            marginRight: "20px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          whileHover={{ scale: 1.1 }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          onClick={()=>userChoiceColor(12)}
        >
          12
        </motion.button>
        <motion.button
          style={{
            backgroundColor: "#D9D9D9",
            border:choiceColor===13?"3px black solid":"none",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            fontSize: "18px",
          }}
          whileHover={{ scale: 1.1 }}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          onClick={()=>userChoiceColor(13)}
        >
          13
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        style={{ marginLeft: "320px", marginTop: "18px" }}
      >
        <motion.button
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "#D20608",
            border:choiceSize==="red"?"3px black solid":"none",
            borderRadius: "10px",
          }}
          whileHover={{ scale: 1.2 }}
          onClick={()=>userChoiceSize("red")}
        ></motion.button>
        <motion.button
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "#1570C8",
            border:choiceSize==="blue"?"3px black solid":"none",
            borderRadius: "10px",
            marginLeft: "27px",
          }}
          whileHover={{ scale: 1.2 }}
          onClick={()=>userChoiceSize("blue")}
        ></motion.button>
        <motion.button
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "#E4E4E4",
            border:choiceSize==="white"?"3px black solid":"none",
            borderRadius: "10px",
            marginLeft: "27px",
          }}
          whileHover={{ scale: 1.2 }}
          onClick={()=>userChoiceSize("white")}
        ></motion.button>
      </motion.div>
    </div>
  );
};

export default React.memo(ShoesTemplate);

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { motion } from "framer-motion";
import Input from "@mui/joy/Input";
import { elements } from ".././shoes/dataShoes";
import { Link } from "react-router-dom";
const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchElem, setSearchElem] = useState("");

  return (
    <>
      {isOpen === false && (
        <motion.IconButton
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          style={{ marginLeft: "170px", marginRight: "35px", color: "white" }}
          onClick={() => setIsOpen(true)}
        >
          <SearchIcon />
        </motion.IconButton>
      )}
      {isOpen === true && (
        <>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div style={{ display: "flex" }}>
              <Input
                placeholder="Type anything…"
                color="primary"
                style={{
                  height:"50px",
                  width: "250px",
                  marginLeft: "145px",
                  marginRight: "35px",
                  marginTop:"10px"
                }}
                onChange={(event) => setSearchElem(event.target.value)}
              />
              <motion.button
              whileHover={{ backgroundColor: "white", color: "purple" }}
              style={{
                fontWeight: "bold",
                height: "45px",
                width: "68px",
                backgroundColor: "purple",
                borderRadius: "15px",
                marginTop: "15px",
                marginRight: "25px",
                color: "white",
                border:"none"
              }}
                onClick={() => {
                  setIsOpen(false);
                  setSearchElem("");
                }}
              >
                Close
              </motion.button>
            </div>
            {searchElem.length > 0 && (
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1 }}
                style={{
                  maxHeight: "400px",
                  marginTop: "20px",
                  marginLeft: "150px",
                  width: "300px",
                  backgroundColor: "rgb(0, 36, 128)",
                  position: "absolute",
                  zIndex: 2,
                  overflowY: "auto",
                  borderRadius: "30px",
                }}
              >
                {elements.filter((elem) =>
                  elem.name.toLowerCase().includes(searchElem.toLowerCase())
                ).length === 0 ? (
                  <p style={{ color: "black" }}>Товар не найден</p>
                ) : (
                  elements
                    .filter((elem) =>
                      elem.name.toLowerCase().includes(searchElem.toLowerCase())
                    )
                    .map((elem, key) => {
                      return (
                        <Link to={elem.link} style={{textDecoration:"none"}}>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          style={{
                            display: "flex",
                            marginLeft: "30px",
                            width: "230px",
                            height:"80px",
                            marginTop: "10px",
                            marginBottom: "10px",
                            borderRadius: "18px",
                            background:
                              "linear-gradient(to right, #642bff,#ff22e6)",
                          }}
                          key={key}
                        >
                          <p
                            style={{
                              color: "white",
                              marginLeft: "16px",
                              fontSize: "17px",
                              marginRight: "20px",
                              fontWeight: "bold",
                              marginTop:elem.marginTopName
                            }}
                          >
                            {elem.name}
                          </p>
                          <p
                            style={{
                              color: "white",
                              fontSize: "17px",
                              marginRight: "20px",
                              fontWeight: "bold",
                              marginTop:"25px"
                            }}
                          >
                            {elem.price}
                          </p>
                          <img
                            src={elem.img}
                            alt="error"
                            style={{marginTop:elem.marginTopImg, width: elem.width, height: elem.height,marginRight:elem.marginLeftImg }}
                          />
                        </motion.div>
                        </Link>
                      );
                    })
                )}
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </>
  );
};

export default Search;

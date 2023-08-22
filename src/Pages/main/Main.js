import * as React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import BrandedHeaderWithQuote from "./BrandedHeaderWithQuote/BrandedHeaderWithQuote";
import DecriptionBrand from "./DecriptionBrand/DecriptionBrand";
import AvailableProductsItems from "./Available/AvailableProductsItems";
import { motion } from "framer-motion";
import useCustomScrollHook from "../Hooks/ScrollByIdHook";
import AvailableMen from "./Available/AvailableItems/AvailableMen";
import AvailableWomen from "./Available/AvailableItems/AvailableWomen";
import AvailableKid from "./Available/AvailableItems/AvailableKid";
import AvailableNew from "./Available/AvailableItems/AvailableNew";
import { Link } from "react-router-dom";
import { ShopNow, NavButton, OurStoreButton } from "../importsBtn/ImportsBtn";
import ContainerStore from "./OurStore/ContainerStore";
import ButtonsContainer from "./OurStore/ChooseButtons";
import FirstRowShoes from "./OurStore/FirstRow";
import SecondRowShoes from "./OurStore/SecondRow";
import {
  NameShoes,
  ShoesPrice,
  NewProductsTitle,
  OurStore,
} from "./importsTypography/importsTypography";
import {
  Airmax,
  Airforce,
  OrangeAirmax,
  Running,
  AirmaxPro,
  Airmax3,
  Allwhyte,
  Airmax4,
  AirmaxNew,
  AirforceNew,
  RunningNewBlack,
  RunningNewWhite
} from "./importsStyledImages/importsStyledImages";
import ItemWrapper from "./OurStore/ItemWrapper";
import ContainerNewProducts from "./NewProducts/ContainerNewProducts";
import Footer from "./Footer/Footer";


const Main = () => {
  const { valueButton, scrollById } = useCustomScrollHook();
  return (
    <>
      <Header>
        <NavBar>
          <NavButton
            color="white"
            marginLeft="400px"
            onClick={() => {
              scrollById("Men");
            }}
            name="Men"
          />
          <NavButton
            color="white"
            marginLeft="40px"
            name="Women"
            onClick={() => {
              scrollById("Women");
            }}
          />
          <NavButton
            color="white"
            marginLeft="40px"
            name="Kids"
            onClick={() => {
              scrollById("Children");
            }}
          />
          <NavButton
            color="white"
            marginLeft="40px"
            name="Collection"
            onClick={() => {
              scrollById("All");
            }}
          />
        </NavBar>

        <BrandedHeaderWithQuote />
      </Header>

      <DecriptionBrand />

      <AvailableProductsItems>
        <AvailableMen>
          <ShopNow
            onClick={() => {
              scrollById("Men");
            }}
          />
        </AvailableMen>
        <AvailableWomen>
          <ShopNow
            onClick={() => {
              scrollById("Women");
            }}
          />
        </AvailableWomen>
        <AvailableKid>
          <ShopNow
            onClick={() => {
              scrollById("Children");
            }}
          />
        </AvailableKid>
        <AvailableNew>
          <ShopNow
            onClick={() => {
              scrollById("new-products");
            }}
          />
        </AvailableNew>
      </AvailableProductsItems>

      <ContainerStore>
        <OurStore />
        <ButtonsContainer>
          <OurStoreButton
            backgroundColor={valueButton === "All" ? "#2A5D67" : "white"}
            color={valueButton === "All" ? "white" : "#2A5D67"}
            height="40px"
            width="60px"
            marginLeft="0px"
            onClick={() => {
              scrollById("All");
            }}
          >
            All
          </OurStoreButton>
          <OurStoreButton
            backgroundColor={valueButton === "Men" ? "#2A5D67" : "white"}
            color={valueButton === "Men" ? "white" : "#2A5D67"}
            height="40px"
            width="60px"
            marginLeft="15px"
            onClick={() => {

              scrollById("Men");
            }}
          >
            Men
          </OurStoreButton>
          <OurStoreButton
            backgroundColor={valueButton === "Women" ? "#2A5D67" : "white"}
            color={valueButton === "Women" ? "white" : "#2A5D67"}
            height="40px"
            width="70px"
            marginLeft="15px"
            onClick={() => {
              scrollById("Women");
            }}
          >
            Women
          </OurStoreButton>
          <OurStoreButton
            backgroundColor={valueButton === "Children" ? "#2A5D67" : "white"}
            color={valueButton === "Children" ? "white" : "#2A5D67"}
            height="40px"
            width="60px"
            marginLeft="15px"
            onClick={() => {
              scrollById("Children");
            }}
          >
            Kids
          </OurStoreButton>
        </ButtonsContainer>

        <FirstRowShoes
          marginLeft={valueButton === "Men" ? "470px" : "330px"}
          display={valueButton === "Children" ? "none" : "flex"}
        >

          <Link to="/AirMax" style={{ textDecoration: "none" }}>
            <ItemWrapper>
              <Airmax
                width="170px"
                height="95px"
                marginTop="45px"
                marginLeft="10px"
              />
              <NameShoes marginTop="24px">Air max</NameShoes>
              <ShoesPrice>$120</ShoesPrice>
            </ItemWrapper>
          </Link>

          <Link to="/AirForce" style={{ textDecoration: "none" }}>
            <ItemWrapper>
              <Airforce
                width="170px"
                height="95px"
                marginTop="45px"
                marginLeft="10px"
              />
              <NameShoes marginTop="24px">Air force</NameShoes>
              <ShoesPrice>$120</ShoesPrice>
            </ItemWrapper>
          </Link>

          <Link to="/AirmaxOrange" style={{ textDecoration: "none" }}>
            <ItemWrapper>
              <OrangeAirmax
                width="170px"
                height="95px"
                marginTop="45px"
                marginLeft="10px"
              />
              <NameShoes marginTop="24px">Air max</NameShoes>
              <ShoesPrice>$120</ShoesPrice>
            </ItemWrapper>
          </Link>

          <Link to="/Running" style={{ textDecoration: "none" }}>
            <ItemWrapper
              display={
                valueButton === "Men"
                  ? "none"
                  : valueButton === "Children"
                  ? "none"
                  : "block"
              }
            >
              <Running
                width="170px"
                height="95px"
                marginTop="45px"
                marginLeft="10px"
              />
              <NameShoes marginTop="24px">Running</NameShoes>
              <ShoesPrice>$90</ShoesPrice>
            </ItemWrapper>
          </Link>
        </FirstRowShoes>

        <SecondRowShoes
          marginLeft={valueButton === "Children" ? "490px" : "330px"}
          display={valueButton === "Men" ? "none" : "flex"}
          marginTop={valueButton === "Children" ? "30px" : "0px"}
        >
          <Link to="/AirMaxPro" style={{ textDecoration: "none" }}>
            <ItemWrapper
              display={valueButton === "Children" ? "none" : "block"}
            >
              <AirmaxPro />
              <NameShoes marginTop="-25px"> Air max pro</NameShoes>
              <ShoesPrice> $120</ShoesPrice>
            </ItemWrapper>
          </Link>

          <Link to="/AirMax3" style={{ textDecoration: "none" }}>
            <ItemWrapper>
              <Airmax3 />
              <NameShoes marginTop="40px">Air max 3</NameShoes>
              <ShoesPrice>$120</ShoesPrice>
            </ItemWrapper>
          </Link>

          <Link to="/Allwhyte" style={{ textDecoration: "none" }}>
            <ItemWrapper
              display={valueButton === "Children" ? "none" : "block"}
            >
              <Allwhyte />
              <NameShoes marginTop="32px">All whyte</NameShoes>
              <ShoesPrice>$120</ShoesPrice>
            </ItemWrapper>
          </Link>

          <Link to="/AirMax4" style={{ textDecoration: "none" }}>
            <ItemWrapper>
              <Airmax4 />
              <NameShoes marginTop="32px">Air max 4</NameShoes>
              <ShoesPrice>$120</ShoesPrice>
            </ItemWrapper>
          </Link>
        </SecondRowShoes>
      </ContainerStore>

      <ContainerNewProducts>
        <NewProductsTitle />
        <motion.div
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          transition={{ type: "tween", duration: 0.8 }}
          style={{ display: "flex", marginLeft: "330px", gap: "30px" }}
        >
          <Link to="" style={{ textDecoration: "none" }}>
            <ItemWrapper>
              <AirmaxNew/>
              <NameShoes marginTop="24px">Air max</NameShoes>
              <ShoesPrice>$120</ShoesPrice>
            </ItemWrapper>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <ItemWrapper>
              <AirforceNew/>
              <NameShoes marginTop="24px">
                Air force
              </NameShoes>
              <ShoesPrice>$120</ShoesPrice>
            </ItemWrapper>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <ItemWrapper>
              <RunningNewBlack/>
              <NameShoes marginTop="24px">
                Running
              </NameShoes>
              <ShoesPrice>$90</ShoesPrice>
            </ItemWrapper>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <ItemWrapper>
              <RunningNewWhite/>
              <NameShoes marginTop="24px">
                Running
              </NameShoes>
              <ShoesPrice>$90</ShoesPrice>
            </ItemWrapper>
          </Link>
        </motion.div>
      </ContainerNewProducts>
      <Footer/>
    </>
  );
};

export default React.memo(Main);

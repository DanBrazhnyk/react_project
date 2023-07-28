import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import BrandedHeaderWithQuote from "./BrandedHeaderWithQuote/BrandedHeaderWithQuote";
import DecriptionBrand from "./DecriptionBrand/DecriptionBrand";
import AvailableProductsItems from "./Available/AvailableProductsItems";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import nike from "../../Images/nike.png";
import amazonPay from "../../Images/amazonPay.png";
import applePay from "../../Images/applePay.png";
import payPal from "../../Images/payPal.png";
import mastercard from "../../Images/mastercard.png";
import mail from "../../Images/mail.png"
import mapPin from "../../Images/mapPin.png"
import phone from "../../Images/phone.png"

import {
  airmax,
  airforce,
  airmaxOrange,
  running,
} from "./importsImg/ImportsImg";
import airmaxPro from "../../Images/airmaxPro.png";
import allwhyte from "../../Images/allwhyte.png";
import airmax3 from "../../Images/airmax3.png";
import airmax4 from "../../Images/airmax4.png";
import airfoceNew from "../../Images/airforceNew.png";
import airmaxNew from "../../Images/airmaxNew.png";
import runningNewBlack from "../../Images/runningNewBlack.png";
import runningNewWhite from "../../Images/runningNewWhite.png";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/material/IconButton";
import { BorderTop } from "@mui/icons-material";
const Main = () => {
  return (
    <>
      <Header>
        <NavBar />
        <BrandedHeaderWithQuote />
      </Header>
      <DecriptionBrand />
      <AvailableProductsItems />
      <Box sx={{ height: "880px", backgroundColor: "#CACFDF" }}>
        <Typography
          style={{
            color: "#2A5D67",
            fontSize: "29px",
            fontWeight: "bold",
            paddingTop: "90px",
            marginLeft: "230px",
          }}
        >
          Our store
        </Typography>

        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            marginLeft: "39%",
            marginTop: "25px",
          }}
        >
          <Button
            sx={{ width: "60px", height: "40px", backgroundColor: "white" }}
          >
            All
          </Button>
          <Button
            sx={{
              width: "60px",
              height: "40px",
              backgroundColor: "white",
              marginLeft: "15px",
            }}
          >
            Men
          </Button>
          <Button
            sx={{
              width: "60px",
              height: "40px",
              backgroundColor: "white",
              marginLeft: "15px",
            }}
          >
            Women
          </Button>
          <Button
            sx={{
              width: "60px",
              height: "40px",
              backgroundColor: "white",
              marginLeft: "15px",
            }}
          >
            KIds
          </Button>
        </Box>
        <Grid container spacing={1} style={{ marginTop: "40px" }}>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "330px",
                marginBottom: "45px",
              }}
            >
              <img
                src={airmax}
                alt="error"
                style={{
                  width: "170px",
                  height: "95px",
                  marginTop: "45px",
                  marginLeft: "10px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                Air max
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $120
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "180px",
              }}
            >
              <img
                src={airforce}
                alt="error"
                style={{
                  width: "170px",
                  height: "95px",
                  marginTop: "45px",
                  marginLeft: "10px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                Air force
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $120
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "30px",
              }}
            >
              <img
                src={airmaxOrange}
                alt="error"
                style={{
                  width: "170px",
                  height: "95px",
                  marginTop: "45px",
                  marginLeft: "10px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                Air max
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $120
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "-120px",
              }}
            >
              <img
                src={running}
                alt="error"
                style={{
                  width: "170px",
                  height: "95px",
                  marginTop: "45px",
                  marginLeft: "10px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                Running
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $90
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "330px",
              }}
            >
              <img
                src={airmaxPro}
                alt="error"
                style={{
                  width: "190px",
                  height: "193px",
                  marginTop: "-14px",
                  marginLeft: "10px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "-25px",
                }}
              >
                Air max pro{" "}
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $120
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "180px",
              }}
            >
              <img
                src={airmax3}
                alt="error"
                style={{
                  width: "175px",
                  height: "80px",
                  marginTop: "32px",
                  marginLeft: "5px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "40px",
                }}
              >
                Air max 3
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $120
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "30px",
              }}
            >
              <img
                src={allwhyte}
                alt="error"
                style={{
                  width: "170px",
                  height: "95px",
                  marginTop: "32px",
                  marginLeft: "10px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "32px",
                }}
              >
                All whyte
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $120
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "180px",
                marginLeft: "-115px",
              }}
            >
              <img
                src={airmax4}
                alt="error"
                style={{
                  width: "160px",
                  height: "85px",
                  marginTop: "32px",
                  marginLeft: "10px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "32px",
                }}
              >
                Air max 4
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $120
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: "100%", backgroundColor: "#E2E7F7", height: "630px" }}>
        <Typography
          sx={{
            paddingTop: "120px",
            color: "#2A5D67",
            fontWeight: "bold",
            fontSize: "28px",
            marginLeft: "140px",
          }}
        >
          New Products
        </Typography>
        <Grid container spacing={1} style={{ marginTop: "40px" }}>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "330px",
                marginBottom: "45px",
              }}
            >
              <img
                src={airmaxNew}
                alt="error"
                style={{
                  width: "170px",
                  height: "95px",
                  marginTop: "45px",
                  marginLeft: "10px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                Air max
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $120
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "180px",
              }}
            >
              <img
                src={airfoceNew}
                alt="error"
                style={{
                  width: "170px",
                  height: "95px",
                  marginTop: "45px",
                  marginLeft: "10px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                Air force
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $120
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "30px",
              }}
            >
              <img
                src={runningNewBlack}
                alt="error"
                style={{
                  width: "170px",
                  height: "95px",
                  marginTop: "45px",
                  marginLeft: "10px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                Running
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $90
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#2A5D67",
                borderRadius: "20px",
                height: "250px",
                width: "190px",
                marginLeft: "-120px",
              }}
            >
              <img
                src={runningNewWhite}
                alt="error"
                style={{
                  width: "160px",
                  height: "120px",
                  marginTop: "25px",
                  marginLeft: "18px",
                }}
              />
              <Typography
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "24px",
                }}
              >
                Running
              </Typography>
              <Typography
                style={{
                  color: "white",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                $90
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ height: "500px", backgroundColor: "#2A5D67" }}>
        <Box>
          <IconButton sx={{ marginLeft: "120px" }}>
            <GitHubIcon
              style={{ width: "43px", height: "43px", color: "white" }}
            />
          </IconButton>
          <IconButton sx={{ marginLeft: "10px" }}>
            <LinkedInIcon
              style={{ width: "43px", height: "43px", color: "blue" }}
            />
          </IconButton>
          <IconButton sx={{ marginLeft: "10px" }}>
            <InstagramIcon
              style={{ width: "43px", height: "43px", color: "pink" }}
            />
          </IconButton>
          <IconButton sx={{ marginLeft: "10px" }}>
            <TelegramIcon
              style={{ width: "43px", height: "43px", color: "red" }}
            />
          </IconButton>
          <img
            src={nike}
            alt="error"
            style={{
              width: "159px",
              height: "57px",
              marginLeft: "300px",
              paddingTop: "80px",
            }}
          />
          <img
            src={amazonPay}
            alt="error"
            style={{ marginLeft: "300px", paddingTop: "85px" }}
          />
          <img
            src={applePay}
            alt="error"
            style={{ marginLeft: "20px", paddingTop: "85px" }}
          />
          <img
            src={mastercard}
            alt="error"
            style={{ marginLeft: "20px", paddingTop: "85px" }}
          />
          <img
            src={payPal}
            alt="error"
            style={{ marginLeft: "20px", paddingTop: "85px" }}
          />
        </Box>
        <Box sx={{marginTop:"70px"}}>
          <Grid container spacing={2} style={{marginLeft:"210px"}}>
            <Grid xs={2} style={{borderTop:"1px solid white",borderRight:"1px solid white"}}>
              <Typography sx={{ margin:"26px 0px 20px 30px",fontWeight:"bold",color:"white",fontSize:"20px"}}>Quick Links </Typography>
              <ul style={{listStyle:"none"}}>
                <li style={{marginLeft:"10px",marginBottom:"26px",color:"white",fontSize:"16px"}}>My account</li>
                <li style={{marginLeft:"10px",marginBottom:"26px",color:"white",fontSize:"16px"}}>My cart</li> 
                <li style={{marginLeft:"10px",marginBottom:"26px",color:"white",fontSize:"16px"}}>Wish List</li>
                <li style={{marginLeft:"10px",marginBottom:"26px",color:"white",fontSize:"16px"}}>My color</li>
              </ul>
            </Grid>
            <Grid xs={2} style={{borderTop:"1px solid white",borderRight:"1px solid white"}}>
            <Typography sx={{ margin:"26px 0px 20px 30px",fontWeight:"bold",color:"white",fontSize:"20px"}}>Helpful Links </Typography>
              <ul style={{listStyle:"none"}}>
                <li style={{marginLeft:"10px",marginBottom:"26px",color:"white",fontSize:"16px"}}>Shop</li>
                <li style={{marginLeft:"10px",marginBottom:"26px",color:"white",fontSize:"16px"}}>Privacy Policy</li> 
                <li style={{marginLeft:"10px",marginBottom:"26px",color:"white",fontSize:"16px"}}>FAQ</li>
                <li style={{marginLeft:"10px",marginBottom:"26px",color:"white",fontSize:"16px"}}>Terms and Conditions</li>
              </ul>
            </Grid>
            <Grid xs={2} style={{borderTop:"1px solid white",borderRight:"1px solid white"}}>
            <Typography sx={{ margin:"26px 0px 20px 30px",fontWeight:"bold",color:"white",fontSize:"20px"}}>Our information</Typography>
              <ul style={{listStyle:"none"}}>
                <li style={{marginLeft:"0px",marginBottom:"26px",color:"white",fontSize:"16px"}}><img src={mapPin} alt='error'style={{width:"15px",marginRight:"10px"}}/>Sedic Plaza wuse, abuja</li>
                <li style={{marginLeft:"0px",marginBottom:"26px",color:"white",fontSize:"16px"}}><img src={phone} alt='error'style={{width:"15px",marginRight:"10px"}}/>+2348157355838</li> 
                <li style={{marginLeft:"0px",marginBottom:"26px",color:"white",fontSize:"16px"}}><img src={mail} alt='error'style={{width:"15px",marginRight:"10px"}}/>praisechidi2002@gmail.com</li>
              </ul>
            </Grid>
            <Grid xs={2} style={{borderTop:"1px solid white"}}>
            <Typography sx={{ margin:"26px 0px 20px 30px",fontWeight:"bold",color:"white",fontSize:"20px"}}>Get in touch </Typography>
            <Typography style={{marginLeft:"20px",marginBottom:"26px",color:"white",fontSize:"16px"}}>We appreciate your feedback</Typography>
            <Textarea placeholder="Type anything…" minRows={2} sx={{marginLeft:"20px",width:"250px"}}/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Main;

import * as React from "react";
import Box from "@mui/material/Box";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import {FooterTypography,Li} from "../importsTypography/importsTypography"
import {Nike,AmazonPay,ApplePay,MasterCard,PayPal,MapPin,Phone,Mail}from"../importsStyledImages/importsStyledImages"
const Footer = () => {
  return (

    <footer style={{ height: "500px", backgroundColor: "#2A5D67" }}>
    <Box>
      <IconButton
        target="_blank"
        href="https://github.com/DanBrazhnyk"
        style={{
          marginLeft: "120px",
          marginTop: "-25px",
        }}
      >
        <GitHubIcon
          style={{ width: "43px", height: "43px", color: "white" }}
        />
      </IconButton>
      <IconButton
        target="_blank"
        href="https://www.linkedin.com/in/danylo-brazhnyk-a7864826a/"
        style={{ marginLeft: "10px", marginTop: "-25px" }}
      >
        <LinkedInIcon
          style={{ width: "43px", height: "43px", color: "white" }}
        />
      </IconButton>
      <IconButton
        target="_blank"
        href="https://instagram.com/danya_b10?igshid=OGQ5ZDc2ODk2ZA=="
        style={{ marginLeft: "10px", marginTop: "-25px" }}
      >
        <InstagramIcon
          style={{ width: "43px", height: "43px", color: "white" }}
        />
      </IconButton>
      <IconButton
        target="_blank"
        href="https://t.me/danya_b10"
        style={{ marginLeft: "10px", marginTop: "-25px" }}
      >
        <TelegramIcon
          style={{ width: "43px", height: "43px", color: "white" }}
        />
      </IconButton>
      <Nike width="159px" height="57px" marginLeft="300px" paddingTop="50px"/>
      <AmazonPay/>
      <ApplePay/>
      <MasterCard/>
      <PayPal/>
    </Box>
    <Box sx={{ marginTop: "70px" }}>
      <Grid container spacing={2} style={{ marginLeft: "210px" }}>
        <Grid
          xs={2}
          style={{
            borderTop: "1px solid white",
            borderRight: "1px solid white",
          }}
        >
          <FooterTypography>Quick Links</FooterTypography>
          <ul style={{ listStyle: "none" }}>
            <Li>My account </Li>
            <Li>My cart</Li>
            <Li>Wish List</Li>
            <Li>My color</Li>
          </ul>
        </Grid>
        <Grid
          xs={2}
          style={{
            borderTop: "1px solid white",
            borderRight: "1px solid white",
          }}
        >
          <FooterTypography> Helpful Links</FooterTypography>
          <ul style={{ listStyle: "none" }}>
            <Li>Shop</Li>
            <Li>Privacy Policy</Li>
            <Li>FAQ</Li>
            <Li>Terms and Conditions</Li>
          </ul>
        </Grid>
        <Grid
          xs={2}
          style={{
            borderTop: "1px solid white",
            borderRight: "1px solid white",
          }}
        >
          <FooterTypography>Our information</FooterTypography>
          <ul style={{ listStyle: "none" }}>
            <li
              style={{
                marginLeft: "0px",
                marginBottom: "26px",
                color: "white",
                fontSize: "16px",
              }}
            >
              <MapPin/>
              Sedic Plaza wuse, abuja
            </li>
            <li
              style={{
                marginLeft: "0px",
                marginBottom: "26px",
                color: "white",
                fontSize: "16px",
              }}
            >
              <Phone/>
              +2348157355838
            </li>
            <li
              style={{
                marginLeft: "0px",
                marginBottom: "26px",
                color: "white",
                fontSize: "16px",
              }}
            >
              <Mail/>
              praisechidi2002@gmail.com
            </li>
          </ul>
        </Grid>
        <Grid xs={2} style={{ borderTop: "1px solid white" }}>
          <FooterTypography>Get in touch</FooterTypography>
          <FooterTypography>We appreciate your feedback</FooterTypography>
          <Textarea
            placeholder="Type anything…"
            minRows={2}
            sx={{ marginLeft: "20px", width: "250px" }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          borderTop: "1px solid white",
          marginTop: "25px",
          textAlign: "center",
          paddingTop: "14px",
          color: "white",
          fontSize: "18px",
        }}
      >
        Dan Brazhnyk 2023
      </Box>
    </Box>
  </footer>
  );
};
export default Footer;
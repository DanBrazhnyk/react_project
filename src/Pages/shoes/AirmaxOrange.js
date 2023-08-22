import React from "react";
import { airmaxOrange } from "../importsImg/ImportsImg";
import ShoesTemplate from "./Template/ShoesTemplate";

 const AirmaxOrange =()=>{

    const imgStyle = {
        width: "500px",
        height: "340px",
        marginLeft:"13%",
        marginTop:"45px",
        rotate:"-30deg",
        marginBottom:"100px"
      };  
       const textStyle = {
        width:"429px",
        height:"279px",
        marginLeft:"-291px",
        marginTop:"85px",
        fontFamily: "Montserrat, sans-serif",
        fontSize:"30px",
      }; 
       const titleStyle= {
        heght:"15px",
        width:"290px",
        fontWeight:"bold",
        marginLeft:"5%",
        marginTop:"20px",
        fontFamily: "Montserrat, sans-serif",
        fontSize:"44px"
        ,
      };
      const text = "Taking the classic look of herritage Nike running into a new realm, the Nike Air Pre-Day brings you a fast-paced look that’s ready for today’s world. A true nod to the past with a design made from at least 20% recyeled material by weight-"
      const title ="Air Max Pro"
      const price ="$120"
 return(
    <ShoesTemplate srcImg={airmaxOrange} price={price} imgStyle={imgStyle} text={text} textStyle={textStyle} title={title} titleStyle={titleStyle} />
 )
 }
 export default AirmaxOrange
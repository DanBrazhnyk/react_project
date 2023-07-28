import * as React from "react";
import Typography from "@mui/material/Typography";
const Brand =()=>{
    return(
        <Typography sx={{position: 'absolute',boxShadow:"5px 14px 8px #c0c0c0",
        top:"590px",
        left: '240px',height:"200px",width:"250px", backgroundColor: "#54BACF",borderRadius:"20px"}}>
        <Typography  sx={{color:"white",fontWeight:"bold",fontSize:"40px",textAlign:"center",marginTop:"14px"}}>Brand</Typography>
        <hr style={{width:"50px",height:"6px",backgroundColor:"white",border:"none"}}/>
        <Typography sx={{color:"white",fontWeight:"bold",fontSize:"20px",textAlign:"center"}}>Over 10+ models available for sale</Typography>
      </Typography>
    )
}
export default Brand
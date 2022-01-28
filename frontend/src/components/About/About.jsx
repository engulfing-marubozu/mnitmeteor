import React from "react";
// import GetPhoneNo from "../ContactDetails/GetPhoneNo";
// import InterestedAlert from "../ModelPopUP/InterestedAlert";
import { Paper, Box } from "@mui/material";
import ProfilePage from "../Profile/ProfilePage/ProfilePage";
import banner3 from "./banner3.png";
function About() {
  return (
    <>
      <Box sx={{ m: 0, p: 0 }}>
        {/* <img
          src={banner3}
          alt="banner"
          style={{ width: "100%", margin: 0, padding: 0 }}
        /> */}
       
      </Box>
      <ProfilePage/>
    </>
  );
}

export default About;

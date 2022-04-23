// import { Typography } from "@mui/material";
import React from "react";
import ProfileContentBox from "./newProfilePage/profileContentBox";
// import InterestedProduct from "./InterestedProduct/interestedProduct";
import ProfilePage from "./ProfilePage/ProfilePage";
// import PublishedAds from "./PublishedAds/publishedAds";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Carousel } from "./CardSlider";
const theme = createTheme({
  palette: {
    primary: {
      main: "#512da8",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function Profile() {
  return (
    <ThemeProvider theme={theme}>
      {/* <ProfilePage /> */}
       <ProfileContentBox />
      
    

    </ThemeProvider >

  );
}

export default Profile; 
// {/* <Typography  */}
// variant={"h4"}
// fontWeight={"bold"}
// sx={{
//   px: "20px",
//   py: "20px",
//   mr: { xs: 1, md: 10 },
//   display: "flex",
//   justifyContent: "flex-end",
// }}
// > Published Ads
// </Typography >
// < PublishedAds />
// <Typography
// variant={"h4"}
// fontWeight={"bold"}
// sx={{
//   px: "20px",
//   py: "20px",
//   mr: { xs: 1, md: 10 },
//   display: "flex",
//   justifyContent: "flex-end",
// }}
// >
// Your Orders
// </Typography >
// <InterestedProduct length={0} />
// {/* <Carousel />  */}
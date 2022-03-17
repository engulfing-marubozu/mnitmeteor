import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategorySlider from "./Slider";
// import LostFoundHomePageCard from "../Lost&Found/Lost&FoundCard/L&FhomePageCard";
// import DiscusssionHomePageCard from "../Discussions/DiscusssionHomePageCard";
// import { Typography } from "@mui/material";
import CardSlider from "../Profile/CardSlider";
// 
const theme = createTheme();
export default function Home() {
  //...............................................................................................................................................................

  //..................................................................................................................................................................
  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />
      <Paper
        display="flex"
        sx={{ bgcolor: "#212121", height: 280, borderRadius: 0 }}
      >
      </Paper>
      <CategorySlider></CategorySlider>
      {/* <CardSlider>
        <LostFoundHomePageCard />
      </CardSlider>
      <Typography>Discussions</Typography>
      <CardSlider>
        <DiscusssionHomePageCard />
      </CardSlider> */}
      {/* <CardSlider/> */}
      <Outlet />
    </ThemeProvider>

  );
}




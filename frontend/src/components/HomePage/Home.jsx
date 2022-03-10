import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategorySlider from "./Slider";
import LostFoundHomePageCard from "../Lost&Found/Lost&FoundCard/L&FhomePageCard";
import DiscusssionHomePageCard from "../Discussions/DiscusssionHomePageCard";
const theme = createTheme();
export default function Home() {
  //...............................................................................................................................................................

  //..................................................................................................................................................................
  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />
      {/* +======================================================================= */}
      <Paper
        display="flex"
        sx={{ bgcolor: "#212121", height: 280, borderRadius: 0 }}
      ></Paper>

      {/*  Bannner============================================================================== */}

      {/*  CATEGORY BAR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <CategorySlider></CategorySlider>
      <Paper
        elevation={0}
        sx={{ bgcolor: "transparent", maxWidth: { xs: "xs", sm: "sm", md: "md", lg: "lg" }, display: "flex", flexDirection: { md: "row", xs: "column" }, margin: " 0rem auto", mt: 5 }}
      >
        <LostFoundHomePageCard />
        <LostFoundHomePageCard />
      </Paper>
      <Paper
        elevation={0}
        sx={{ bgcolor: "transparent", maxWidth: { xs: "xs", sm: "sm", md: "md", lg: "lg" }, flexDirection: { md: "row", xs: "column" },display: "flex", margin: " 0rem auto", mt: 5 }}
      >
        <DiscusssionHomePageCard />
        <DiscusssionHomePageCard />
      </Paper>
      <Outlet />
    </ThemeProvider>

  );
}




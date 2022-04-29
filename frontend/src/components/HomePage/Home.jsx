import React from "react";
import { motion } from "framer-motion";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategorySlider from "./Slider";
const theme = createTheme();
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CssBaseline />
        <Paper
          display="flex"
          sx={{ bgcolor: "#212121", height: 280, borderRadius: 0 }}
        ></Paper>
        <CategorySlider></CategorySlider>
        <Outlet />
      </motion.div>
    </ThemeProvider>
  );
}

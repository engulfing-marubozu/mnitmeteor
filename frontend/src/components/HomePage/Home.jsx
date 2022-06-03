import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import CssBaseline from "@mui/material/CssBaseline";
import FrontBanner from "./Banner";
import CategorySlider from "./Slider";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CssBaseline />
      <FrontBanner />
      <CategorySlider></CategorySlider>
      <Outlet />
    </motion.div>
  );
}

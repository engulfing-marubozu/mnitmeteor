import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
// import image5 from "./Images/image5.png";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategorySlider from "./Slider";
// import { BannerStyle } from "./homePageStyling";
const theme = createTheme();
export default function Home() {
  // const image = image4;

  // const classes = BannerStyle(image);
  return (
    <ThemeProvider theme={theme}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CssBaseline />
        <Box
          // className={classes.divStyle}
          style={
            {
              width: "100%",
              display: "flex",
              height: "320px",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url(${image4})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              opacity: "0.9",
            }
          }
        >
          <Box
            // className={classes.textDiv}
            style={{
              height: "110px",
              position: "absolute",
              color: "white",
              fontWeight: "bold",
              fontSize: "3rem",
              top: "5.25rem",
              left: "4.5rem",
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{ y: [100, 45, 45, -60] }}
              transition={{
                duration: 3,
                times: [0, 0.1, 0.8, 1],
                // yoyo:Infinity
              }}
              style={{
                display: "inline-block",
              }}
            >
              Find what's lost 
            </motion.div>{" "}
            {/* <motion.div
              animate={{ y: [100, 45, 45, -60] }}
              transition={{
                duration: 3,
                times: [0, 0.2, 0.7, 1],
                // yoyo:Infinity
              }}
              style={{
                display: "inline-block",
              }}
            >
              what's
            </motion.div>{" "}
            <motion.div
              animate={{ y: [100, 45, 45, -60] }}
              transition={{
                duration: 3,
                times: [0, 0.3, 0.6, 1],
                // yoyo:Infinity
              }}
              style={{
                display: "inline-block",
              }}
            >
              lost
            </motion.div> */}
          </Box>
          <div
            style={{
              position: "absolute",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.3rem",
              top: "12.25rem",
              left: "4.5rem",
              overflow: "hidden",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            eligendi explicabo.
          </div>
        </Box>
        <CategorySlider></CategorySlider>
        <Outlet />
      </motion.div>
    </ThemeProvider>
  );
}

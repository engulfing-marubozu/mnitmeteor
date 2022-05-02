import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";
import {
  LostFoundNavigation,
  LostFoundVerticalNavigation,
} from "./lostFoundNavigation";
import { forumContainStyle } from "../_Styling/tabStyling";
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
function LostFound() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const sizeEventHandler = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", sizeEventHandler);
    return () => {
      window.removeEventListener("resize", sizeEventHandler);
    };
  }, [windowWidth]);
  const classes = forumContainStyle();
  return (
    <>
      <ThemeProvider theme={theme}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Box className={classes.mainBox}>
            {windowWidth > 600 && (
              <Box className={classes.verticalNavBox}>
                <Box sx={{ position: "fixed" }}>
                  <LostFoundVerticalNavigation />
                </Box>
              </Box>
            )}

            <Box className={classes.cardBox}>
              {windowWidth <= 600 && (
                <Stack>
                  <LostFoundNavigation />
                </Stack>
              )}
              <Outlet />
            </Box>
          </Box>
        </motion.div>
      </ThemeProvider>
    </>
  );
}

export default LostFound;

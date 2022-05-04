import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Stack } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import {
  DiscussionNavigation,
  DiscussionVerticalNavigation,
} from "./discussionNavigation";
import { Outlet } from "react-router-dom";
import { forumContainStyle } from "../_Styling/tabStyling";
// import DiscusssionHomePageCard from './DiscusssionHomePageCard';
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

function Discussions() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const sizeEventHandler = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.scrollTo(0,0);
    window.addEventListener("resize", sizeEventHandler);
    return () => {
      window.removeEventListener("resize", sizeEventHandler);
    };
  }, [windowWidth]);
  // ==================================================================================================================================
  const classes = forumContainStyle();

  // ==================================================================================================================================
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
                  <DiscussionVerticalNavigation />
                </Box>
              </Box>
            )}
            <Box className={classes.cardBox}>
              {windowWidth <= 600 && (
                <Stack>
                  <DiscussionNavigation />
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

export default Discussions;

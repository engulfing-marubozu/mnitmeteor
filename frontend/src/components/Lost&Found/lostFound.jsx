import React from 'react'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Box, Stack } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { LostFoundNavigation, LostFoundVerticalNavigation } from "./lostFoundNavigation";
import { forumContainStyle } from '../_Styling/tabStyling';
// import LostFoundCard from './Lost&FoundCard/L&FCard';
const theme = createTheme({
  palette: {
    primary: {
      main: '#512da8',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function LostFound() {
  const classes = forumContainStyle();
  return (<>
    <ThemeProvider theme={theme}>
      <Box className={classes.mainBox}>
        <Box className={classes.verticalNavBox}>
          <Box sx={{ position: "fixed" }}>
            <LostFoundVerticalNavigation />
          </Box>
        </Box>
        <Box className={classes.cardBox}>
          <Stack sx={{ display: { xs: "flex", sm: "none" } }}>
            <LostFoundNavigation />
          </Stack>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  </>

  )
}

export default LostFound;

import React from 'react'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Box, Stack } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { LostFoundNavigation, LostFoundVerticalNavigation } from "./lostFoundNavigation";
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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function LostFound() {
  return (<>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ width: { sm: "30%", md: "35%" }, position: "fixed", left: "0rem", display: { xs: "none", sm: "block" } }}>
          <LostFoundVerticalNavigation />
        </Box>
        <Box sx={{ width: { md: "65%", sm: "70%", xs: "100%" } }}>
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
// {arr.map((item, index) => {
//   return <LostFoundCard key={index} />
// })

// } 
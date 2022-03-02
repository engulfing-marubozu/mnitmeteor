import React from 'react'
import { Box, Stack } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { DiscussionNavigation, VerticalNavigation } from './discussionNavigation';
import { Outlet } from 'react-router-dom';
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
function Discussions() {
  return (<>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ width: { sm: "30%", md: "35%" }, position: "fixed", left: "0rem", display: { xs: "none", sm: "block" } }}>
          <VerticalNavigation />
        </Box>
        <Box sx={{ width: { md: "65%", sm: "70%", xs: "100%" } }}>
          <Stack sx={{ display: { xs: "flex", sm: "none" } }}>
            <DiscussionNavigation />
          </Stack>
          <Outlet />
        </Box>
      </Box>

    </ThemeProvider>
  </>

  )
}

export default Discussions;
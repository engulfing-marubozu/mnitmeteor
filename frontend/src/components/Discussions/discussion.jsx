import React from 'react'
import { Box, Stack } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { DiscussionNavigation, DiscussionVerticalNavigation } from './discussionNavigation';
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
  // useEffect(() => {

  // })

  return (<>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ position: "fixed", display: { xs: "none", sm: "block" } }}>
          <DiscussionVerticalNavigation />
        </Box>
        <Box>
          {/* <Stack sx={{ display: { xs: "flex", sm: "none" } }}>
            <DiscussionNavigation />
          </Stack> */}
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  </>

  )
}

export default Discussions;
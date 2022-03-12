import React from 'react'
import { Box, Stack } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { DiscussionNavigation, DiscussionVerticalNavigation } from './discussionNavigation';
import { Outlet } from 'react-router-dom';
import { forumContainStyle } from '../_Styling/tabStyling';
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
  const classes = forumContainStyle();
  return (<>
    <ThemeProvider theme={theme}>
      <Box className={classes.mainBox}>
        <Box className={classes.verticalNavBox}>
          <Box sx={{ position: "fixed" }}>
            <DiscussionVerticalNavigation />
          </Box>
        </Box>
        <Box className={classes.cardBox}>
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
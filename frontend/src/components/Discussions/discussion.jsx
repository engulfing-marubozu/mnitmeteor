import React from 'react'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import DiscussionNavigation from './discussionNavigation';
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
      <DiscussionNavigation />
      <Outlet />
    </ThemeProvider>
  </>

  )
}

export default Discussions;
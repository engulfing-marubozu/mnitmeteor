import React from 'react'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import LostFoundCard from './Lost&FoundCard/L&FCard';
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

function LostFound() {
  return (<>
    <ThemeProvider theme={theme}>
      <LostFoundCard/>
      {/* <LostfoundForm /> */}
    </ThemeProvider>
  </>

  )
}

export default LostFound;
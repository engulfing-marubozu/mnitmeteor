import React from 'react'
import LostfoundForm from './lost&foundForm/l&fForm';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
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
      <LostfoundForm />
    </ThemeProvider>
  </>

  )
}

export default LostFound;
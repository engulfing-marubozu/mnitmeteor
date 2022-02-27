import React from 'react'
import DiscussionForm from './DiscussionForm/discussionForm';
import DiscussionCard from './DiscussionPage/discussionCard';
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
function Discussions() {
  return (<>
    <ThemeProvider theme={theme}>
      <DiscussionCard />
      <DiscussionForm />
    </ThemeProvider>
  </>

  )
}

export default Discussions;
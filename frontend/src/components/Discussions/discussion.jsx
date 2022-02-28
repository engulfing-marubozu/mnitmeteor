import React from 'react'
import DiscussionForm from './DiscussionForm/discussionForm';
import DiscussionCard from './DiscussionPage/discussionCard';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
const array = [1, 2, 3, 5, 6, 7, 8, 8, 8, 8, 8];
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
      {
        array.map((item,index) => {
          return (<DiscussionCard key={index} />)
        })
      }
      <DiscussionForm />
    </ThemeProvider>
  </>

  )
}

export default Discussions;
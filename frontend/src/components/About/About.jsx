// import React from "react";
// import SellFormNew from "../SellnowNew/sellnowform";
// function About() {
//   return (
//     <>
//       <SellFormNew />
//     </>
//   );
// }

// export default About;
// import React ,{useRef,useState} from "react";

// // import TextareaAutosize from "@mui/material/TextareaAutosize";
// import {Button, Typography} from "@mui/material"
// export default function About() {
//   const [text ,setText]=useState();
//   const inputRef=useRef();
//  const clickHandler =()=>{
//    console.log(inputRef);
//    setText(inputRef.current.value);
//  }
//   return (
//     <>
   
//       <Typography>{text}</Typography>
//       <textarea  row='8' ref ={inputRef}></textarea>
//       <Button onClick={clickHandler}>click</Button>
//     </>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function About() {
  const [state, setState] = React.useState(false);

   React.useEffect(()=>{
    toggleDrawer(true);
    console.log("deepak"); 
   })


  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <Button onClick={toggleDrawer(true)}>Right</Button>
          <Drawer
            anchor='right'
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list('right')}
          </Drawer>
    </div>
  );
}
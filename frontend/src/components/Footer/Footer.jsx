import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { FooterStyle } from "./footerStyling";
import Logo from "./meteorlogo.svg";
import { Avatar } from "@mui/material";

function Footer() {
  const classes = FooterStyle();
  return (
    <Box className={classes.mainBox}>
      <Box component="footer" className={classes.itemContainer}>
        <Box>
          <Link to="/adminportel" className={classes.linkStyle}>
            <Typography >Admin Panel</Typography>
          </Link>
          <Link to="/developernotes" className={classes.linkStyle}>
            <Typography >Developer Note's</Typography>
          </Link>
        </Box>
        <Box >
            <img
            alt="Logo"
            src={Logo}
            variant="rounded"
            style={{width:"12rem"}}
            />
        </Box>
        <Box>
          {/* <Link > */}
          <Typography >Contact us!</Typography>
          {/* </Link> */}
          {/* <Link> */}
          <Typography>Feedback/Issues?</Typography>
          {/* </Link> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { FooterStyle } from "./footerStyling";
import mnitmeteor from "../_Styling/Images/mnitmeteor.svg";
import { useNavigate } from "react-router-dom";
function Footer() {
  const Navigate = useNavigate();
  const classes = FooterStyle();
  return (
    <Box className={classes.mainBox}>
      <Box component="footer" className={classes.itemContainer}>
        <Box>
          <a
            href="https://forms.gle/L36CFErsQokwyjAn8"
            rel="noreferrer" 
            target="_blank"
            className={classes.linkStyle}
          >
            <Typography>Feedback</Typography>
          </a>
          {/* <Link > */}
          <Typography>Terms of use</Typography>
          {/* </Link> */}
        </Box>

        <Box
          className={classes.logolargeSrn}
          onClick={() => {
            Navigate("/");
          }}
        >
          <img
            alt="Logo"
            src={mnitmeteor}
            variant="rounded"
            style={{ width: "12rem" }}
          />
        </Box>
        <Box>
          <Link to="/adminportel" className={classes.linkStyle}>
            <Typography>Admin Panel</Typography>
          </Link>
          <Link to="/developernotes" className={classes.linkStyle}>
            <Typography>Developer's Note</Typography>
          </Link>
        </Box>
        <Box
          className={classes.logoSmallSrn}
          onClick={() => {
            Navigate("/");
          }}
        >
          <img
            alt="Logo"
            src={mnitmeteor}
            variant="rounded"
            style={{ width: "12rem" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

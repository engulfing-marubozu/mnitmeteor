import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { FooterStyle } from "./footerStyling";
import mnitmeteor from "../_Styling/Images/mnitmeteor.svg";
import { useNavigate } from "react-router-dom";
import TermsofUse from "../Links/termsofUse";
function Footer() {
  const [isShow, setIsShow] = useState(false);
  const Navigate = useNavigate();
  const classes = FooterStyle();

  const ShowHandler = () => {
    setIsShow(!isShow);
  };
  return (
    <Box className={classes.mainBox}>
      <Box component="footer" className={classes.itemContainer}>
        <Box>
          <a
            href="mailto:mnitmeteor@gmail.com"
            rel="noreferrer"
            target="_blank"
            className={classes.linkStyle}
          >
            <Typography>Feedback</Typography>
          </a>

          <Typography
            sx={{ cursor: "pointer", "&:hover": { color: "#673ab7" } }}
            onClick={ShowHandler}
          >
            Terms of use
          </Typography>
          {isShow && <TermsofUse open={isShow} onClose={ShowHandler} />}
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

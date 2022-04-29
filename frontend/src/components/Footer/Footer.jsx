import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FooterStyle } from "./footerStyling";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#" sx={{ textDecoration: "none" }}>
        Mnit Market
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function Footer() {
  const Navigate=useNavigate();
  const classes = FooterStyle();
  return (
    <Box className={classes.mainBox}>
      <Box component="footer" className={classes.itemContainer}>
        <Box className={classes.linkWrapper}>
          <Box className={classes.linkFixer}>
            <Typography className={classes.headingTypo}>Support</Typography>
            <Link className={classes.linkStyle} href="#">
              <Typography className={classes.linkTypo}>Contact us!</Typography>
            </Link>
            <Link className={classes.linkStyle} href="#">
              <Typography className={classes.linkTypo}>
                Feedback/Issues?
              </Typography>
            </Link>
          </Box>
          <Box className={classes.linkFixer}>
            <Typography className={classes.headingTypo}>Links</Typography>
            <Link
              className={classes.linkStyle}
              onClick={() => {
                Navigate("/adminportel");
              }}
            >
              <Typography className={classes.linkTypo}>Admin Panel</Typography>
            </Link>
            <Link className={classes.linkStyle} href="#">
              <Typography className={classes.linkTypo}>
                Developer Note's
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box className={classes.iconBox}>
          <Box>
            <IconButton className={classes.iconButton}>
              <FacebookIcon className={classes.Icon} />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <InstagramIcon className={classes.Icon} />
            </IconButton>
          </Box>
          <Box>
            <IconButton className={classes.iconButton}>
              <TwitterIcon className={classes.Icon} />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <LinkedInIcon className={classes.Icon} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Copyright />
    </Box>
  );
}

export default Footer;

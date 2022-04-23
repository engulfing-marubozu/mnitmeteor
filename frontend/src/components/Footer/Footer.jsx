import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import AcUnitIcon from '@mui/icons-material/AcUnit';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/" sx={{ textDecoration: "none" }}>
        Mnit Market
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function Footer() {
  return (
    <Box sx={{ bgcolor: "#7e57c2", py: 1, px: { lg: "72px", md: "38px", sm: "24px", xs: "16px" } }}>

      <Box component="footer" sx={{ display: "flex", justifyContent: { sm: "flex-end", xs: "space-between" }, pb: "12px", borderBottom: "1px solid " }}>

        <Box sx={{ mr: { sm: "4rem", xs: "0px" } }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "12px", ml: "2px" }}>Support</Typography>
          <Typography sx={{ fontSize: "10px" }}>Contact us!</Typography>
          <Typography sx={{ fontSize: "10px" }}>Feedback/Issues?</Typography>
        </Box>
        <Box sx={{ mr: { sm: "4rem", xs: "0px" } }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "12px", ml: "2px" }}>Links</Typography>
          <Typography sx={{ fontSize: "10px" }}>Admin Panel</Typography>
          <Typography sx={{ fontSize: "10px" }}>Developer Note's </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "12px", ml: "2px" }}>Follow Us</Typography>
          <Box sx={{ mt: "3px", p: 0 }}>
            <FacebookIcon sx={{ color: "#5e35b1", mr: "6px" }} />
            <InstagramIcon sx={{ color: "#5e35b1", mr: "6px" }} />
            <TwitterIcon sx={{ color: "#5e35b1" }} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Copyright />
      </Box>
    </Box>
  );
}

export default Footer;

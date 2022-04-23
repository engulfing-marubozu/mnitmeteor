import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  ProfileBoxStyle,
  ProfileTab,
  ProfileTabs,
} from "../ProfileStyling/profilePageStyling";
import poster from "../Images/poster1.jpg";
// import CardSlider from '../CardSlider';
// import PublishedAds from '../PublishedAds/publishedAds';

function ProfileContentBox() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = ProfileBoxStyle();
  return (
    <Box>
      <Paper
        sx={{
          bgcolor: "#5e35b1",
          width: "100%",
          height: "280px",
          borderRadius: 0,
        }}
      >
        <img
          src={poster}
          alt="profileicon"
          style={{ width: "100%", height: "280px", objectFit: "cover" }}
        />
      </Paper>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "30%" },
            height: "72px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              // borderRadius: "50%",
              width: { xs: "100px", sm: "138px" },
              height: { xs: "100px", sm: "138px" },
              position: "absolute",
              left: "3rem",
              top: { sm: "-4.2rem", xs: "-2.5rem" },
            }}
            elevation={0}
          >
            {/* <img src={profileIcon} alt="profileicon" /> */}
          </Paper>
          <Box
            sx={{
              margin: { sm: "74px 0px 10px 0px", xs: "30px 0px 6px 0px " },
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#5e35b1", fontWeight: "bold" }}
            >
              2019UME1827
            </Typography>
          </Box>
          <Box>
            <Box display="flex" direction="row">
              <EmailIcon sx={{ fontSize: { xs: "16px", sm: "24px" } }} />
              <Typography variant="body1" sx={{ pl: "1rem" }}>
                2019ume1827@mnit.ac.in
              </Typography>
            </Box>
            <Box display="flex" direction="row" sx={{ mt: "4px" }}>
              <LocalPhoneIcon sx={{ fontSize: { xs: "16px", sm: "24px" } }} />
              <Typography variant="body1" sx={{ pl: "1rem" }}>
                9752457228
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { sm: "70%", xs: "100%" },
            // mt: "30px",
          }}
        >
          <Box className={classes.mainBox}>
            <ProfileTabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
            >
              <ProfileTab label="Your Ads " />
              <ProfileTab label="Your Orders" />
            </ProfileTabs>
          </Box>
          <Box sx={{ bgcolor: "#b39ddb", height: "470px" }}></Box>
        </Box>
      </Box>
    </Box>
  );
}
export default ProfileContentBox;

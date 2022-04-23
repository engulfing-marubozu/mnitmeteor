import React, { useState } from "react";
import { Box, Typography, Paper, Collapse } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  ProfileBoxStyle,
  ProfileTab,
  ProfileTabs,
} from "../ProfileStyling/profilePageStyling";
import { ExpandMore } from "../ProfileStyling/profilePageStyling";
import UpdatePhoneNo from "../ProfilePage/UpdateProfile";
import { ToastContainer, toast } from "react-toastify";
import PublishedAds from "../PublishedAds/publishedAds";
import InterestedProduct from "../InterestedProduct/interestedProduct";

function ProfileContentBox() {
  const [value, setValue] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const notify = (value) => toast(value);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const updateHandler = () => {
    setOpenUpdate(!openUpdate);
  };
  const classes = ProfileBoxStyle();

  // =======================================================================
  return (
    <Box sx={{height:"100%"}}>
      <Paper className={classes.bannerBack}>
        <Box className={classes.smlUserBox}>
          <Typography className={classes.nameTypo}>2019UME1827</Typography>
        </Box>
      </Paper>
      <Box className={classes.parentBox}>
        <Box className={classes.detailBox}>
          <Paper className={classes.profileImage} elevation={0}>
            {/* <img src={profileIcon} alt="profileicon" /> */}
          </Paper>
          <Box className={classes.useName}>
            <Typography className={classes.nameTypo}>2019UME1827</Typography>
          </Box>
          <Box className={classes.detailContainer}>
            <Box className={classes.flexBox}>
              <EmailIcon className={classes.iconStyle} />
              <Typography className={classes.detailTypo}>
                2019ume1827@mnit.ac.in
              </Typography>
            </Box>
            <Box className={classes.flexBox}>
              <LocalPhoneIcon className={classes.iconStyle} />
              <Typography className={classes.detailTypo}>9752457228</Typography>
            </Box>
          </Box>
          <Box>
            <ExpandMore expand={expanded} onClick={handleExpandClick} />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <UpdatePhoneNo closeUpdate={updateHandler} notify={notify} />
            </Collapse>
          </Box>
        </Box>
        <Box className={classes.tabBox}>
          <ProfileTabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <ProfileTab label="Your Ads " />
            <ProfileTab label="Your Orders" />
          </ProfileTabs>
          <Box sx={{ bgcolor: "#b39ddb", height: "100%" }}>
            {/* <PublishedAds /> */}
            {/* <InterestedProduct /> */}
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
}
export default ProfileContentBox;

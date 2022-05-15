import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  ProfileBoxStyle,
  ProfileTab,
  ProfileTabs,
} from "../ProfileStyling/profilePageStyling";
import { ExpandMore } from "../ProfileStyling/profilePageStyling";
import UpdatePhoneNo from "./updateProfilenew";
import { ToastContainer, toast } from "react-toastify";
import PublishedAds from "../PublishedAds/publishedAds";
import InterestedProduct from "../InterestedProduct/interestedProduct";
import { useSelector } from "react-redux";

function ProfileContentBox() {
  const [value, setValue] = useState(0);
  const [tabSwitch, setTabSwitch] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const notify = (value) => toast(value);
  const userData = useSelector((state) => state.loginlogoutReducer.userData);
  const profilePic = userData?.profilePic;
  const userId = userData?.email?.split("@")[0];
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = ProfileBoxStyle();

  // =======================================================================
  return (
    <Box>
      <Paper className={classes.bannerBack}>
        <Box className={classes.smlUserBox}>
          <Typography className={classes.nameTypo}>{userId}</Typography>
        </Box>
      </Paper>
      <Box className={classes.parentBox}>
        <Box className={classes.detailBox}>
          <Paper className={classes.profileImage} elevation={0}>
            <img
              src={profilePic}
              alt="profileicon"
              className={classes.profileImg}
            />
          </Paper>
          <Box className={classes.detailFixerBox}>
            <Box className={classes.useName}>
              <Typography className={classes.nameTypo}>{userId}</Typography>
            </Box>
            <Box className={classes.detailContainer}>
              <Box className={classes.flexBox}>
                <EmailIcon className={classes.iconStyle} />
                <Typography className={classes.detailTypo}>
                  {userData?.email}
                </Typography>
              </Box>
              <Box className={classes.flexBox}>
                <LocalPhoneIcon className={classes.iconStyle} />
                <Typography className={classes.detailTypo}>
                  {userData?.phoneNo}
                </Typography>
                <ExpandMore expand={expanded} onClick={handleExpandClick} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "90%" }}>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <UpdatePhoneNo closeUpdate={handleExpandClick} notify={notify} />
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
            <ProfileTab
              label="Your Ads "
              onClick={() => {
                setTabSwitch(0);
              }}
              aria-label="your ads"
            />
            <ProfileTab
              label="Your Orders"
              onClick={() => {
                setTabSwitch(1);
              }}
              aria-label="your orders"
            />
          </ProfileTabs>
          <Box className={classes.cardContainer}>
            {tabSwitch === 0 && <PublishedAds />}
            {tabSwitch === 1 && <InterestedProduct />}
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
}
export default ProfileContentBox;

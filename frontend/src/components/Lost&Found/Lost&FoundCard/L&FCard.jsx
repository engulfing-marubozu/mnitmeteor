import React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Tooltip from "@mui/material/Tooltip";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import ImageGallery from "react-image-gallery";
import { LostFoundCardStyle } from "./LostFoundStyling";
import { TimeSince } from "../../TimeElapsed/timecalc";
import "./l&fImageStyle.css";
// import { useSelector } from "react-redux";
import { RWebShare } from "react-web-share";
import LostFoundDeleteAlert from "../lsDeleteAlert.jsx/lsDeleteAlert";
import ReadMore from "../../_Styling/readmore";

export default function LostFoundCard({
  data,
  flag,
  setLostFound,
  showDelete,
}) {
  // const localUserData = useSelector((state) => state.loginlogoutReducer);
  // const userLoggedIn = localUserData?.userData._id;
  const userData = JSON.parse(window.localStorage.getItem("mm_user_data"));
  const userLoggedIn = userData?.userId;

  const avatar = data?.profile_pic;
  const date = new Date(data.createdAt);
  const properDate = TimeSince(date);
  const itemName =
    data?.name?.trim()?.charAt(0).toUpperCase() + data?.name?.trim()?.slice(1);
  const postedBy = data?.posted_by;
  const userEmail = data?.email?.split("@")[0];
  const category = data?.category;
  const description = data?.description;
  const images = data?.imgs.map((img, index) => {
    return {
      original: `${img.image}`,
    };
  });

  //   ==========================================================================================
  const classes = LostFoundCardStyle({ category: category });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box className={classes.lfcontainer}>
        <Card className={classes.lfpaperStyle}>
          <CardHeader
            avatar={<Avatar src={avatar} />}
            action={
              <Box>
                {postedBy === userLoggedIn && showDelete && (
                  <LostFoundDeleteAlert
                    deleteData={{
                      id: data._id,
                      name: data.name,
                      flag: flag,
                      postedBy: postedBy,
                    }}
                    setLostFound={setLostFound}
                  />
                )}
                <RWebShare
                  data={{
                    text: `${category === "Lost" ? "Checkout this lost item!" : "Checkout this found item!"}`,
                    url: `${process.env.REACT_APP_REDIRECT}/lost&found/${data._id}`,
                    title: `${itemName}`,
                  }}
                >
                  <IconButton>
                    <Tooltip title="Share" arrow placement="right">
                      <ShareIcon color="primary" />
                    </Tooltip>
                  </IconButton>
                </RWebShare>
              </Box>
            }
            title={userEmail}
            subheader={properDate}
          />
          <Box className="lfImageStyle">
            {images && (
              <ImageGallery
                items={images}
                showThumbnails={false}
                showPlayButton={false}
                showFullscreenButton={false}
              />
            )}
          </Box>
          <CardContent sx={{ py: 0 }}>
            <Typography variant="h6">{itemName}</Typography>
            <ReadMore words={180}>{description}</ReadMore>
          </CardContent>
          <CardActions sx={{ px: "1rem", pb: "1rem", display: "flex" }}>
            <Typography className={classes.lfcategory}> {category}</Typography>
          </CardActions>
        </Card>
      </Box>
    </motion.div>
  );
}

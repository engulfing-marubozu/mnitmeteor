import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Tooltip,
  CardActions,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ImageGallery from "react-image-gallery";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import { LostFoundCardStyle } from "./LostFoundStyling";
import { TimeSince } from "../../TimeElapsed/timecalc";
import "./l&fImageStyle.css";
import { useSelector } from "react-redux";
import { RWebShare } from "react-web-share";
import LostFoundDeleteAlert from "../lsDeleteAlert.jsx/lsDeleteAlert";
import ReadMore from "../../_Styling/readmore";
export default function LostFoundCard({ data, flag, setLostFound }) {

  // console.log(data);
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const userLoggedIn = localUserData?.userData._id;
  const date = new Date(data.createdAt);
  const properDate = TimeSince(date);
  const itemName = data?.name.charAt(0).toUpperCase() + data?.name.slice(1);
  const postedBy = data?.posted_by;
  const userEmail = data?.email.slice(0, 11);
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
            avatar={<Avatar sx={{ bgcolor: "black" }} />}
            action={
              <Box>
                {postedBy === userLoggedIn && (
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
                    text: "Mnit Market",
                    url: `http://localhost:3000/Lost&Found/${data._id}`,
                    title: `${itemName}`,
                  }}
                  onClick={() => console.log("shared successfully!")}
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
            {/* <Typography variant="body2" color="text.secondary"> */}
            <ReadMore>{description}</ReadMore>
            {/* </Typography> */}
          </CardContent>
          <CardActions sx={{ px: "1rem", pb: "1rem", display: "flex" }}>
            <Typography className={classes.lfcategory}> {category}</Typography>
          </CardActions>
        </Card>
      </Box>
    </motion.div>
  );
}

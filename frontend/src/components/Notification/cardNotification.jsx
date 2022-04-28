import React from "react";
import axios from "axios";
import { Box, Typography, IconButton, Tooltip, Paper } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { NotificationCardStyle } from "./notificationStyling";
import { TimeSince } from "../TimeElapsed/timecalc";
import NotificationReadMore from "./notificationReadMore";
import { useSelector } from "react-redux";
function NotificationCard({ data, index, setNotifications }) {
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const token = localUserData.token;
  const DeleteHandler = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/delete_notification",
        { index: index },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotifications(response.data);
      // console.log(response.data);/
    } catch (err) {
      console.log(err);
    }
  };
  const date = new Date(data.createdAt);
  const properDate = TimeSince(date);
  const classes = NotificationCardStyle(data.status);
  return (
    <Paper className={classes.cardMainBox}>
      <Box className={classes.indicatorWrapper}>
        <Box className={classes.indicator}></Box>
        <Box className={classes.contentBox}>
          <Box className={classes.headingContainer}>
            <Box className={classes.headingContainer}>
              <Typography className={classes.heading}>
                {data.status === 1
                  ? "Approved"
                  : data.status === -1
                  ? "Decline"
                  : "General"}
              </Typography>
              <Typography sx={{ mx: "10px", fontSize: "12px", mt: "3px" }}>
                {properDate}
              </Typography>
            </Box>
            <IconButton sx={{ p: 0.5 }} onClick={DeleteHandler}>
              <Tooltip title="Remove" arrow>
                <ClearIcon fontSize="small" />
              </Tooltip>
            </IconButton>
          </Box>

          <NotificationReadMore words={180} data={data.status}>
            {data.content}
          </NotificationReadMore>
        </Box>
      </Box>
    </Paper>
  );
}

export default NotificationCard;

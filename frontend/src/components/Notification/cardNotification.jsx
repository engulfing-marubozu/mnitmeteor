import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import ClearIcon from "@mui/icons-material/Clear";
import NotificationReadMore from "./notificationReadMore";
import { NotificationCardStyle } from "./notificationStyling";
import { TimeSince } from "../TimeElapsed/timecalc";
// import { useSelector } from "react-redux";

function NotificationCard({ data, index, setNotifications }) {
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;
  const DeleteHandler = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/delete_notification`,
        { index: index },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotifications(response.data);

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

import React, { useEffect, useState } from 'react'
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NotificationPageStyle } from "./notificationStyling"
import NotificationCard from './cardNotification';
import { useSelector } from 'react-redux';
import axios from 'axios';

function NotificationPage() {

    const [notifications, setNotifications] = useState();
    const token = useSelector((state) => state.loginlogoutReducer.token);

    useEffect(() => {
        const fetch_notification = async () => {
            const response = await axios.get(
                "http://localhost:5000/send_notification",
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );
            setNotifications(response.data);
            console.log(response.data)
        }
        fetch_notification();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // ===========================================================================================






    const classes = NotificationPageStyle();
    return (
        <Box className={classes.mainBox}>
            <Box className={classes.headingContainer}>
                <Typography className={classes.heading}>Notifications</Typography>
                <IconButton>
                    <ArrowForwardIcon />
                </IconButton>
            </Box>
            <Box>
                {
                    typeof (notifications) !== "undefined" && (notifications.map((data, index) =>
                        <NotificationCard data={data} key={index} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default NotificationPage
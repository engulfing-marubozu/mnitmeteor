import React from 'react'
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NotificationPageStyle } from "./notificationStyling"
import NotificationCard from './cardNotification';
function NotificationPage() {

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
                <NotificationCard status={0}/>
                <NotificationCard status={1}/>
                <NotificationCard status={-1}/>
            </Box>
        </Box>
    )
}

export default NotificationPage
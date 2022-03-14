import React from 'react'
import { Box, Typography, IconButton, Tooltip, Paper } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { NotificationCardStyle } from './notificationStyling';
function NotificationCard({ status }) {
    // const status = 1;
    const classes = NotificationCardStyle(status);
    return (
        <Paper className={classes.cardMainBox}>
            <Box className={classes.indicatorWrapper}>
                <Box className={classes.indicator} ></Box>
                <Box className={classes.contentBox}>
                    <Box className={classes.headingContainer}>
                        <Typography className={classes.heading}>Approved</Typography>
                        <IconButton sx={{ p: 0.5 }} >
                            <Tooltip title='Delete' arrow >
                                <ClearIcon fontSize="small" />
                            </Tooltip>
                        </IconButton>
                    </Box>
                    <Typography variant="body2">
                        .a sapientid velit culpa pe.
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default NotificationCard
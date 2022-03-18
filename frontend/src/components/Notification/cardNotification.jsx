import React from 'react'
import { Box, Typography, IconButton, Tooltip, Paper } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { NotificationCardStyle } from './notificationStyling';
function NotificationCard({ data }) {
    // console.log(data);
    const DeleteHandler = () => {
     console.log("deepak ");
    }
    // const status = 1;
    const classes = NotificationCardStyle(data.status);
    return (
        <Paper className={classes.cardMainBox}>
            <Box className={classes.indicatorWrapper}>
                <Box className={classes.indicator} ></Box>
                <Box className={classes.contentBox}>
                    <Box className={classes.headingContainer}>
                        <Typography className={classes.heading}>Approved</Typography>
                        <IconButton sx={{ p: 0.5 }} onClick={DeleteHandler}>
                            <Tooltip title='Delete' arrow >
                                <ClearIcon fontSize="small" />
                            </Tooltip>
                        </IconButton>
                    </Box>
                    <Typography variant="body2">
                        {data.content}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default NotificationCard
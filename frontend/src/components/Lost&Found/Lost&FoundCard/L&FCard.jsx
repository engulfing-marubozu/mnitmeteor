
import React from 'react';
import { Card, CardHeader, CardContent, Box, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { LostFoundCardStyle } from './LostFoundStyling';
export default function LostFoundCard(props) {
    const classes = LostFoundCardStyle();

    return (
        <Box display={"flex"} alignItems={"flex-start"} sx={{ width: "100%", my: "1rem", flexDirection: "column" }}>
            <Card className={classes.lfpaperStyle}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#673ab7" }} />
                    }
                    action={
                        <IconButton >
                            <Tooltip title="Share" arrow placement='right'>
                                <ShareIcon color="primary" />
                            </Tooltip>
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
<<<<<<< Updated upstream
                <CardContent sx={{ py: "0rem" }}>
                    <Typography variant="h6">Boat Earphone</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ wordBreak: "break-all" }}>
=======
                <CardContent  sx={{py:"0rem"}}>
                    <Typography variant="h6">{props.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{wordBreak:"break-all"}}>
>>>>>>> Stashed changes
                        {/* This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.    This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.    This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like. */}
                    </Typography>
                </CardContent>
            </Card>
            {/* <PicSlider/> */}

        </Box>

    );
}
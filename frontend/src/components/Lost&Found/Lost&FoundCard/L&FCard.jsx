
import React from 'react';
import { Card, CardHeader, CardContent, Box, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ImageGallery from "react-image-gallery";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { LostFoundCardStyle } from './LostFoundStyling';
import { TimeSince } from '../../TimeElapsed/timecalc';
import "./l&fImageStyle.css";
export default function LostFoundCard({ data }) {
    const date = new Date(data.createdAt);
    const properDate = TimeSince(date);
    const itemName = data?.name.charAt(0).toUpperCase() + data?.name.slice(1);


    const images = data.imgs.map((img, index) => {
        return {
            original: `${img.image}`,
        }
    })

    const classes = LostFoundCardStyle();
    return (
        <Box display={"flex"} alignItems={"flex-start"} sx={{ width: "100%", mt: "1rem", flexDirection: "column" }}>
            <Card className={classes.lfpaperStyle}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#673ab7" }} />
                    }
                    action={
                        <Box>
                            <IconButton>

                            </IconButton>
                            <IconButton >
                                <Tooltip title="Share" arrow placement='right'>
                                    <ShareIcon color="primary" />
                                </Tooltip>
                            </IconButton>
                        </Box>


                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={properDate}
                />
                <CardContent sx={{ pt: "0rem", pb: "0.5rem" }}>
                    <Typography variant="h6">{itemName}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ wordBreak: "break-all" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ut! Dolor nemo aliquam voluptate magni nesciunt odit placeat! Iste, veniam. Dolorum eum ipsam nobis rerum nihil tempora quis aut impedit!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui vitae deleniti deserunt b
                        {/* {data.description} */}
                    </Typography>
                </CardContent>
                <div className="lfImageStyle">
                    <ImageGallery
                        items={images}
                        showThumbnails={false}
                        showPlayButton={false}

                    />
                </div>
            </Card>

        </Box>

    );
}
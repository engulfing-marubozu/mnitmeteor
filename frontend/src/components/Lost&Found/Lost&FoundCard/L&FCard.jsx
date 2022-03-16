
import React from 'react';
import { Card, CardHeader, CardContent, Box, Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ImageGallery from "react-image-gallery";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { LostFoundCardStyle } from './LostFoundStyling';
import { TimeSince } from '../../TimeElapsed/timecalc';
import "./l&fImageStyle.css";
import { useSelector } from 'react-redux';
export default function LostFoundCard({ data }) {

    const localUserData = useSelector((state) => state.loginlogoutReducer);
    // console.log(localUserData);
    const userLoggedIn = localUserData?.userData._id;
    const date = new Date(data.createdAt);
    const properDate = TimeSince(date);
    const itemName = data?.name.charAt(0).toUpperCase() + data?.name.slice(1);
    const postedBy = data?.posted_by;
  console.log(postedBy,userLoggedIn);
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
                            {
                                (postedBy === userLoggedIn) && (
                                    <IconButton>
                                        <Tooltip title="Delete" arrow placement="left">
                                            <DeleteIcon />
                                        </Tooltip>
                                    </IconButton>
                                )
                            }
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
                    <Typography variant="body2" color="text.secondary" className={classes.descriptionBox}>
                        Lorem ipsum dolor sit amet consectetur a
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
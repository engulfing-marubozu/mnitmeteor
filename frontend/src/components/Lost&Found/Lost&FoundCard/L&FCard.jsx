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
import axios from "axios";
import { RWebShare } from 'react-web-share';
export default function LostFoundCard({ data }) {
    const localUserData = useSelector((state) => state.loginlogoutReducer);
    const userLoggedIn = localUserData?.userData._id;
    const date = new Date(data.createdAt);
    const properDate = TimeSince(date);


    const itemName = data?.name.charAt(0).toUpperCase() + data?.name.slice(1);
    const postedBy = data?.posted_by;
    const userEmail = data?.email.slice(0, 11);
    const images = data?.imgs.map((img, index) => {
        return {
            original: `${img.image}`,
        }
    })



    // =================================================================================
    const handleDelete = (id, name) => {
        axios.post('http://localhost:5000/deleteLnfItem', {

            objID: id,
            name: name
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    //   ==========================================================================================
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
                                    <IconButton onClick={() => { handleDelete(data._id, data.name) }}>
                                        <Tooltip title="Delete" arrow placement="left">
                                            <DeleteIcon />
                                        </Tooltip>
                                    </IconButton>
                                )
                            }
                            <RWebShare
                                data={{
                                    text: "Mnit Market",
                                    url: `http://localhost:3000/Lost&Found/${data._id}`,
                                    title: `${itemName}`,
                                }}
                                onClick={() => console.log("shared successfully!")}
                            >
                                <IconButton >
                                    <Tooltip title="Share" arrow placement='right'>
                                        <ShareIcon color="primary" />
                                    </Tooltip>
                                </IconButton>
                            </RWebShare >
                        </Box>


                    }
                    title={userEmail}
                    subheader={properDate}
                />
                <CardContent sx={{ pt: "0rem", pb: "0.5rem" }}>
                    <Typography variant="h6">{itemName}</Typography>
                    <Typography variant="body2" color="text.secondary" className={classes.descriptionBox}>
                        Lorem ipsum dolor sit amet consectetur a Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro ducimus error incidunt, ipsam veritatis neque illum vitae quis nulla minima quas quam tempora,
                        fuga,dolorem accusantium architecto reiciendis blanditiis! Suscipit!
                        {/* {data.description} */}
                    </Typography>
                </CardContent>
                <div className="lfImageStyle">
                    {images && <ImageGallery
                        items={images}
                        showThumbnails={false}
                        showPlayButton={false}

                    />}

                </div>
            </Card>

        </Box>

    );
}
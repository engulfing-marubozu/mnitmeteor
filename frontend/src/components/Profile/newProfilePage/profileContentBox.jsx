import React from 'react'
import { Box, Typography } from "@mui/material"
import { ProfileBoxStyle, ProfileTab, ProfileTabs } from '../ProfileStyling/profilePageStyling';
import CardSlider from '../CardSlider';
import PublishedAds from '../PublishedAds/publishedAds';

function ProfileContentBox() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = ProfileBoxStyle();
    return (
        <Box className={classes.mainBox}>
            {/* <Box className={classes.titleHolder}>
                <Box>
                    <Typography className={classes.heading}>
                        Your Ads
                    </Typography>
                </Box>
                <Box>
                    <Typography className={classes.heading}>
                       Your Orders
                    </Typography>
                </Box>
            </Box>
            <Box>

            </Box> */}
            <ProfileTabs
                value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
            >
                <ProfileTab label="Your Ads " />
                <ProfileTab label="Your Orders" />
            </ProfileTabs>
            {/* <CardSlider /> */}
            <PublishedAds />
        </Box>
    )
}
export default ProfileContentBox;


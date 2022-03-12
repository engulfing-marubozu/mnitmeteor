import React, { useEffect } from 'react'
import { Paper, Box } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import CreateIcon from '@mui/icons-material/Create';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavTabs, NavTab, VerticalNavTab } from '../_Styling/tabStyling';
import { useNavigate, useLocation } from "react-router-dom";
import { verticalNavigationStyle } from '../_Styling/tabStyling';




export function DiscussionNavigation() {
    const [value, setValue] = React.useState(0);
    const Navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/Discussions") { setValue(0) }
        else if (location.pathname === "/Discussions/CreateNewTopic") { setValue(1) }
        else if (location.pathname === "/Discussions/MyTopics") { setValue(2) }
        else if (location.pathname === "/Discussions/MyAnswers") { setValue(3) }
        else if (location.pathname === "/Discussions/FavouriteTopics") { setValue(4) }
        else {
            setValue(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])




    return (
        <Paper sx={{ bgcolor: "white", display: "flex", justifyContent: "center", }}>
            <NavTabs value={value} variant="scrollable" scrollButtons={false}>
                <NavTab icon={<ExploreIcon />} label="Explore Topics" onClick={() => { Navigate("") }} />
                <NavTab icon={<CreateIcon />} label="Create New Topic" onClick={() => { Navigate("CreateNewTopic") }} />
                <NavTab icon={<QuestionMarkIcon />} label="My Topics" onClick={() => { Navigate("MyTopics") }} />
                <NavTab icon={<QuestionAnswerIcon />} label="My Answers" onClick={() => { Navigate("MyAnswers") }} />
                <NavTab icon={<FavoriteIcon />} label="Saved Topics" onClick={() => { Navigate("SavedTopics") }} />
            </NavTabs>
        </Paper>

    )
}

// export default DiscussionNavigation


export function DiscussionVerticalNavigation() {

    const classes = verticalNavigationStyle();
    const [value, setValue] = React.useState(0);
    const Navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/Discussions") { setValue(0) }
        else if (location.pathname === "/Discussions/CreateNewTopic") { setValue(1) }
        else if (location.pathname === "/Discussions/MyTopics") { setValue(2) }
        else if (location.pathname === "/Discussions/MyAnswers") { setValue(3) }
        else if (location.pathname === "/Discussions/SavedTopics") { setValue(4) }
        else {
            setValue(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])




    return (
        <Box className={classes.outerBox}>
            <Paper className={classes.paperStyle}>

            <NavTabs value={value} orientation="vertical">
                <VerticalNavTab icon={<ExploreIcon />} label="Explore Topics" onClick={() => { Navigate("") }} />
                <VerticalNavTab icon={<CreateIcon />} label="Create New Topic" onClick={() => { Navigate("CreateNewTopic") }} />
                <VerticalNavTab icon={<QuestionMarkIcon />} label="My Topics" onClick={() => { Navigate("MyTopics") }} />
                <VerticalNavTab icon={<QuestionAnswerIcon />} label="My Answers" onClick={() => { Navigate("MyAnswers") }} />
                <VerticalNavTab icon={<FavoriteIcon />} label="Saved Topics" onClick={() => { Navigate("SavedTopics") }} />
            </NavTabs>
            </Paper>
        </Box>

    )
    // className={classes.paperStyle}

}
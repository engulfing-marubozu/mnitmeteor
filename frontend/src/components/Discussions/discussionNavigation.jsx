import React, { useEffect } from 'react'
import { Paper, Box } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import CreateIcon from '@mui/icons-material/Create';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { NavTabs, NavTab, VerticalNavTab } from '../_Styling/tabStyling';
import { useNavigate, useLocation } from "react-router-dom";
import { verticalNavigationStyle } from '../_Styling/tabStyling';
import { modelPopUp } from '../../AStatemanagement/Actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

export function DiscussionNavigation() {
    const [value, setValue] = React.useState(0);
    const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/discussions") { setValue(0) }
        else if (location.pathname === "/discussions/createnewtopic") { setValue(1) }
        else if (location.pathname === "/discussions/savedtopics") { setValue(2) }
        else if (location.pathname === "/discussions/mytopics") { setValue(3) }

        else {
            setValue(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])
    function TabClickHandler(address) {
        if (isLoggedIn) {
            Navigate(address);
        }
        else {
            dispatch(modelPopUp(true));
        }
    }



    return (
        <Paper sx={{ bgcolor: "white", display: "flex", justifyContent: "center", }}>
            <NavTabs value={value} variant="scrollable" scrollButtons={false}>
                <NavTab icon={<ExploreIcon />} label="Explore Topics" onClick={() => { TabClickHandler("") }} />
                <NavTab icon={<CreateIcon />} label="Create New Topic" onClick={() => { TabClickHandler("createnewtopic") }} />
                <NavTab icon={<BookmarkAddedIcon />} label="Saved Topics" onClick={() => { TabClickHandler("savedtopics") }} />
                <NavTab icon={<QuestionMarkIcon />} label="My Topics" onClick={() => { TabClickHandler("mytopics") }} />
            </NavTabs>
        </Paper>

    )
}

// export default DiscussionNavigation


export function DiscussionVerticalNavigation() {

    const classes = verticalNavigationStyle();
    const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
    const Navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/discussions") { setValue(0) }
        else if (location.pathname === "/discussions/createnewtopic") { setValue(1) }
        else if (location.pathname === "/discussions/savedtopics") { setValue(2) }
        else if (location.pathname === "/discussions/mytopics") { setValue(3) }
        else {
            setValue(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    function TabClickHandler(address) {
        if (isLoggedIn) {
            Navigate(address);
        }
        else {
            dispatch(modelPopUp(true));
        }
    }



    return (
        <Box className={classes.outerBox}>
            <Paper className={classes.paperStyle}>

                <NavTabs value={value} orientation="vertical">
                    <VerticalNavTab icon={<ExploreIcon />} label="Explore Topics" onClick={() => { TabClickHandler("") }} />
                    <VerticalNavTab icon={<CreateIcon />} label="Create New Topic" onClick={() => { TabClickHandler("createnewtopic") }} />
                    <VerticalNavTab icon={<BookmarkAddedIcon />} label="Saved Topics" onClick={() => { TabClickHandler("savedtopics") }} />
                    <VerticalNavTab icon={<QuestionMarkIcon />} label="My Topics" onClick={() => { TabClickHandler("mytopics") }} />
                </NavTabs>
            </Paper>
        </Box>

    )
    // className={classes.paperStyle}

}
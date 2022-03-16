import React, { useEffect } from 'react'
import { Paper, Box } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import CreateIcon from '@mui/icons-material/Create';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SearchIcon from '@mui/icons-material/Search';
import { NavTabs, NavTab, VerticalNavTab } from '../_Styling/tabStyling';
import { useNavigate, useLocation } from "react-router-dom";
import { verticalNavigationStyle } from '../_Styling/tabStyling';
import { useSelector, useDispatch } from "react-redux";
import { modelPopUp } from '../../AStatemanagement/Actions/userActions';




export function LostFoundNavigation() {
    const [value, setValue] = React.useState(0);
    const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/Lost&Found") { setValue(0) }
        else if (location.pathname === "/Lost&Found/Lost&FoundForm") { setValue(1) }
        else if (location.pathname === "/Lost&Found/LostItems") { setValue(2) }
        else if (location.pathname === "/Lost&Found/FoundItems") { setValue(3) }
        else if (location.pathname === "/Lost&Found/MyItems") { setValue(4) }
        else {
            setValue(false);
        }
    }, [location.pathname, setValue])
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
            <NavTabs value={value} variant="scrollable" scrollButtons={false} >
                <NavTab icon={<ExploreIcon />} label="Explore" onClick={() => { TabClickHandler("") }} />
                <NavTab icon={<CreateIcon />} label="Lost&Found Form" onClick={() => { TabClickHandler("Lost&FoundForm") }} />
                <NavTab icon={<QuestionMarkIcon />} label="Lost Items" onClick={() => { TabClickHandler("LostItems") }} />
                <NavTab icon={<SearchIcon />} label="Found Items" onClick={() => { TabClickHandler("FoundItems") }} />
                <NavTab icon={<SearchIcon />} label="My Items" onClick={() => { TabClickHandler("MyItems") }} />
            </NavTabs>
        </Paper>

    )
}

// export default DiscussionNavigation


export function LostFoundVerticalNavigation() {
    const [value, setValue] = React.useState(0);
    const classes = verticalNavigationStyle();
    const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    function TabClickHandler(address) {
        if (isLoggedIn) {
            Navigate(address);
        }
        else {
            dispatch(modelPopUp(true));
        }
    }

    useEffect(() => {
        if (location.pathname === "/Lost&Found") { setValue(0) }
        else if (location.pathname === "/Lost&Found/Lost&FoundForm") { setValue(1) }
        else if (location.pathname === "/Lost&Found/LostItems") { setValue(2) }
        else if (location.pathname === "/Lost&Found/FoundItems") { setValue(3) }
        else if (location.pathname === "/Lost&Found/MyItems") { setValue(4) }
        else {
            setValue(false);
        }

    }, [location.pathname, setValue])



    return (
        <Box className={classes.outerBox}>
            <Paper className={classes.paperStyle}>
                <NavTabs value={value} orientation="vertical">
                    <VerticalNavTab icon={<ExploreIcon />} label="Explore" onClick={() => { TabClickHandler("") }} />
                    <VerticalNavTab icon={<CreateIcon />} label="Lost&Found Form" onClick={() => { TabClickHandler("Lost&FoundForm") }} />
                    <VerticalNavTab icon={<QuestionMarkIcon />} label="Lost Items" onClick={() => { TabClickHandler("LostItems") }} />
                    <VerticalNavTab icon={<SearchIcon />} label="Found Items" onClick={() => { TabClickHandler("FoundItems") }} />
                    <VerticalNavTab icon={<SearchIcon />} label="My Items" onClick={() => { TabClickHandler("MyItems") }} />
                </NavTabs>
            </Paper>
        </Box>


    )

}

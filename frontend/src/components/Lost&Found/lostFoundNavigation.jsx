import React, { useEffect } from 'react'
import { Paper, Box } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import CreateIcon from '@mui/icons-material/Create';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SearchIcon from '@mui/icons-material/Search';
import { NavTabs, NavTab, VerticalNavTab } from '../_Styling/tabStyling';
import { useNavigate, useLocation } from "react-router-dom";
import { verticalNavigationStyle } from '../_Styling/tabStyling';
import LostFoundMyItems from './LostFoundCategories/myItems';




export function LostFoundNavigation() {
    const [value, setValue] = React.useState(0);
    const Navigate = useNavigate();
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
    }, [location.pathname,setValue])




    return (
        <Paper sx={{ bgcolor: "white", display: "flex", justifyContent: "center", }}>
            <NavTabs value={value} variant="scrollable" scrollButtons={false} >
                <NavTab icon={<ExploreIcon />} label="Explore" onClick={() => { Navigate("") }} />
                <NavTab icon={<CreateIcon />} label="Lost&Found Form" onClick={() => { Navigate("Lost&FoundForm") }} />
                <NavTab icon={<QuestionMarkIcon/>} label="Lost Items" onClick={() => { Navigate("LostItems") }} />
                <NavTab icon={<SearchIcon/> } label="Found Items" onClick={() => { Navigate("FoundItems") }} />
                {/* <NavTab icon={</>} label="My Items" onClick={() => { Navigate("MyItems") }} /> */}
            </NavTabs>
        </Paper>

    )
}

// export default DiscussionNavigation


export function LostFoundVerticalNavigation() {

    const classes = verticalNavigationStyle();
    const [value, setValue] = React.useState(0);
    const Navigate = useNavigate();
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
  
    }, [location.pathname,setValue])



    return (
        <Box className={classes.outerBox}>
            <Paper className={classes.paperStyle}>
                <NavTabs value={value} orientation="vertical">
                    <VerticalNavTab icon={<ExploreIcon />} label="Explore" onClick={() => { Navigate("") }} />
                    <VerticalNavTab icon={<CreateIcon />} label="Lost&Found Form" onClick={() => { Navigate("Lost&FoundForm") }} />
                    <VerticalNavTab icon={<QuestionMarkIcon/> } label="Lost Items" onClick={() => { Navigate("LostItems") }} />
                    <VerticalNavTab icon={ <SearchIcon/>} label="Found Items" onClick={() => { Navigate("FoundItems") }} />
                    {/* <NavTab icon={ } label="My Items" onClick={() => { Navigate("MyItems") }} /> */}
                </NavTabs>
            </Paper>
        </Box>


    )

}

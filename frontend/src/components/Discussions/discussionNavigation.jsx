import React from 'react'
import {Paper} from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import CreateIcon from '@mui/icons-material/Create';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {NavTabs,NavTab} from '../_Styling/tabStyling';
function DiscussionNavigation() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper sx={{bgcolor:"white" ,display:"flex" ,justifyContent:"center"}}>
            <NavTabs value={value} onChange={handleChange} >
                <NavTab icon={<ExploreIcon />} label="Explore Topics" />
                <NavTab icon={<CreateIcon />} label="Create New Topic" />
                <NavTab icon={<QuestionMarkIcon />} label="My Topics" />
                <NavTab icon={<QuestionAnswerIcon />} label="My Answers" />
            </NavTabs>
        </Paper>

    )
}

export default DiscussionNavigation;

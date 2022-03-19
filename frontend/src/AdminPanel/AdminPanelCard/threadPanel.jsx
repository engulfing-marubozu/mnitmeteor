
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardContent, CardActions, Box } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AdminCardStyle } from '../PanelStyling/adminPanelStyling';
import { TimeSince } from '../../components/TimeElapsed/timecalc';
import ApproveAlert from '../PanelAlert.jsx/approveAlert';
import DeclineAlert from '../PanelAlert.jsx/declineAlert';
import "../PanelStyling/adminImageSlider.css";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function ThreadPanel({ ApproveRequest, DeclineRequest, data }) {

    const [expanded, setExpanded] = React.useState(false);
    // console.log(data);
    const date = new Date(data.createdAt);
    const properDate = TimeSince(date);
    const title = data?.title.charAt(0).toUpperCase() + data?.title.slice(1);
    const userEmail = data?.users_mnit_id;
    const description=data?.description;
    // =======================================================================================
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = AdminCardStyle();
    // ======================================================================================
    return (
        <Box className={classes.container}>
            <Card sx={{ width: { xs: "100%", sm: "600px" } }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "black" }} />
                    }
                    title={userEmail}
                    subheader={properDate}
                />
                <CardContent sx={{ py: 0 }}>
                    <Typography variant="h6" sx={{ my: 1.5, lineHeight: 1.3 }}>{title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, praesentium necessitatibus. Sunt architecto ut esse
                        voluptatum tempore velit blanditiis eligendi debitis dignissimos, exercitationem omnis u
                        llam officia eum mollitia veniam ipsam.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing sx={{ px: "1rem", py: "0rem" }}>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardActions sx={{ px: "1rem", pb: "1rem", display: "flex" }}>
                        <ApproveAlert ApproveRequest={ApproveRequest} data={data} />
                        <DeclineAlert DeclineRequest={DeclineRequest} data={data} />
                    </CardActions>
                </Collapse>
            </Card>
        </Box >
    );
}

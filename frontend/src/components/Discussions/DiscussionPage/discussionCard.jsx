import React, { useState } from 'react'
import { Typography, Box, Paper, Avatar, Stack, styled } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Comments from './comment';
import AddCommentBox from './addCommentBox';
import Collapse from '@mui/material/Collapse';
import { DiscussionCardStyle } from '../DiscussionStyling/discussionCardStyliing';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <MessageIcon sx={{ color: "#757575" }}  {...other} />
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
function DiscussionCard() {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const classes = DiscussionCardStyle();

    return (
        <Box display={"flex"} alignItems={"flex-start"} sx={{ width: "100%", my: "2rem", flexDirection: "column" }}>
            <Paper className={classes.dpaperStyle}>
                <Box display={'flex'} flexDirection={'column'} sx={{ pr: { xs: "0.5rem", sm: "0.8rem", md: "1rem" }, pt: 0.8 }}>
                    <ArrowUpwardIcon />
                    <ArrowDownwardIcon />
                </Box>
                <Box>
                    <Box sx={{ width: "94%", borderBottom: '2px  solid #757575', height: "auto" }}>
                        <Typography variant='h5' sx={{ mb: 1.5 }}>What does the fox say ?</Typography>
                        <Typography sx={{ mb: 1.5, wordBreak: "break-all" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Numquam quis laudantium deleniti vel est recusandae, doloremque sequi,
                            nostrum non modi illo esse tempora placeat saepe consequatur odit
                            architecto incidunt nobis aspernatur repudiandae odio, fugiat quos.
                            Cupiditate laboriosam aspernatur voluptatem! Facere molestias aliquam
                            vel maxime ab nostrum distinctio hic mollitia, ipsa voluptatibus sit
                            dolores pariatur repellat doloribus commodi odit excepturi tempore.
                        </Typography>
                    </Box>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Box>
                            <Comments />
                            <Comments />
                            <Comments />
                            <AddCommentBox />
                        </Box>
                    </Collapse>
                    <Box className={classes.dactionBox}>
                        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                            <Avatar sx={{ height: { xs: 26, sm: 30 }, width: { xs: 26, sm: 30 } }}></Avatar>
                            <Typography variant='body2' sx={{ pl: 1, color: "#757575" }}> Posted by</Typography>
                            <Typography sx={{ color: "#512da8", fontWeight: "bold", px: 1 }}>2019ume1827</Typography>
                        </Stack>
                        <Stack className={classes.ddateIconWrapper} >
                            <Typography variant="body2" className={classes.dactionDate}>26 sep 2020</Typography>
                            <Stack sx={{ flexDirection: "row", alignItems: "flex-start" }}  >
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                >
                                </ExpandMore>
                                <Typography variant="body2" sx={{ color: "#757575", pt: 0 }}>50+</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default DiscussionCard
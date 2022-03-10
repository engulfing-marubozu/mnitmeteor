import React, { useState } from 'react'
import { Typography, Box, Paper, Avatar, Stack, styled, IconButton } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ShareIcon from '@mui/icons-material/Share';
import Comments from './comment';
import AddCommentBox from './addCommentBox';
import Collapse from '@mui/material/Collapse';
import { DiscussionCardStyle, DiscussionCommonStyle, LikeButtonStyle } from '../DiscussionStyling/discussionCardStyliing';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <MessageIcon sx={{ color: "#673ab7" }} fontSize="small"  {...other} />

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
    // =============================================================LIKEHANDLER=====================================================================================================================================================
    const [likeDislike, setLikeDislike] = useState({ likeStatus: false, dislikeStatus: false, totalCount: -7 })
    const likeIncreaseHandler = () => {
        if (likeDislike.dislikeStatus && !likeDislike.likeStatus) {
            setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount + 2) } })
        }
        else if (!likeDislike.likeStatus) {
            setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, totalCount: (prev.totalCount + 1) } })
        }
        else {
            setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, totalCount: (prev.totalCount - 1) } })
        }
    }
    const likeDecreaseHandler = () => {
        if (likeDislike.likeStatus && !likeDislike.dislikeStatus) {
            setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount - 2) } })
        }
        else if (!likeDislike.dislikeStatus) {
            setLikeDislike((prev) => { return { ...prev, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount - 1) } })
        }
        else {
            setLikeDislike((prev) => { return { ...prev, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount + 1) } })
        }
    }

    // ================================================================================================================================================================================================================================
    const classes = DiscussionCardStyle();
    const likeButton = LikeButtonStyle(likeDislike);
    const comClasses = DiscussionCommonStyle();
    return (
        <Box display={"flex"} alignItems={"flex-start"} sx={{ width: "100%", my: "2rem", flexDirection: "column" }}>
            <Paper className={classes.dpaperStyle}>
                <Box className={likeButton.likeCardBox}>
                    <IconButton className={likeButton.likeIncButton} onClick={likeIncreaseHandler}><ArrowUpwardIcon /></IconButton>
                    <Stack className={likeButton.likeCardCount}>{Math.abs(likeDislike.totalCount)}</Stack>
                    <IconButton className={likeButton.likeDecButton} onClick={likeDecreaseHandler}><ArrowDownwardIcon /></IconButton>
                </Box>
                <Box>
                    <Box sx={{ width: "94%", borderBottom: '2px  solid #757575', height: "auto" }}>
                        <Typography variant='h6' sx={{ mb: 1.5, wordBreak: "break-all", lineHeight: 1.3 }}>
                            What does the fox say    Lorem ipsum dolor, sit amet consectetur adipisicing elit.?
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 1.5, wordBreak: "break-all", }} >
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
                        <Stack className={comClasses.dStack}>
                            <Avatar className={comClasses.dProfileIcon}></Avatar>
                            <Typography variant='body2' className={comClasses.dPostBy}> Posted by</Typography>
                            <Typography className={comClasses.dUsername}>2019ume1827</Typography>
                        </Stack>
                        <Stack className={classes.ddateIconWrapper} >
                            <Typography variant="body2" className={classes.dactionDate}>26 sep 2020</Typography>
                            <Stack sx={{ flexDirection: "row", alignItems: "center" }}  >
                                <IconButton sx={{ mx: "0.5rem", p: "0.3rem" }}>
                                    <ShareIcon color="primary" fontSize="small" />
                                </IconButton>
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
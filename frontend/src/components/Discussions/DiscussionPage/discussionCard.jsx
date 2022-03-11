import React, { useState } from 'react'
import { Typography, Box, Paper, Avatar, Stack, styled, IconButton, CardHeader, Badge } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ShareIcon from '@mui/icons-material/Share';
import Comments from './comment';
import AddCommentBox from './addCommentBox';
import Collapse from '@mui/material/Collapse';
import { DiscussionCardStyle, LikeButtonStyle } from '../DiscussionStyling/discussionCardStyliing';
import { TimeSince } from '../../TimeElapsed/timecalc';
import { useSelector } from 'react-redux';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return (
        <IconButton {...other} >
            <MessageIcon sx={{ color: "#673ab7" }} />
        </IconButton>)

})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
function DiscussionCard({ data }) {


    const token = useSelector((state) => state.loginlogoutReducer.token);
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
    const [saved, setSaved] = useState(false);

    // ===================================================================================================================================================================================================================================
    // console.log(data);
    const title = data?.title;
    const description = data?.description;
    const date = new Date(data?.createdAt);
    const properDate = TimeSince(date);
    // ===================================================================================================================================================================================================================================
    const classes = DiscussionCardStyle();
    const likeButton = LikeButtonStyle(likeDislike);
    // ======================================================================================================================================================================================================================================
    const commentData = { token: token, cardId: data?._id, commentId: null, replyId: null }
    return (
        <Box display={"flex"} alignItems={"flex-start"} sx={{ width: "100%", my: "2rem", flexDirection: "column" }}>
            <Paper className={classes.dpaperStyle}>

                <Box className={likeButton.likeCardBox}>
                    <IconButton className={likeButton.likeIncButton} onClick={likeIncreaseHandler}><ArrowUpwardIcon /></IconButton>
                    <Stack className={likeButton.likeCardCount}>{Math.abs(likeDislike.totalCount)}</Stack>
                    <IconButton className={likeButton.likeDecButton} onClick={likeDecreaseHandler}><ArrowDownwardIcon /></IconButton>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }} >
                    <Box sx={{ width: "94%", borderBottom: '2px  solid #757575' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: "#673ab7" }} />
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader={properDate}
                            sx={{ p: 0 }}
                        />
                        <Typography variant='h6' sx={{ my: 1.5, wordBreak: "break-all", lineHeight: 1.3 }}>
                            {/* What does the fox say    Lorem ipsum dolor, sit amet consectetur adipisicing elit.? */}
                            {title}
                        </Typography>
                        <Typography color="text.secondary" sx={{ mb: 1, wordBreak: "break-all", }} >
                            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Numquam quis laudantium deleniti vel est recusandae, doloremque sequi,
                            nostrum non modi illo esse tempora placeat saepe consequatur odit
                            architecto incidunt nobis aspernatur repudiandae odio, fugiat quos.
                            Cupiditate laboriosam aspernatur voluptatem! Facere molestias aliquam
                            vel maxime ab nostrum distinctio hic mollitia, ipsa voluptatibus sit
                            dolores pariatur repellat doloribus commodi odit excepturi tempore. */}
                            {description}
                        </Typography>
                    </Box>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Box>
                            <Comments commentData={commentData} />
                            <AddCommentBox commentData={commentData} />
                        </Box>
                    </Collapse>
                    <Box className={classes.dactionBox}>
                        <Stack className={classes.dIconWrapper} >
                            <IconButton onClick={() => { setSaved(!saved) }} >
                                {
                                    saved ? <BookmarkAddedIcon color="primary" /> : <BookmarkAddIcon />
                                }
                            </IconButton>
                            <IconButton>
                                <ShareIcon color="primary" />
                            </IconButton>
                        </Stack>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                        >
                        </ExpandMore>
                        {/* <Typography variant="body2" sx={{ color: "#757575", pt: 0 }}>50+</Typography> */}
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default DiscussionCard
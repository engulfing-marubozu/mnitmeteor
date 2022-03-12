import React, { useState } from 'react'
import { Typography, Box, Avatar, Stack, styled, IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ReplyButton, CommentDeleteButton, ViewRepliesButton } from '../DiscussionStyling/discussionStyling';
import Reply from "./reply"
import ReplyCommentBox from './replyCommentBox';
import Collapse from '@mui/material/Collapse';
import { CommentReplyStyle, LikeButtonStyle } from '../DiscussionStyling/discussionCardStyliing';
import { TimeSince } from '../../TimeElapsed/timecalc';

const ExpandMoreComment = styled((props) => {
    const { expand, ...other } = props;
    return <ReplyButton  {...other}>Reply</ReplyButton>
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const ExpandMoreReplies = styled((props) => {
    const { expand, ...other } = props;
    return (
        <ViewRepliesButton {...other}>
            {!expand && " View Replies"}
            {expand && "Hide Replies"}
        </ViewRepliesButton>);
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Comments({ commentData, addCommentData }) {


    // ==========================================================================================================================================================================
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const [expandedReplies, setExpandedReplies] = useState(false);
    const handleViewRepliesClick = () => {
        setExpandedReplies(!expandedReplies);
    };
    //  ========================================================================================================================================================================
    const [likeDislike, setLikeDislike] = useState({ likeStatus: false, dislikeStatus: false, totalCount: 9 })
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


    //   ===========================================================================================================================================================================
    console.log(commentData);
    const comment = commentData.content;
    const commentId = commentData._id;
    const commentedBy = commentData.mnit_id;
    const date = commentData.createdAt;
    const properDate = TimeSince(date);
    // =====================================================================================================================================================================================
    const classes = CommentReplyStyle();
    const likeButton = LikeButtonStyle(likeDislike);
    const addReplyData = { ...addCommentData, commentId: commentId }

    // =======================================================================================================================================================================================================
    return (
        <Box>
            <Box sx={{ width: "94%", height: "auto", bgcolor: "#ede7f6", px: { xs: 1, sm: 3 }, py: 1, mt: 1.5 }}>
                <Box className={classes.topBox}>
                    <Stack className={classes.topStack}>
                        <Avatar className={classes.avatarStyle} />
                        <Typography className={classes.usernameStyle}>
                            {commentedBy}
                        </Typography>
                    </Stack>
                    <Typography className={classes.dateStyle}>{properDate}</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }} >
                    <Box className={likeButton.likeCardBox}>
                        <IconButton className={likeButton.likeIncButton} onClick={likeIncreaseHandler}><ArrowUpwardIcon sx={{ fontSize: 15 }} /></IconButton>
                        <Stack className={likeButton.likeCommentCount}>{Math.abs(likeDislike.totalCount)}</Stack>
                        <IconButton className={likeButton.likeDecButton} onClick={likeDecreaseHandler}><ArrowDownwardIcon sx={{ fontSize: 15 }} /></IconButton>
                    </Box>
                    <Box className={classes.mainBox}>
                        <Typography className={classes.contentBox}>
                            {comment}
                        </Typography>
                        <Box className={classes.actionBoxStyle}>
                            <Box>
                                <ExpandMoreComment
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                >
                                </ExpandMoreComment>

                                {

                                    <CommentDeleteButton>Delete</CommentDeleteButton>
                                }
                            </Box>
                            <Box>
                                <ExpandMoreReplies
                                    expand={expandedReplies}
                                    onClick={handleViewRepliesClick}
                                    aria-expanded={expandedReplies}
                                >
                                </ExpandMoreReplies>
                            </Box>
                        </Box>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <ReplyCommentBox handleExpandClick={handleExpandClick} addReplyData={addReplyData} />
                        </Collapse>
                        <Collapse in={expandedReplies} timeout="auto" unmountOnExit>
                            <Reply />
                        </Collapse>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}

export default Comments;
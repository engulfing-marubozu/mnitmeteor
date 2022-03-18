import React, { useState, useRef, useEffect } from 'react'
import { Typography, Box, Avatar, Stack, styled, IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ReplyButton, ViewRepliesButton } from '../DiscussionStyling/discussionStyling';
import Reply from "./reply"
import ReplyCommentBox from './replyCommentBox';
import Collapse from '@mui/material/Collapse';
import { CommentReplyStyle, LikeButtonStyle } from '../DiscussionStyling/discussionCardStyliing';
import { TimeSince } from '../../TimeElapsed/timecalc';
import { ExpandMore } from './_expandMore';
import { useDispatch, useSelector } from 'react-redux';
import { actionForLikeThread } from '../../../AStatemanagement/Actions/userActions';
import { modelPopUp } from '../../../AStatemanagement/Actions/userActions';
import { LikeDislikeChecker } from './likeDislikeChecker';
import CommentDeleteAlert from '../DeleteAlerts/commentDeleteAlert'



const ExpandMoreReplies = styled((props) => {
    const { expand, replyCount, ...other } = props;
    return (
        <ViewRepliesButton {...other}>
            {!expand && `View Replies (${replyCount})`}
            {expand && "Hide Replies"}
        </ViewRepliesButton>)
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


// ================================================================================================================================================================================
function Comments({ commentData, addCommentData, actionData, setLocalCardData }) {

    const dispatch = useDispatch();
    const [localCommentData, setLocalCommentData] = useState(commentData);
    const [expAddCmnt, setExpAddCmt] = useState(false);
    const [expReplies, setExpReplies] = useState(false);
    const localUserData = useSelector((state) => state.loginlogoutReducer)
    const isLoggedIn = localUserData.isLogin;
    const userLoggedIn = localUserData.userData._id;
    // ========================================================================================
    const handleExpandClick = () => {
        isLoggedIn ? (setExpAddCmt(!expAddCmnt)) : (dispatch(modelPopUp(true)));
    }

    const handleViewRepliesClick = () => {
        setExpReplies(!expReplies);
    };
    //   ===========================================================================================================================================================================
    // console.log(commentData);
    const comment = localCommentData.content;
    const commentId = localCommentData._id;
    const userId = localCommentData.mnit_id;
    const commentedBy = localCommentData.commented_by;
    const date = new Date(localCommentData.createdAt);
    const properDate = TimeSince(date);
    const replies = localCommentData?.replies?.slice(0).reverse();
    console.log(localCommentData.replies);
    // console.log(replies);
    const replyCount = replies?.length;
    const addReplyData = { ...addCommentData, commentId: commentId }
    // ===========================================================================================================================================================================
    const likes = localCommentData.likes;
    const dislikes = localCommentData.dislikes;
    const likeStatus = LikeDislikeChecker(likes, userLoggedIn);
    const dislikeStatus = LikeDislikeChecker(dislikes, userLoggedIn);
    const totalCount = likes.length - dislikes.length;
    const [likeDislike, setLikeDislike] = useState({ likeStatus: likeStatus, dislikeStatus: dislikeStatus, totalCount: totalCount })

    const likeIncreaseHandler = () => {
        if (isLoggedIn) {
            if (!likeDislike.likeStatus && !likeDislike.dislikeStatus) {
                setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, totalCount: (prev.totalCount + 1) } })
                console.log("true1")
                const data = { status: "true1", ...addReplyData }
                dispatch(actionForLikeThread(data));
            } else if (!likeDislike.likeStatus && likeDislike.dislikeStatus) {
                setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount + 2) } })
                console.log("true1")
                const data = { status: "true1", ...addReplyData }
                dispatch(actionForLikeThread(data));
            } else if (likeDislike.likeStatus && !likeDislike.dislikeStatus) {
                setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, totalCount: (prev.totalCount - 1) } })
                console.log("false2")
                const data = { status: "false2", ...addReplyData }
                dispatch(actionForLikeThread(data));
            }

        } else {
            dispatch(modelPopUp(true));
        }


    }
    const likeDecreaseHandler = () => {

        if (isLoggedIn) {
            if (!likeDislike.likeStatus && !likeDislike.dislikeStatus) {
                setLikeDislike((prev) => { return { ...prev, dislikeStatus: !prev.likeStatus, totalCount: (prev.totalCount - 1) } })
                console.log("false1")
                const data = { status: "false1", ...addReplyData }
                dispatch(actionForLikeThread(data));

            } else if (likeDislike.likeStatus && !likeDislike.dislikeStatus) {
                setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount - 2) } })
                console.log("false1")
                const data = { status: "false1", ...addReplyData }
                dispatch(actionForLikeThread(data));
            } else if (!likeDislike.likeStatus && likeDislike.dislikeStatus) {
                setLikeDislike((prev) => { return { ...prev, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount + 1) } })
                console.log("true2")
                const data = { status: "true2", ...addReplyData }
                dispatch(actionForLikeThread(data));
            }
        }
        else {
            dispatch(modelPopUp(true));
        }
    }

    // =====================================================================================================================================================================================
    const classes = CommentReplyStyle();
    const likeButton = LikeButtonStyle(likeDislike);

    // =======================================================================================================================================================================================================
    return (
        <Box>
            <Box sx={{ bgcolor: "#ede7f6", px: { xs: 1, sm: 3 }, py: 1, my: "0.7rem" }}>
                <Box className={classes.topBox}>
                    <Stack className={classes.topStack}>
                        <Avatar className={classes.avatarStyle} />
                        <Typography className={classes.usernameStyle}>
                            {userId}
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
                            <Box className={classes.buttonWrapper} >
                                <ExpandMore
                                    expand={expAddCmnt}
                                    onClick={handleExpandClick}
                                // aria-expanded={expanded}
                                >
                                    <ReplyButton >Reply</ReplyButton>
                                </ExpandMore>

                                {
                                    ((isLoggedIn && (actionData.delFlag || (commentedBy === actionData.userLoggedIn))) ?
                                        <CommentDeleteAlert
                                            commentData={addReplyData}
                                            setLocalCardData={setLocalCardData}
                                        /> : null)

                                    //   <CommentDeleteButton onClick={CommentDeleteHandler}>Delete</CommentDeleteButton> : null
                                }
                            </Box>
                            <Box>
                                {replyCount > 0 &&
                                    <ExpandMoreReplies
                                        expand={expReplies}
                                        onClick={handleViewRepliesClick}
                                        replyCount={replyCount}
                                    // aria-expanded={expandedReplies}
                                    >
                                    </ExpandMoreReplies>
                                }

                            </Box>
                        </Box>
                        <Collapse in={expAddCmnt} timeout="auto" unmountOnExit>
                            <ReplyCommentBox
                                handleExpandClick={handleExpandClick}
                                addReplyData={addReplyData}
                                setLocalCommentData={setLocalCommentData}
                                setExpandedReplies={setExpReplies}
                            />
                        </Collapse>
                        <Collapse in={expReplies} timeout="auto" unmountOnExit>
                            {
                                typeof (replies) !== "undefined" && (replies.map((data) => {
                                    return (
                                        <Reply
                                            addReplyData={addReplyData}
                                            replyData={data}
                                            actionData={actionData}
                                            setLocalCommentData={setLocalCommentData}
                                            key={data._id}></Reply>
                                    )
                                }))
                            }
                        </Collapse>
                    </Box>
                </Box>
            </Box>
        </Box >

    )
}

export default Comments;
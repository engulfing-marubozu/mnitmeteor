import React, { useState } from 'react'
import { Typography, Box, Avatar, Stack, IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ReplyButton, CommentDeleteButton, } from '../DiscussionStyling/discussionStyling';
import ReplyCommentBox from './replyCommentBox';
import Collapse from '@mui/material/Collapse';
import { CommentReplyStyle, LikeButtonStyle } from '../DiscussionStyling/discussionCardStyliing';
import { TimeSince } from '../../TimeElapsed/timecalc';
import { ExpandMore } from './_expandMore';
import { useDispatch, useSelector } from 'react-redux';
import { actionForLikeThread } from '../../../AStatemanagement/Actions/userActions';
import { modelPopUp } from '../../../AStatemanagement/Actions/userActions';

function Reply({ replyData, addReplyData, actionData, setLocalCommentData }) {


  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [likeDislike, setLikeDislike] = useState({ likeStatus: false, dislikeStatus: false, totalCount: 9 })
  // ============================================================================================================================================================================
  const handleExpandClick = () => {
    isLoggedIn ? (setExpanded(!expanded)) : (dispatch(modelPopUp(true)));
  };
  //  ========================================================================================================================================================================
  const replyId = replyData?._id;
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin)
  const reply = replyData?.content;
  const userId = replyData?.mnit_id;
  const repliedBy = replyData?.replied_by;
  const date = new Date(replyData?.createdAt);
  const properDate = TimeSince(date);
  const replySqrData = { ...addReplyData, replyId: replyId }

  const likeIncreaseHandler = () => {
    if (isLoggedIn) {
      if (!likeDislike.likeStatus && !likeDislike.dislikeStatus) {
        setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, totalCount: (prev.totalCount + 1) } })
        console.log("true1")
        const data = { status: "true1", ...replySqrData }
        dispatch(actionForLikeThread(data));
      } else if (!likeDislike.likeStatus && likeDislike.dislikeStatus) {
        setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount + 2) } })
        // dispatch(actionForLikeThread())flase1
        console.log("true1")
        const data = { status: "true1", ...replySqrData }
        dispatch(actionForLikeThread(data));
      } else if (likeDislike.likeStatus && !likeDislike.dislikeStatus) {
        setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, totalCount: (prev.totalCount - 1) } })
        // dispatch(actionForLikeThread())flase1
        console.log("false2")
        const data = { status: "false2", ...replySqrData }
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
        const data = { status: "false1", ...replySqrData }
        dispatch(actionForLikeThread(data));

      } else if (likeDislike.likeStatus && !likeDislike.dislikeStatus) {
        setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount - 2) } })
        // dispatch(actionForLikeThread())flase1
        console.log("false1")
        const data = { status: "false1", ...replySqrData }
        dispatch(actionForLikeThread(data));
      } else if (!likeDislike.likeStatus && likeDislike.dislikeStatus) {
        setLikeDislike((prev) => { return { ...prev, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount + 1) } })
        // dispatch(actionForLikeThread())flase1
        console.log("true2")
        const data = { status: "true2", ...replySqrData }
        dispatch(actionForLikeThread(data));
      }

    } else {
      dispatch(modelPopUp(true));
    }
  }

  // ==================================================================================

  const ReplyDeleteHandler = () => {

  }
  // ==================================================================================================================================================================================
  const likeButton = LikeButtonStyle(likeDislike);
  const classes = CommentReplyStyle();
  // ================================================================================================================================================================================
  return (
    <Box sx={{ mt: 1.5 }}>
      <Box className={classes.topBox}>
        <Stack className={classes.topStack}>
          <Avatar className={classes.avatarStyle} />
          <Typography className={classes.usernameStyle}>{userId}</Typography>
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
            {reply}
          </Typography>
          <Box className={classes.actionBoxStyle}>
            <Box className={classes.buttonWrapper}>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
              >
                <ReplyButton >Reply</ReplyButton>
              </ExpandMore>

              {
                ((isLoggedIn && (actionData.delFlag || (repliedBy === actionData.userLoggedIn))) ? (
                  <CommentDeleteButton onClick={ReplyDeleteHandler}>Delete</CommentDeleteButton>) : null)

              }
            </Box>
          </Box>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ReplyCommentBox
              handleExpandClick={handleExpandClick}
              defaultValue={`replied to ${userId}    `}
              addReplyData={replySqrData}
              setLocalCommentData={setLocalCommentData}
            />
          </Collapse>
        </Box>
      </Box>
    </Box>

  )
}

export default Reply;
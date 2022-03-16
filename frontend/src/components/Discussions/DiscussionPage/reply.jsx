import React, { useState, useEffect } from 'react'
import { Typography, Box, Avatar, Stack, IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ReplyButton, CommentDeleteButton, } from '../DiscussionStyling/discussionStyling';
import ReplyCommentBox from './replyCommentBox';
import Collapse from '@mui/material/Collapse';
import { CommentReplyStyle, LikeButtonStyle } from '../DiscussionStyling/discussionCardStyliing';
import { TimeSince } from '../../TimeElapsed/timecalc';
import { ExpandMore } from './_expandMore';
import { useDispatch } from 'react-redux';
import { actionForLikeThread } from '../../../AStatemanagement/Actions/userActions';






function Reply({ replyData, addReplyData }) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [likeDislike, setLikeDislike] = useState({ likeStatus: false, dislikeStatus: false, totalCount: 9 })
  // ============================================================================================================================================================================
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //  ========================================================================================================================================================================

  const initialState = { likeStatus: false, dislikeStatus: false };

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
  // console.log(replyData);
  const replyId = replyData?._id;
  const reply = replyData?.content;
  const repliedBy = replyData?.mnit_id;
  const date = new Date(replyData?.createdAt);
  const properDate = TimeSince(date);
  const replySqrData = { ...addReplyData, replyId: replyId }
  // =======================================================================================
  useEffect(() => {

    return () => {
      console.log("deepakreply")
      if ((initialState.likeStatus || !initialState.likeStatus) && !initialState.dislikeStatus) {
        if (!likeDislike.likeStatus && !likeDislike.dislikeStatus) {
          console.log("false2")
          //false2
          const data = { status: "false2", ...replySqrData }
          dispatch(actionForLikeThread(data));

        } else if (!likeDislike.likeStatus && likeDislike.dislikeStatus) {
          console.log("false1")
          //false1
          const data = { status: "false1", ...replySqrData }
          dispatch(actionForLikeThread(data));

        }
      }
      if (!initialState.likeStatus && (initialState.dislikeStatus || !initialState.dislikeStatus)) {
        if (!likeDislike.likeStatus && !likeDislike.dislikeStatus) {
          console.log("true2")
          //true2
          const data = { status: "true2", ...replySqrData }
          dispatch(actionForLikeThread(data));

        } else if (initialState.likeStatus && !initialState.dislikeStatus) {
          console.log("true1")
          const data = { status: "true1", ...replySqrData }
          dispatch(actionForLikeThread(data));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])







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
          <Typography className={classes.usernameStyle}>{repliedBy}</Typography>
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
                <CommentDeleteButton onClick={ReplyDeleteHandler}>Delete</CommentDeleteButton>
              }
            </Box>
          </Box>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ReplyCommentBox handleExpandClick={handleExpandClick} />
          </Collapse>
        </Box>
      </Box>
    </Box>

  )
}

export default Reply;
import React, { useState } from 'react'
import { Typography, Box, Avatar, Stack, styled, IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ReplyButton, CommentDeleteButton, ViewRepliesButton } from '../DiscussionStyling/discussionStyling';
import ReplyCommentBox from './replyCommentBox';
import Collapse from '@mui/material/Collapse';
import { CommentReplyStyle, LikeButtonStyle } from '../DiscussionStyling/discussionCardStyliing';
import { TimeSince } from '../../TimeElapsed/timecalc';
import { ExpandMore } from './_expandMore';

function Reply({ replyData }) {
  const [expanded, setExpanded] = useState(false);

  const [likeDislike, setLikeDislike] = useState({ likeStatus: false, dislikeStatus: false, totalCount: 9 })
  // ============================================================================================================================================================================
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //  ========================================================================================================================================================================
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
  const reply = replyData?.content;
  const repliedBy = replyData.mnit_id;
  const date = new Date(replyData.createdAt);
  const properDate = TimeSince(date);

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
                <CommentDeleteButton>Delete</CommentDeleteButton>
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
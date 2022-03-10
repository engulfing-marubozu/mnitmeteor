import React, { useState } from 'react'
import { Typography, Box, Avatar, Stack, styled, IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ReplyButton, CommentDeleteButton, ViewRepliesButton } from '../DiscussionStyling/discussionStyling';
import ReplyCommentBox from './replyCommentBox';
import Collapse from '@mui/material/Collapse';
import { LikeButtonStyle } from '../DiscussionStyling/discussionCardStyliing';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <ReplyButton {...other}>Reply</ReplyButton>
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExpandMoreReplies = styled((props) => {
  const { expand, ...other } = props;
  if (!expand) {
    return <ViewRepliesButton{...other}>View Replies</ViewRepliesButton>
  } else {
    return <ViewRepliesButton{...other}>Hide Replies</ViewRepliesButton>
  }
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
function Reply() {
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
  const likeButton = LikeButtonStyle(likeDislike);
  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar sx={{ width: { xs: 24, sm: 28 }, height: { xs: 24, sm: 28 }, bgcolor: "#673ab7" }}></Avatar>
          <Typography sx={{ color: "#512da8", fontWeight: "bold", px: 1, fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>2019ume1143</Typography>
        </Stack>
        <Typography variant="body2" sx={{ pl: { sm: 3, xs: 4 }, color: "#757575" }}>26 sep 2020</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }} >
        <Box className={likeButton.likeCardBox}>
          <IconButton className={likeButton.likeIncButton} onClick={likeIncreaseHandler}><ArrowUpwardIcon sx={{ fontSize: 15 }} /></IconButton>
          <Stack className={likeButton.likeCommentCount}>{Math.abs(likeDislike.totalCount)}</Stack>
          <IconButton className={likeButton.likeDecButton} onClick={likeDecreaseHandler}><ArrowDownwardIcon sx={{ fontSize: 15 }} /></IconButton>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ mb: 0.4, pl: { xs: 0.5, sm: 0.2 }, wordBreak: "break-all" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Numquam quis laudantium deleniti vel est recusandae, doloremque sequi,
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
              >
              </ExpandMore>
              <CommentDeleteButton>Delete</CommentDeleteButton>
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
            <ReplyCommentBox handleExpandClick={handleExpandClick} />
          </Collapse>
        </Box>
      </Box>
      <Collapse in={expandedReplies} timeout="auto" unmountOnExit>
        <Reply />
      </Collapse>
    </Box>

  )
}

export default Reply;
import React, { useState } from 'react'
import { Typography, Box, Avatar, Stack, styled } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ReplyButton, CommentDeleteButton, ViewRepliesButton } from './discussionStyling';
import ReplyCommentBox from './replyCommentBox';
import Collapse from '@mui/material/Collapse';

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

  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar sx={{ width: { xs: 24, sm: 28 }, height: { xs: 24, sm: 28 } }}></Avatar>
          <Typography sx={{ color: "#512da8", fontWeight: "bold", px: 1, fontSize: { xs: "0.85rem", sm: "0.95rem" } }}>2019ume1143</Typography>
        </Stack>
        <Typography variant="body2" sx={{ pl: { sm: 3, xs: 4 }, color: "#757575" }}>26 sep 2020</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }} >
        <Box display={'flex'} flexDirection={'column'} sx={{ pr: { xs: "0.5rem", sm: "0.8rem", md: "1rem" }, pl: { xs: "0.35rem" }, pt: 0.8, }}>
          <ArrowUpwardIcon sx={{ fontSize: 15 }} />
          <ArrowDownwardIcon sx={{ fontSize: 15 }} />
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
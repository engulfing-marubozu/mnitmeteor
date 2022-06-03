import React, { useRef, useState } from "react";
import { TextField, Box } from "@mui/material";
import { AddReplyButton } from "../DiscussionStyling/discussionStyling";
import { useSelector } from "react-redux";
import axios from "axios";
import PostDeletedPopup from "../../ModelPopUP/postDeletedPopup";

function ReplyCommentBox({
  handleExpandClick,
  addReplyData,
  setLocalCommentData,
  setExpandedReplies,
}) {
  const inputReply = useRef(null);
  const [disabledPost, setDisabledPost] = useState(true);
  const [visible, setVisible] = useState(false);
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const token = localUserData?.token;
  const EnablePost = (event) => {
    const commentValue = event.target.value;
    if (commentValue) {
      setDisabledPost(false);
    } else {
      setDisabledPost(true);
    }
  };

  const submitHandler = async () => {
    const email = localUserData?.userData?.email?.split("@")[0];
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/add_comment`,
        {
          thread_id: addReplyData.cardId,
          comment_id: addReplyData.commentId,
          commentor_mnit_id: email,
          content: inputReply.current.value,
          replied_to: addReplyData?.repliedTo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      if (response.data === 100) {
        setVisible(true);
      } else {
        let updatedComment = response.data;
        console.log(updatedComment);
        setLocalCommentData(updatedComment);
        inputReply.current.value = "";
        setExpandedReplies && setExpandedReplies(true);
        setDisabledPost(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const VisibleHandler = () => {
    setVisible(!visible);
  };

  return (
    <>
      {!visible && (
        <Box sx={{ width: "94%", pt: { xs: "1rem" } }}>
          <TextField
            size="small"
            color="primary"
            fullWidth
            multiline
            maxRows={4}
            placeholder="Add a reply..."
            inputRef={inputReply}
            onKeyUp={EnablePost}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
            <AddReplyButton onClick={handleExpandClick}>Cancel</AddReplyButton>
            <AddReplyButton disabled={disabledPost} onClick={submitHandler}>
              Add Reply
            </AddReplyButton>
          </Box>
        </Box>
      )}
      {visible && (
        <PostDeletedPopup Open={visible} OnClose={VisibleHandler}>
          User has deleted this comment, please refresh the page.
        </PostDeletedPopup>
      )}
    </>
  );
}

export default ReplyCommentBox;

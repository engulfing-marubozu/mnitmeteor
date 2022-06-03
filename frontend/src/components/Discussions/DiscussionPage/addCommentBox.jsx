import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { TextField, Box } from "@mui/material";
import { AddCommentButton } from "../DiscussionStyling/discussionStyling";
import axios from "axios";
import { useDispatch } from "react-redux";
import { modelPopUp } from "../../../AStatemanagement/Actions/userActions";
import PostDeletedPopup from "../../ModelPopUP/postDeletedPopup";

function AddCommentBox({ addCommentData, setLocalCardData }) {
  const [disabledPost, setDisabledPost] = useState(true);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const token = localUserData?.token;
  const isLogin = localUserData?.isLogin;
  const inputComment = useRef(null);

  // ==========================================================================================================================================================
  const EnablePost = (event) => {
    const commentValue = event.target.value;
    if (commentValue) {
      setDisabledPost(false);
    } else {
      setDisabledPost(true);
    }
  };
  // =============================================================================================================================================================
  const submitHandler = async () => {
    const email = localUserData?.userData?.email?.split("@")[0];
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/add_comment`,
        {
          thread_id: addCommentData.cardId,
          comment_id: null,
          commentor_mnit_id: email,
          content: inputComment.current.value,
          replied_to: addCommentData.repliedTo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data === 100) {
        setVisible(true);
      } else {
        console.log(response.data.updated_thread);
        setLocalCardData(response.data.updated_Thread);
        inputComment.current.value = null;
        setDisabledPost(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const submitCheck = () => {
    if (isLogin) {
      submitHandler();
    } else {
      dispatch(modelPopUp(true));
    }
  };
  const VisibleHandler = () => {
    setVisible(!visible);
  };
  // ==============================================================================================================================================
  return (
    <>
      {!visible && (
        <Box sx={{ mt: "1rem" }}>
          <Box>
            <TextField
              color="primary"
              fullWidth
              placeholder="Add a comment..."
              multiline
              maxRows={4}
              onKeyUp={EnablePost}
              inputRef={inputComment}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "flex-end" }}>
            <AddCommentButton
              disabled={disabledPost}
              onClick={submitCheck}
              size="large"
            >
              {" "}
              Add Comment
            </AddCommentButton>
          </Box>
        </Box>
      )}
      {visible && (
        <PostDeletedPopup Open={visible} OnClose={VisibleHandler}>
          comment deleted
        </PostDeletedPopup>
      )}
    </>
  );
}

export default AddCommentBox;

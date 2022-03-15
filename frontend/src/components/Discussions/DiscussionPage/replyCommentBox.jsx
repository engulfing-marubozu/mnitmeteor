import React, { useRef, useState } from 'react'
import { TextField, Box } from '@mui/material';
import { AddReplyButton } from '../DiscussionStyling/discussionStyling';
import { useSelector } from "react-redux";
import axios from 'axios'

function ReplyCommentBox({ handleExpandClick, addReplyData, setLocalCommentData, setExpandedReplies }) {
    const inputReply = useRef(null);
    const [disabledPost, setDisabledPost] = useState(true);
    const localUserData = useSelector((state) => state.loginlogoutReducer);
    const token = localUserData.token;
    const EnablePost = (event) => {
        const commentValue = event.target.value;
        if (commentValue) {
            setDisabledPost(false);
        } else {
            setDisabledPost(true);
        }
    }

    const submitHandler = async () => {
        // console.log(inputReply.current.value);
        const email = localUserData.userData.email.slice(0, 11);
        const response = await axios.post(
            "http://localhost:5000/add_comment",
            { thread_id: addReplyData.cardId, comment_id: addReplyData.commentId, commentor_mnit_id: email, content: inputReply.current.value },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        let updatedComment = {};
        response.data.updated_Thread[0].discussions.forEach((comment) => {
            if (comment._id === response.data.comment_id) {
                updatedComment = comment;
            }
        })
        // console.log(updatedComment);
        setLocalCommentData(updatedComment);
        inputReply.current.value = "";
        setExpandedReplies(true);
        setDisabledPost(true);
    }
    return (
        <Box sx={{ width: "94%", pt: { xs: "1rem" } }} >
            <form>
                <TextField
                    size="small"
                    autoFocus={true}
                    color="primary"
                    fullWidth
                    id="outlined-multiline-flexible"
                    multiline
                    maxRows={4}
                    placeholder="Add a reply..."
                    inputRef={inputReply}
                    onKeyUp={EnablePost}
                />
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                    <AddReplyButton onClick={handleExpandClick}>Cancel</AddReplyButton>
                    <AddReplyButton disabled={disabledPost} onClick={submitHandler} >Add Reply</AddReplyButton>
                </Box>
            </form>
        </Box>
    )
}

export default ReplyCommentBox;
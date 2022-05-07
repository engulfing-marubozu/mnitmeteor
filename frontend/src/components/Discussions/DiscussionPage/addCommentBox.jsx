import React, { useState, useRef } from 'react'
import { useSelector } from "react-redux"
import { TextField, Box } from '@mui/material';
import { AddCommentButton } from '../DiscussionStyling/discussionStyling';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { modelPopUp } from '../../../AStatemanagement/Actions/userActions';

function AddCommentBox({ addCommentData, setLocalCardData }) {
    const [disabledPost, setDisabledPost] = useState(true);
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
    }
    // =============================================================================================================================================================
    const submitHandler = async () => {
        const email = localUserData?.userData?.email.slice(0, 11);
        const response = await axios.post(
            `${process.env.REACT_APP_API}/add_comment`,
            { thread_id: addCommentData.cardId, comment_id: null, commentor_mnit_id: email, content: inputComment.current.value, replied_to: addCommentData.repliedTo },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        setLocalCardData(response.data.updated_Thread);
        inputComment.current.value = null;
        setDisabledPost(true);
    }
    const submitCheck = () => {
        if (isLogin) {
            submitHandler()
        } else {
            dispatch(modelPopUp(true));
        }
    }
    // ==============================================================================================================================================
    return (
        // <ThemeProvider theme={theme}>
        <Box sx={{ mt: "1rem" }} >
            <Box>
                <TextField
                    color="primary"
                    fullWidth
                    placeholder='Add a comment...'
                    multiline
                    maxRows={4}
                    onKeyUp={EnablePost}
                    inputRef={inputComment}
                />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "flex-end" }}>
                <AddCommentButton disabled={disabledPost} onClick={submitCheck} size="large"> Add Comment</AddCommentButton>
            </Box>
        </Box>
    )
}

export default AddCommentBox;
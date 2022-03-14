import React, { useState, useRef, useContext } from 'react'
import { TextField, Box } from '@mui/material';
import { CommentButton } from '../DiscussionStyling/discussionStyling';
import { UserDataContext } from '../../_ContextFolder/webContext';
import axios from 'axios'

function AddCommentBox({ addCommentData, setLocalCardData }) {
    const localUserData = useContext(UserDataContext);
    const token = localUserData.token;
    const inputComment = useRef(null);
    const [disabledPost, setDisabledPost] = useState(true);
    // const [focused,setFocused]=useState(false);

    // ==========================================================================================================================================================
    const EnablePost = (event) => {
        const commentValue = event.target.value;
        if (commentValue) {
            setDisabledPost(false);
        } else {
            setDisabledPost(true);
        }
    }
    // const CancelPost = () => {
    //     inputComment.current.value = null;
    //     setDisabledPost(true);
    //     //    setFocused(false);
    // }
    const submitHandler = async () => {
        const email = localUserData.user.email.slice(0, 11);
        const response = await axios.post(
            "http://localhost:5000/add_comment",
            { thread_id: addCommentData.cardId, comment_id: null, commentor_mnit_id: email, content: inputComment.current.value },
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
    return (
        // <ThemeProvider theme={theme}>
        <Box sx={{ width: "94%", pt: "1rem", pb: "0.5rem" }} >
            <form>
                <TextField
                    autoFocus={true}
                    color="primary"
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Comment"
                    multiline
                    maxRows={4}
                    onKeyUp={EnablePost}
                    inputRef={inputComment}
                //   value={value}
                //   onChange={handleChange}
                />
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                    {/* <CommentButton onClick={CancelPost}>Cancel</CommentButton> */}
                    <CommentButton disabled={disabledPost} onClick={submitHandler}> Add Comment</CommentButton>
                </Box>
            </form>
        </Box>
    )
}

export default AddCommentBox;
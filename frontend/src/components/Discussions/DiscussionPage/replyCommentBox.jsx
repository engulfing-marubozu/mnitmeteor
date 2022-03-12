import React, { useRef, useState, useContext } from 'react'
import { TextField, Box } from '@mui/material';
import { CommentButton } from '../DiscussionStyling/discussionStyling';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { UserDataContext } from '../../_ContextFolder/webContext';
import axios from 'axios'
const theme = createTheme({
    palette: {
        primary: {
            main: '#512da8',
        },
        secondary: {
            main: '#edf2ff',
        },
    },
});

function ReplyCommentBox({ handleExpandClick,addReplyData }) {
    const inputReply = useRef(null);
    const localUserData=useContext(UserDataContext);
    const token=localUserData.token;
    const [disabledPost, setDisabledPost] = useState(true);
    const EnablePost = (event) => {
        const commentValue = event.target.value;
        if (commentValue) {
            setDisabledPost(false);
        } else {
            setDisabledPost(true);
        }
    }

    const submitHandler= async()=>{
        console.log(inputReply.current.value);
        console.log(addReplyData);
        const email = localUserData.user.email.slice(0,11);
        // console.log(inputComment.current.value);
        // console.log(addCommentData);
        const response = await axios.post(
            "http://localhost:5000/add_comment",
            { thread_id:  addReplyData.cardId, comment_id:  addReplyData.commentId , commentor_mnit_id: email, content:inputReply.current.value},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.data);
    }
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "94%", pt: { xs: "1rem" } }} >
                <form>
                    <TextField
                        color="primary"
                        fullWidth
                        id="outlined-multiline-flexible"
                        label="Comment"
                        multiline
                        maxRows={4}
                        size="small"
                        inputRef={inputReply}
                        onKeyUp={EnablePost}
                    />
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                        <CommentButton onClick={handleExpandClick}>Cancel</CommentButton>
                        <CommentButton disabled={disabledPost} onClick={submitHandler} >Post</CommentButton>
                    </Box>
                </form>
            </Box>
        </ThemeProvider>

    )
}

export default ReplyCommentBox;
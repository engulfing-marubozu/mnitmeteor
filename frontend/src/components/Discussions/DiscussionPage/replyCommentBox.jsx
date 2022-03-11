import React, { useRef, useState } from 'react'
import { TextField, Box } from '@mui/material';
import { CommentButton } from '../DiscussionStyling/discussionStyling';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
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

function ReplyCommentBox({ handleExpandClick }) {
    const inputReply = useRef(null);

    const [disabledPost, setDisabledPost] = useState(true);
    const EnablePost = (event) => {
        const commentValue = event.target.value;
        if (commentValue) {
            setDisabledPost(false);
        } else {
            setDisabledPost(true);
        }
    }

    const submitHandler=()=>{
        console.log(inputReply.current.value);
        
    }
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "94%", pt: { xs: "0.5rem" } }} >
                <form>
                    <TextField
                        color="primary"
                        fullWidth
                        id="outlined-multiline-flexible"
                        label="Comment"
                        multiline
                        maxRows={4}
                        size="small"
                        ref={inputReply}
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
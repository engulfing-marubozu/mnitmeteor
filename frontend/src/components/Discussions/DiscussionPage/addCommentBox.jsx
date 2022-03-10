import React, { useState, useRef } from 'react'
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

function AddCommentBox() {
    const inputComment = useRef(null);
    const [disabledPost, setDisabledPost] = useState(true);
    // const [focused,setFocused]=useState(false);
// ==========================================================================================================================================================
//    const token
//    const 














// ==========================================================================================================================================================
    const EnablePost = (event) => {
        const commentValue = event.target.value;
        if (commentValue) {
            setDisabledPost(false);
        } else {
            setDisabledPost(true);
        }
    }
    const CancelPost = () => {
        inputComment.current.value = null;
        setDisabledPost(true);
        //    setFocused(false);
    }
    const submitHandler = () => {
        console.log("depak");
        console.log(inputComment.current.value);
    }
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "94%", mt: 1, pt: { xs: "0.8rem", sm: "1rem" }, pb: { xs: "0.5rem", sm: "0.8rem" } }} >
                <form>
                    <TextField
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
                        <CommentButton onClick={CancelPost}>Cancel</CommentButton>
                        <CommentButton disabled={disabledPost} onClick={submitHandler}>Post</CommentButton>
                    </Box>
                </form>
            </Box>
        </ThemeProvider>

    )
}

export default AddCommentBox;
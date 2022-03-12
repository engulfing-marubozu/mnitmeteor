import React, { useState, useRef } from 'react'
import { TextField, Box } from '@mui/material';
import { CommentButton } from '../DiscussionStyling/discussionStyling';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import {useSelector} from 'react-redux'
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

function AddCommentBox({ addCommentData }) {
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
        // console.log(inputComment.current.value)
        inputComment.current.value = null;
        setDisabledPost(true);
        //    setFocused(false);
    }
    const submitHandler =async  () => {
        console.log(inputComment.current.value);
        console.log(addCommentData);
        const response = await axios.post(
            "http://localhost:5000/add_comment",
            { thread_id: cardId, comment_id: null , commentor_mnit_id: , content:inputComment.current.value},
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
            <Box sx={{ width: "94%", pt: "1rem", pb: "0.5rem" }} >
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
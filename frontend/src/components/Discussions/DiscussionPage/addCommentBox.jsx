import React, { useState, useRef } from 'react'
import { useSelector } from "react-redux"
import { TextField, Box, Button } from '@mui/material';
import axios from 'axios'

function AddCommentBox({ addCommentData, setLocalCardData }) {

    const localUserData = useSelector((state) => state.loginlogoutReducer);
    // console.log(localUserData);
    const token = localUserData?.token;
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
        const email = localUserData?.userData?.email.slice(0, 11);
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
        <Box sx={{ mt: "1rem", display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
            <Box sx={{ width: "77%" }}>
                <TextField
                    autoFocus={true}
                    color="primary"
                    fullWidth
                    id="outlined-multiline-flexible"
                    placeholder='Add a comment...'
                    multiline
                    maxRows={4}
                    onKeyUp={EnablePost}
                    inputRef={inputComment}
                // size="small"
                //   value={value}
                //   onChange={handleChange}
                />
            </Box>

            <Box sx={{ width: "20%", my: "auto" }} >
                {/* <CommentButton onClick={CancelPost}>Cancel</CommentButton> */}
                <Button disabled={disabledPost} onClick={submitHandler}> Add Comment</Button>
            </Box>
        </Box>
    )
}

export default AddCommentBox;
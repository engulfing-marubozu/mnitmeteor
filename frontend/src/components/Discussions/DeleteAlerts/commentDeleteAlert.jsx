import React, { useRef, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { ModelColorButton, ModelOutlinedButton } from "../../ModelPopUP/ModelPopUpStyling";
import { CommentDeleteButton } from "../DiscussionStyling/discussionStyling";
import axios from "axios";
// ===============================================================================
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommentDeleteAlert({ commentData, setLocalCardData }) {
    const [open, setOpen] = React.useState(false);
    const mountedRef = useRef(true);
    useEffect(() => {
        return () => {
            mountedRef.current = false
        }
    }, [])
    // =================================================
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // ================================================
    const AgreeHandler = async () => {
        handleClose();
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API}/delete_comment`,
                { thread_id: commentData.cardId, comment_id: commentData.commentId },
                {
                    headers: {
                        Authorization: `Bearer ${commentData.token}`,
                    },
                }
            );
            if (mountedRef) {
                setLocalCardData(response.data);
                // console.log(response.data);      
            }

        } catch (err) {
            console.log(err);
        }

    }


    // ===============================================================================================================
    return (
        <>
            <CommentDeleteButton onClick={handleClickOpen}>Delete</CommentDeleteButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle sx={{ py: "0.5rem" }}>{"Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Are you sure you want to delete this Comment.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ px: "1.5rem" }}>
                    <ModelOutlinedButton variant="outlined" onClick={AgreeHandler}>
                        Delete
                    </ModelOutlinedButton>
                    <ModelColorButton onClick={handleClose} >
                        Cancel
                    </ModelColorButton>
                </DialogActions>
            </Dialog>
        </>
    );
}

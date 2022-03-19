import React, { useRef, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Slide from "@mui/material/Slide";
import { ModelColorButton, ModelOutlinedButton } from "../../ModelPopUP/ModelPopUpStyling";
import axios from "axios";
// ===============================================================================
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ThreadDeleteAlert({ threadData, setThread, flag }) {
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
        try {
            const response = await axios.post(
                "http://localhost:5000/delete_thread",
                { thread_id: threadData.cardId, flag: flag },
                {
                    headers: {
                        Authorization: `Bearer ${threadData.token}`,
                    },
                }
            );
            if (mountedRef.current) {
                setThread(response.data);
                console.log(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // ===============================================================================================================
    return (
        <>
            <IconButton onClick={handleClickOpen}>
                <Tooltip title="Delete" arrow >
                    <DeleteIcon />
                </Tooltip>
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle sx={{ py: "0.5rem" }}>{"Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Are you sure you want to delete this untur repeptio.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ px: "1.5rem" }}>
                    <ModelOutlinedButton variant="outlined" onClick={handleClose}>
                       Delete
                    </ModelOutlinedButton>
                    <ModelColorButton onClick={AgreeHandler}>
                       Cancel
                    </ModelColorButton>
                </DialogActions>
            </Dialog>
        </>
    );
}

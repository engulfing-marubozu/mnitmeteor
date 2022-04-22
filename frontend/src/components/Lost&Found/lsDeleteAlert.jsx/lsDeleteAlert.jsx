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

export default function LostFoundDeleteAlert({ deleteData, setLostFound }) {
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

    const AgreeHandler = ({ id, name, flag, postedBy }) => {
        handleClose();
        axios.post('http://localhost:5000/deleteLnfItem', {

            objID: id,
            name: name,
            flag: flag,
            posted_by: postedBy,

        })
            .then(function (response) {
                console.log(response.data);
                setLostFound(response.data);

                // setLostFound(resp)
            })
            .catch(function (error) {
                console.log(error);
            });

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
                        Are you sure you want to delete this Item
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ px: "1.5rem" }}>
                    <ModelOutlinedButton variant="outlined" onClick={() => { AgreeHandler(deleteData) }}>
                        Delete
                    </ModelOutlinedButton>
                    <ModelColorButton onClick={handleClose}>
                        Cancel
                    </ModelColorButton>
                </DialogActions>
            </Dialog>
        </>
    );
}

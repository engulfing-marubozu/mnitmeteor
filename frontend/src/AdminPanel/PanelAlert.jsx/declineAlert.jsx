import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { PanelButton } from "../PanelStyling/adminPanelStyling";
// ===============================================================================
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeclineAlert({ DeclineRequest, data, handleExpandClick }) {
    const [open, setOpen] = React.useState(false);

    // ===============================================
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // ===============================================================================================================
    return (
        <>
            <PanelButton variant='contained' onClick={handleClickOpen}>Decline</PanelButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle sx={{ py: "0.5rem" }}>{"Decline"}</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Are you sure you want to Decline this product
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ px: "1.5rem" }}>
                    <PanelButton
                        variant="outlined"
                        onClick={handleClose}
                        color="error"
                    >
                        Cancel
                    </PanelButton>
                    <PanelButton
                        onClick={() => { DeclineRequest(data, handleClose, handleExpandClick) }}
                        variant="contained"
                        color="error"
                    >
                        Decline
                    </PanelButton>
                </DialogActions>
            </Dialog>
        </>
    );
}

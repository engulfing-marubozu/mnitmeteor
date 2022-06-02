import React, { useRef, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Slide from "@mui/material/Slide";
import {
  ModelColorButton,
  ModelOutlinedButton,
} from "../../ModelPopUP/ModelPopUpStyling";
import axios from "axios";
// ===============================================================================
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ThreadDeleteAlert({ setThread, threadData, flag }) {
  const [open, setOpen] = useState(false);
  const mountedRef = useRef(true);
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);
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
        `${process.env.REACT_APP_API}/delete_thread`,
        { thread_id: threadData.cardId, flag: flag },
        {
          headers: {
            Authorization: `Bearer ${threadData.token}`,
          },
        }
      );
      if (mountedRef.current) {
        if (flag === 3) setThread(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // ===============================================================================================================
  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <Tooltip title="Delete" arrow>
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
          <DialogContentText>
            Are you sure you want to delete this thread.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: "1.5rem" }}>
          <ModelOutlinedButton variant="outlined" onClick={AgreeHandler}>
            Delete
          </ModelOutlinedButton>
          <ModelColorButton onClick={handleClose}>Cancel</ModelColorButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

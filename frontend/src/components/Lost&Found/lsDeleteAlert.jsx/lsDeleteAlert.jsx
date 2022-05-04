import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function LostFoundDeleteAlert({ deleteData, setLostFound }) {
  const [open, setOpen] = useState(false);
  const Navigate = useNavigate();
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

  const AgreeHandler = ({ id, name, flag, postedBy }) => {
    handleClose();
    axios
      .post(`${process.env.REACT_APP_API}/deleteLnfItem`, {
        objID: id,
        name: name,
        flag: flag,
        posted_by: postedBy,
      })
      .then(function (response) {
        if (flag === 5) {
          Navigate("/lost&found");
        } else if (flag === 4) {
          setLostFound(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
            Are you sure you want to delete this Item
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: "1.5rem" }}>
          <ModelOutlinedButton
            variant="outlined"
            onClick={() => {
              AgreeHandler(deleteData);
            }}
          >
            Delete
          </ModelOutlinedButton>
          <ModelColorButton onClick={handleClose}>Cancel</ModelColorButton>
        </DialogActions>
      </Dialog>
    </>
  );
}

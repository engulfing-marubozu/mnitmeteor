import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataForDeletingPublishedAds } from "../../AStatemanagement/Actions/userActions";
import { ModelColorButton, ModelOutlinedButton } from "./ModelPopUpStyling";
import { CardStyleFirst } from "../_Styling/cardStyling";
// ===========================================================MAIN CONTENT=====================
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductDeleteAlert(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginlogoutReducer.token);
  // ======================================================ALERT OPEN CLOSE HANDLERS ==========
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // ================================================= PUBLISHED ADS DELETE ==============--=========
  const AgreeHandler = () => {
    const productData = { token: token, productId: props.productId };
    dispatch(fetchDataForDeletingPublishedAds(productData));
    handleClose();
  };
  const classes = CardStyleFirst();
  // ===============================================================================================================
  return (
    <div>
      <Tooltip title="Delete" arrow>
        <IconButton sx={{ p: "0.25rem" }} onClick={handleClickOpen}>
          <DeleteIcon className={classes.Icon} />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle sx={{ py: "0.5rem" }}>{"Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: "1.5rem" }}>
          <ModelOutlinedButton variant="outlined" onClick={AgreeHandler}>
            Delete
          </ModelOutlinedButton>
          <ModelColorButton onClick={handleClose}>Cancel</ModelColorButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

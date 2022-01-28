import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { deepPurple } from "@mui/material/colors";
import { styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataForDeletingPublishedAds } from "../../AStatemanagement/Actions/userActions";
// ===========================================================MAIN CONTENT===============================================================================
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ColorButton = styled(Button)(({ theme }) => ({
  lineHeight: 1.5,
  borderColor: deepPurple[700],
  color: "black",
  fontSize: "0.6rem",
  backgroundColor: "transparent",
  "&:hover": {
    borderColor: deepPurple[700],
    color: "white",
    backgroundColor: deepPurple[700],
  },
}));

export default function ProductDeleteAlert(props) {
  const dispatch = useDispatch();
  // ======================================================ALERT OPEN CLOSE HANDLERS ====================================================
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // ================================================= PUBLISHED ADS DELETE ======================================================================================
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const AgreeHandler = () => {
    const productData = { token: token, productId: props.productId };
    dispatch(fetchDataForDeletingPublishedAds(productData));
    handleClose();
  };

  // =======================================================================================================================================
  return (
    <div>
      <ColorButton variant="outlined" onClick={handleClickOpen}>
        Delete
      </ColorButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this product
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: deepPurple[500] }} onClick={handleClose}>
            Disagree
          </Button>
          <Button sx={{ color: deepPurple[500] }} onClick={AgreeHandler}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import React from "react";
import ReactDom from "react-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  PopUpElementStyle,
  TermsofUseStyle,
} from "../ModelPopUP/ModelPopUpStyling";

function TermsofUse({ open, onClose }) {
  const classes = TermsofUseStyle();
  const overlayStyle = PopUpElementStyle();
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div
        className={overlayStyle.overlay}
        onClick={() => {
          onClose();
        }}
      />
      <div className={overlayStyle.modelStyle}>
        <Box className={classes.topBox}>
          <Box className={classes.headingBox}>
            <Typography variant="h6" className={classes.heading}>
              Terms of use{" "}
            </Typography>
            <Box>
              <IconButton
                sx={{ p: "2px" }}
                onClick={() => {
                  onClose();
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1">
              Hold on! Our database, debbie, is saving your details...
              <br />
              Hold on! Our database, debbie, is saving your details...
              <br />
              Hold on! Our database, debbie, is saving your details...
              <br />
              Hold on! Our database, debbie, is saving your details...
              <br />
              Hold on! Our database, debbie, is saving your details...
              <br />
            </Typography>
          </Box>
        </Box>
      </div>
    </>,
    document.getElementById("portal")
  );
}
export default TermsofUse;

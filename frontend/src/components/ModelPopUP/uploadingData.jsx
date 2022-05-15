import React from "react";
import ReactDom from "react-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PopUpElementStyle, UploadStyle } from "./ModelPopUpStyling";

function DataUploadingPopup({ open }) {
  const classes = UploadStyle();
  const overlayStyle=PopUpElementStyle();
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className={overlayStyle.overlay} />
      <div className={overlayStyle.modelStyle}>
        <Box className={classes.topBox}>
          <Box className={classes.imageBox}>
            <img
              className={classes.image}
              src={
                "https://res.cloudinary.com/mnitmarket/image/upload/v1652268922/Video_upload-pana_oesia1.svg"
              }
              alt="uploadIcon"
            />
          </Box>
          <Box className={classes.typoBox}>
            <Typography variant="body1" className={classes.typo}>
              Hold on! Our database, debbie, is saving your details...
            </Typography>
          </Box>
        </Box>
      </div>
    </>,
    document.getElementById("uploadData")
  );
}
export default DataUploadingPopup;

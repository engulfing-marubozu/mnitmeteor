import React from "react";
import ReactDom from "react-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PopUpElementStyle, UploadStyle } from "./ModelPopUpStyling";

function PostDeletedPopup({ Open, children, OnClose }) {
  const classes = UploadStyle();
  const overlayStyle = PopUpElementStyle();
  if (!Open) return null;
  return ReactDom.createPortal(
    <>
      <div className={overlayStyle.overlay} onClick={OnClose} />
      <div className={overlayStyle.modelStyle}>
        <Box className={classes.topBox}>
          <Box className={classes.imageBox}>
            <img
              className={classes.image}
              src={
                "https://res.cloudinary.com/mnitmarket/image/upload/v1654248310/Inbox_cleanup-rafiki_u0abhg.svg"
              }
              alt="deletedPost"
            />
          </Box>
          <Box className={classes.typoBox}>
            <Typography variant="body1" className={classes.typo}>
              {children}
            </Typography>
          </Box>
        </Box>
      </div>
    </>,
    document.getElementById("portal")
  );
}
export default PostDeletedPopup;

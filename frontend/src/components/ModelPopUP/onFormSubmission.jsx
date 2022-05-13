import React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { UploadStyle } from "./ModelPopUpStyling";
export default function FormSubmission({ onClose, children, source }) {
  // ==========================================================GETTING DETAILS FROM STATE-REDUX ================
  const classes = UploadStyle();
  return (
    <Box className={classes.topBox}>
      <Box className={classes.iconBox}>
        <IconButton
          className={classes.closeIcon}
          onClick={() => {
            onClose(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box className={classes.imageBox}>
        <img className={classes.image} src={source} alt="uploadIcon" />
      </Box>
      <Box className={classes.typoBox}>
        <Typography variant="body1" className={classes.typo}>
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

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
              By accessing or using the Website or any part thereof, you
              indicate your understanding and acceptance of these terms. If you
              do not agree to these terms, please do not use or further access
              this website.
              <br />
              <br />
              For the purpose of these terms and wherever the context so
              requires, the terms "you", and "your" and "user" shall mean any
              person who accesses or uses the website.
              <br />
              <br />
              1. mnitmeteor may revoke your rights to use this website or the
              content at any time and for any reason. mnitmeteor can do this
              without giving you any notice or informing you of this.
              <br />
              2. You must not post nude, partially nude, or sexually suggestive
              photos.
              <br />
              3. You must not abuse, harass, threaten, impersonate or intimidate
              other mnitmeteor users in the discussion community.
              <br />
              4. Any post on this website should not violate the rules and
              regulations of the institute.
            </Typography>
          </Box>
        </Box>
      </div>
    </>,
    document.getElementById("portal")
  );
}
export default TermsofUse;

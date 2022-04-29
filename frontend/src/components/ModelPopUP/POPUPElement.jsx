import React from "react";
import ReactDom from "react-dom";
import { PopUpElementStyle } from "./ModelPopUpStyling";

function POPUPElement({ open, children, onClose, portelId }) {
  const classes = PopUpElementStyle();
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div
        className={classes.overlay}
        onClick={() => {
          onClose(false);
        }}
      />
      <div className={classes.modelStyle}>{children}</div>
    </>,
    document.getElementById(portelId)
  );
}

export default POPUPElement;

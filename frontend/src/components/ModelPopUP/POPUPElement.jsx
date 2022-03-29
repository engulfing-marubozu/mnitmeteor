import React from "react";
import ReactDom from "react-dom";
const OVERlAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 2000,
};
const MODEL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2000,
};
function POPUPElement({ open, children, onClose, portelId }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div
        style={OVERlAY_STYLES}
        onClick={() => {
          onClose(false);
        }}
      />
      <div style={MODEL_STYLES}>{children}</div>
    </>,
    document.getElementById(portelId)
  );
}

export default POPUPElement;

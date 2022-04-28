import React from "react";
import ReactDom from "react-dom";
import { Box } from "@mui/material";
import { AdminPortelStyle } from "../PanelStyling/adminportelStyle";
import { Outlet } from "react-router-dom";
function AdminPortel() {
  const classes = AdminPortelStyle();
  return ReactDom.createPortal(
    <Box className={classes.overlay}>
      <Outlet />
    </Box>,
    document.getElementById("adminportel")
  );
}

export default AdminPortel;

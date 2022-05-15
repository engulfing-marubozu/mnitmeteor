import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import FetchLostFound from "./PanelDataFetching/fetchL&S";
import FetchSellProd from "./PanelDataFetching/fetchSellProd";
import FetchThread from "./PanelDataFetching/fetchThread";
import { AdminPanelStyle } from "./PanelStyling/adminportelStyle";
function AdminPanel() {
  const Navigate = useNavigate();
  const classes = AdminPanelStyle();
  const AdminLogout = () => {
    window.localStorage.removeItem("Bgp_pejbsv/+/&}s");
    Navigate("/");
  };
  return (
    <Box className={classes.panelMainBox}>
      <Box className={classes.headingAction}>
        <Box>
          <Typography className={classes.panelHeading}>
            This is Admin Panel
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={() => Navigate("/")}>
            <CloseIcon className={classes.closeIcon} />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.buttonBox}>
        <Button variant="contained" onClick={AdminLogout}>
          Logout
        </Button>
      </Box>
      <FetchSellProd />
      <FetchThread />
      <FetchLostFound />
    </Box>
  );
}

export default AdminPanel;

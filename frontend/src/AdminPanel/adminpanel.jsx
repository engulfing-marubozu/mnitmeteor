
import { Typography } from "@mui/material";
import React from "react";
import FetchLostFound from "./PanelDataFetching/fetchL&S";
import FetchSellProd from "./PanelDataFetching/fetchSellProd";
import FetchThread from "./PanelDataFetching/fetchThread";
function AdminPanel() {
  return (
    <>
      <Typography variant="h5" sx={{ m: "1rem" ,color:"white" }}>
        This is Admin Panel
      </Typography>
      <FetchSellProd />
      <FetchThread />
      <FetchLostFound />
    </>
  );
}

export default AdminPanel;




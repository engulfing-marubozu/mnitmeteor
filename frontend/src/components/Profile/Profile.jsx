import { Paper, Typography } from "@mui/material";
import React from "react";
import InterestedProduct from "./InterestedProduct/interestedProduct";
import PublishedAds from "./PublishedAds/publishedAds";

function Profile() {
  return (
    <div>
      <Paper sx={{ bgcolor: "#212121", height: "400px" }} />
      <Typography
        variant={"h4"}
        fontWeight={"bold"}
        sx={{
          px: "20px",
          py: "20px",
          mr: { xs: 1, md: 10 },
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        Published Ads
      </Typography>
      {/* =================================== */}
      <PublishedAds />
      {/* =================================== */}
      <Typography
        variant={"h4"}
        fontWeight={"bold"}
        sx={{
          px: "20px",
          py: "20px",
          mr: { xs: 1, md: 10 },
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
      Your Orders
      </Typography>
      <InterestedProduct/>
    </div>
  );
}

export default Profile;

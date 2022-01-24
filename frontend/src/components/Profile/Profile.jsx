import { Paper, Typography, Box, Stack } from "@mui/material";
import React from "react";
import InterestedProduct from "./InterestedProduct/interestedProduct";
import PublishedAds from "./PublishedAds/publishedAds";

function Profile() {
  return (
    <div>
      <Paper sx={{ height: "400px" }}>
        <Box>
          <Box>
           
          </Box>
          <Box sx={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
            <Typography variant="h6">Email : 2019ume1827@mnit.ac.in</Typography>
            {/* <Typography></Typography> */}
            <Typography variant="h6"> Phone No:7000083820</Typography>
            <Typography></Typography>
            <span> 20 Favourites</span>
            <span> 13 Published Ads</span>
            <span> 2 Orders</span>
          </Box>
        </Box>
      </Paper>

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
      <InterestedProduct length={0} />
    </div>
  );
}

export default Profile;

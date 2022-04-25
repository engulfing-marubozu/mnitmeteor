import React from "react";
import { Skeleton, Box } from "@mui/material";

function NotificationSkeleton() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "solid 2px #757575",
        my: "0.5rem",
        borderRadius: "0.5rem",
        p: "0.5rem",
      }}
    >
      <Skeleton width="30%" height="2rem" />
      <Box>
        <Skeleton width="95%" height="1rem" />
        <Skeleton width="60%" height="1rem" />
      </Box>
    </Box>
  );
}

export default NotificationSkeleton;

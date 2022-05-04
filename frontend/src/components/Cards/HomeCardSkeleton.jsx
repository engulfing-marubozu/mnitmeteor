import React from "react";
import { motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function HomeCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Paper
        sx={{ display: "flex", flexDirection: "column", maxWidth: "280px" }}
      >
        <Skeleton
          variant="rectangular"
          maxwidth={"280px"}
          height={"160px"}
          sx={{ bgcolor: "transparent", borderRadius: "4px 4px 0px 0px" }}
        />
        <Box
          sx={{ p: 1, bgcolor: "#f5f5f5", borderRadius: "0px 0px 4px 4px"}}
        >
          <Skeleton width="80%" height="1rem" />
          <Skeleton width="60%" height="1rem" />
        </Box>
      </Paper>
    </motion.div>
  );
}

export default HomeCardSkeleton;

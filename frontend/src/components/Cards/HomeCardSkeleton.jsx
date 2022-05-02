import React from "react";
import { motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function HomeCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "280px" }}>
        <Skeleton variant="rectangular" maxwidth={"280px"} height={"160px"} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton width="80%" />
          <Skeleton width="60%" />
        </Box>
      </Box>
    </motion.div>
  );
}

export default HomeCardSkeleton;

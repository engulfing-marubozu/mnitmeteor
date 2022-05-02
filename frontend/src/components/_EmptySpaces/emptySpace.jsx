import React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function EmptySpace({ source }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <img
          src={source.svg}
          alt="empty space"
          style={{ width: "100%", height: "380px", objectFit: "contain" }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: { sm: "16px", xs: "12px" },
          fontWeight: "bold",
          textAlign: "center",
          px: { sm: "1.5rem", xs: "1rem" },
        }}
      >
        {source.text}
      </Typography>
    </motion.div>
  );
}

export default EmptySpace;

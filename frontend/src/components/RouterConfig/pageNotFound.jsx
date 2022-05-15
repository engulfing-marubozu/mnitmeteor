import React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
function PageNotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box>
        <img
          src={
            "https://res.cloudinary.com/mnitmarket/image/upload/v1651951869/404_Error_Page_not_Found_with_people_connecting_a_plug-pana_byvvdo.svg"
          }
          alt="page not found"
          style={{ width: "100%", height: "480px", objectFit: "contain" }}
        />
      </Box>
    </motion.div>
  );
}

export default PageNotFound;

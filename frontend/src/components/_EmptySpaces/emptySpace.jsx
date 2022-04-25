import React from "react";
import { Box, Typography } from "@mui/material";
function EmptySpace({ source }) {
  return (
    <Box>
      <Box>
        {/* <Typography>this is empty space</Typography> */}
        <img
          src={source.svg}
          alt="empty space"
          style={{ width: "100%", height: "380px", objectFit: "contain" }}
        />
      </Box>
      <Typography sx={{fontSize:{sm:"16px",xs:"12px" } ,fontWeight:"bold",textAlign:"center",px:{sm:"1.5rem" ,xs:"1rem"}}}>{source.text}</Typography>
    </Box>
  );
}

export default EmptySpace;

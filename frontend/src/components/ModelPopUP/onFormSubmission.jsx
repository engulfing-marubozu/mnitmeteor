import React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Stack, Typography } from "@mui/material";
// ========================================================MAIN FUNCTION=======================================

export default function SuccessfulSubmission({ onClose, children }) {
  // ==========================================================GETTING DETAILS FROM STATE-REDUX ================

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: { md: 600, sm: 480, xs: 320 },
          backgroundColor: "white ",
          borderRadius: "7px",
        }}
      >
        <Stack direction="row" justifyContent="flex-end">
          <IconButton
            sx={{ p: "4px" ,margin:"4px 4px 0 0" }}
            onClick={() => {
              onClose();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box sx={{ px: "1.8rem", pb: "1.8rem" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", pb: "4px" }}
          ></Typography>
          <Typography variant="body1">{children}</Typography>
        </Box>
      </Box>
    </div>
  );
}

import React from "react";
import MenuItem from "@mui/material/MenuItem";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import BookIcon from "@mui/icons-material/Book";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import CableIcon from "@mui/icons-material/Cable";
import MoreIcon from "@mui/icons-material/More";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function MenuBarCategory({ menuClose }) {
  // ========================we can Handle page by this function
  const Navigate = useNavigate();
  const CategoryItemHandler = (flag) => {
    Navigate(`/product/${flag}`);
    menuClose();
  };
  // ==============================
  return (
    <>
      <Box sx={{ ml: "2.25rem" }}>
        <MenuItem
          onClick={() => {
            CategoryItemHandler("books");
          }}
        >
          <BookIcon fontSize="small" sx={{ mr: 2 }} />
          Books
        </MenuItem>
        <MenuItem
          onClick={() => {
            CategoryItemHandler("cycle");
          }}
        >
          <DirectionsBikeIcon fontSize="small" sx={{ mr: 2 }} />
          Cycle
        </MenuItem>
        <MenuItem
          onClick={() => {
            CategoryItemHandler("electronics");
          }}
        >
          <CableIcon fontSize="small" sx={{ mr: 2 }} />
          Electronics
        </MenuItem>
        <MenuItem
          onClick={() => {
            CategoryItemHandler("uniform");
          }}
        >
          <CheckroomIcon fontSize="small" sx={{ mr: 2 }} />
          Uniform
        </MenuItem>
        <MenuItem
          onClick={() => {
            CategoryItemHandler("others");
          }}
        >
          <MoreIcon fontSize="small" sx={{ mr: 2 }} />
          Others
        </MenuItem>
      </Box>
    </>
  );
}

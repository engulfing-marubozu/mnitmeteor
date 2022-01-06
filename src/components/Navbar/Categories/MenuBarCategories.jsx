import React from "react";
import MenuItem from "@mui/material/MenuItem";
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import BookIcon from '@mui/icons-material/Book';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CableIcon from '@mui/icons-material/Cable';
import MoreIcon from '@mui/icons-material/More';
export default function MenuBarCategory(props) {
  // ========================we can Handle page by this function
  const CategoryItemHandler = () => {
    console.log("CategoryItemHandler ");
  };
  // ==============================
  return (
    <>
      <MenuItem onClick={CategoryItemHandler}><BookIcon sx={{fontsize:5 ,mr:2}} />Book</MenuItem>
      <MenuItem onClick={CategoryItemHandler}><CheckroomIcon sx={{fontsize:5 ,mr:2}} />Clothes</MenuItem>
      <MenuItem onClick={CategoryItemHandler}><DirectionsBikeIcon sx={{fontsize:5 ,mr:2}} />Cycle</MenuItem>
      <MenuItem onClick={CategoryItemHandler}><CableIcon sx={{fontsize:5 ,mr:2}} />Electronics</MenuItem>
      <MenuItem onClick={CategoryItemHandler}><MoreIcon sx={{fontsize:5 ,mr:2}} />Others</MenuItem>
    </>
  );
}

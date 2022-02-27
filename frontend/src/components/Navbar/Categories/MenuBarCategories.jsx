import React from "react";
import MenuItem from "@mui/material/MenuItem";
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import BookIcon from '@mui/icons-material/Book';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CableIcon from '@mui/icons-material/Cable';
import MoreIcon from '@mui/icons-material/More';
import { useNavigate } from "react-router-dom";
export default function MenuBarCategory(props) {
  // ========================we can Handle page by this function
  const Navigate=useNavigate();
  const CategoryItemHandler = (flag) => {
    Navigate(`/Product/${flag}`);
    props.MenuBarClose();
    props.CategoryClose();
  };
  // ==============================
  return (
    <>
      <MenuItem onClick={()=>{CategoryItemHandler("Book")}}><BookIcon sx={{fontsize:5 ,mr:2}} />Books</MenuItem>
      <MenuItem onClick={()=>{CategoryItemHandler("Cloth")}}><CheckroomIcon sx={{fontsize:5 ,mr:2}} />Clothes</MenuItem>
      <MenuItem onClick={()=>{CategoryItemHandler("Cycle")}}><DirectionsBikeIcon sx={{fontsize:5 ,mr:2}} />Cycles</MenuItem>
      <MenuItem onClick={()=>{CategoryItemHandler("Electronics")}}><CableIcon sx={{fontsize:5 ,mr:2}} />Electronics</MenuItem>
      <MenuItem onClick={()=>{CategoryItemHandler("Others")}}><MoreIcon sx={{fontsize:5 ,mr:2}} />Others</MenuItem>
    </>
  );
}

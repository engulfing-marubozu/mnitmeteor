import React from "react";
import MenuItem from "@mui/material/MenuItem";
import CategoryIcon from "@mui/icons-material/Category";
import SellIcon from "@mui/icons-material/Sell";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
//  import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import MenuBarCategory from "./MenuBarCategories";
import { StyledMenu } from "../NavabarStyle";

export default function MymenuBar(props) {
  // ========================we can Handle page by this function
  const menuItemHandler = () => {
    props.menuClose();
    console.log("menuItemHandler ");
  };
  // ==============================
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={menuItemHandler}>
        <HomeIcon sx={{ fontsize: 3, mr: 1 }} />
        Home
      </MenuItem>
      <MenuItem onClick={menuItemHandler}>
        <InfoIcon sx={{ fontsize: 3, mr: 1 }} />
        About
      </MenuItem>
      <MenuItem  onClick={handleClick}>
        <CategoryIcon sx={{ fontsize: 3, mr: 1 }} />
        Categories
      </MenuItem>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuBarCategory CategoryClose={props.menuClose} MenuBarClose={handleClose} />
      </StyledMenu>
      <MenuItem onClick={menuItemHandler}>
        <SellIcon sx={{ fontsize: 3, mr: 1 }} />
        Sell Now
      </MenuItem>
      <MenuItem onClick={menuItemHandler}>
        <LoginIcon sx={{ fontsize: 3, mr: 1 }} />
        Login
      </MenuItem>
    </>
  );
}

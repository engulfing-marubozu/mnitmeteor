import React, {useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import CategoryIcon from "@mui/icons-material/Category";
import SellIcon from "@mui/icons-material/Sell";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
//  import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import MenuBarCategory from "./MenuBarCategories";
import { StyledMenu } from "../NavabarStyle";
import {useNavigate} from "react-router-dom";
import Model from "../../loginForm/Model";
export default function MymenuBar(props) {

const Navigate=useNavigate();

  // ========================we can Handle page by this function
  const menuItemHandler = (input="flag") => {
    input==="Home"&&Navigate("/");
    input==="About"&&Navigate("/About");
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
//========================================================================================LOGIN PAGE POP UP=====================================
const [loginpop,setloginPop]=useState(false);

const  loginCloseHandler=()=>{
  console.log("close");
  setloginPop(false);
}


  return (
    <>
      <MenuItem onClick={()=>{menuItemHandler("Home")}}>
        <HomeIcon sx={{ fontsize: 3, mr: 1 }} />
        Home
      </MenuItem>
      <MenuItem onClick={()=>{menuItemHandler("About")}}>
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
      <MenuItem onClick={()=>{ setloginPop(true) }}>
        <SellIcon sx={{ fontsize: 3, mr: 1 }} />
        Sell Now
      </MenuItem>
      <MenuItem onClick={()=>{ setloginPop(true) ;}}>
        <LoginIcon sx={{ fontsize: 3, mr: 1 }} />
        Login
      </MenuItem>
      {loginpop&&<Model onClose={loginCloseHandler}></Model>}
    </>
  );
}

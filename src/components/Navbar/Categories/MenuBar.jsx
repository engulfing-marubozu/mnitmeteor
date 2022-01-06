import React from "react";
import MenuItem from "@mui/material/MenuItem";
import CategoryIcon from "@mui/icons-material/Category";
import SellIcon from "@mui/icons-material/Sell";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
// import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu"
import MenuBarCategory from "./MenuBarCategories";

export default function MymenuBar(props) {
  // ========================we can Handle page by this function
  const menuItemHandler = () => {
    console.log("menuItemHandler ");
  };
  // ==============================

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <MenuItem>
        {" "}
        <Stack direction="row" justifyContent="center">
          <AcUnitIcon sx={{ mr: 2 }} />
          <Typography
            variant="h5"
            color="inherit"
            noWrap
            sx={{
              fontWeight: 700,
              fontSize: "20px",
              mr: 11,
            }}
          >
            Mnit Market
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={menuItemHandler}>
        <HomeIcon sx={{ fontsize: 5, mr: 2 }} />
        Home
      </MenuItem>
      <MenuItem onClick={menuItemHandler}>
        <InfoIcon sx={{ fontsize: 5, mr: 1 }} />
        About
      </MenuItem>
      <MenuItem onClick={handleOpenNavMenu}>
        <CategoryIcon sx={{ fontsize: 5, mr: 1 }} />
        Categories
      </MenuItem>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {/* Menu Bar function ++++++++=++++++++++++++++++++++ */}
        <MenuBarCategory menuClose={handleCloseNavMenu} />
      </Menu>
      <MenuItem onClick={menuItemHandler}>
        <SellIcon sx={{ fontsize: 5, mr: 1 }} />
        Sell Now
      </MenuItem>
      <MenuItem onClick={menuItemHandler}>
        <LoginIcon sx={{ fontsize: 5, mr: 1 }} />
        Login
      </MenuItem>
    </>
  );
}

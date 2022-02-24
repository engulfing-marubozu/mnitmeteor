import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge, Drawer } from '@mui/material';
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { useDispatch } from "react-redux";
import { LogoutUser, modelPopUp } from "../../AStatemanagement/Actions/userActions";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
function Userbar(props) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const Navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);
  // ==================================================================== lOGIN ICON ===========================
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton sx={{ p: 0.65, mr: { xs: 0.5, sm: 2 }, display: { xs: "none", md: "initial" } }}>
        <Badge badgeContent={12} color="error">
          <NotificationsIcon sx={{
            fontSize: { xs: 16, sm: 24 },
            color: "#263238",
          }}
            onClick={() => { setDrawer(true) }} />
        </Badge>
      </IconButton>
      <Drawer
        anchor='right'
        open={drawer}
        onClose={() => { setDrawer(false) }}
      >
        {/* {list('right')} */}
        my name deepak
        Ritik madarchod hai or rahul sabse bada madarchod hai
      </Drawer>

      {/* {drawer&&NotificationBox} */}
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            sx={{
              height: { xs: 24, sm: 34 },
              width: { xs: 24, sm: 34 },
              fontSize: { xs: 12, sm: 18 },
              color: "#263238",
              fontWeight: "bold",
            }}
          >
            <PersonIcon sx={{ fontSize: { xs: 16, sm: 24 } }} />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >

        <MenuItem onClick={() => { Navigate("/Profile"); handleCloseUserMenu(); }}><AccountCircleIcon sx={{ fontsize: 3, mr: 1 }} />Profile</MenuItem>
        <MenuItem onClick={() => { Navigate("/Favourites"); handleCloseUserMenu(); }}>
          <FavoriteSharpIcon sx={{ fontsize: 3, mr: 1 }} />Favourites
        </MenuItem>
        <MenuItem sx={{ display: { md: "none", xs: "initial" } }} onClick={() => { handleCloseUserMenu(); setDrawer(true) }}>
          <Badge badgeContent={15} color="error" anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}>
            <NotificationsIcon sx={{
              fontsize: { xs: 16, sm: 24 },
              color: "#263238",
              mr: 1
            }}
            />
          </Badge>
          Notifications
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(LogoutUser());
            // props.onClose();
            window.localStorage.removeItem("auth");
            dispatch(modelPopUp(false));
            Navigate("/");
          }}
        >
          <LogoutIcon sx={{ fontsize: 3, mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </Box>

  );
}

export default Userbar;

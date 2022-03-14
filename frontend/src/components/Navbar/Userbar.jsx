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
import { Tooltip, Avatar, Menu, MenuItem, Box, IconButton } from "@mui/material";
import NotificationBox from "../Notification/notificationBox";
function Userbar(props) {
  // console.log(props.updateNotification);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const Navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);
  const [notificationCount, setNotificationCount] = useState(props.updateNotification)
  // ======================================================= lOGIN ICON =====================================================================================
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const dispatch = useDispatch();

  return (
    <Box>
      <IconButton sx={{ p: 0.65, mr: { xs: 1, sm: 2 } }} onClick={() => { setDrawer(true) }}>
        <Badge badgeContent={notificationCount} color="error">
          <Tooltip title="Notifications" arrow>
            <NotificationsIcon sx={{ fontSize: { xs: 20, sm: 24 }, color: "#263238", }} />
          </Tooltip>
        </Badge>
      </IconButton>
      <Drawer
        anchor='right'
        open={drawer}
        onClose={() => { setDrawer(false) }}
      >
        <NotificationBox setDrawer={setDrawer} setNotificationCount={setNotificationCount} />
      </Drawer>

      {/* {drawer&&NotificationBox} */}

      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Tooltip title="Profile" arrow>
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
        </Tooltip>
      </IconButton>
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

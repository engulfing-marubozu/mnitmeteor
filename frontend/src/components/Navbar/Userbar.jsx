import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge, Drawer } from '@mui/material';
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { useDispatch } from "react-redux";
import { LogoutUser, modelPopUp } from "../../AStatemanagement/Actions/userActions";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation, useNavigate } from "react-router-dom";
import { Tooltip, Avatar, Menu, MenuItem, Box, IconButton } from "@mui/material";
import NotificationPage from "../Notification/notificationPage";
const { io } = require("socket.io-client");
const socket = io("http://localhost:5000", { reconnection: true });
function Userbar({ updateNotification, setNotificationPending }) {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const Navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location.pathname)

  // useEffect(() => {
  //   setNotificationCount(props.updateNotification);
  // }, [props.updateNotification])
  // ======================================================= lOGIN ICON =====================================================================================
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const BadgeHandler = () => {
    setDrawer(true);
    setNotificationPending(0);
  }

  return (
    <Box>
      <IconButton sx={{ p: 0.65, mr: { xs: 1, sm: 2 } }} onClick={BadgeHandler}>
        <Badge badgeContent={updateNotification} color="error">
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
        <NotificationPage setDrawer={setDrawer} />
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
            // src={}
          />
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

        <MenuItem onClick={() => { Navigate("/profile"); handleCloseUserMenu(); }}><AccountCircleIcon sx={{ fontsize: 3, mr: 1 }} />Profile</MenuItem>
        <MenuItem onClick={() => { Navigate("/favourites"); handleCloseUserMenu(); }}>
          <FavoriteSharpIcon sx={{ fontsize: 3, mr: 1 }} />Favourites
        </MenuItem>
        <MenuItem
          onClick={() => {
            const userData = JSON.parse(window.localStorage.getItem("auth"));
            const user_id = userData?.user?.email;
            socket.emit("log_out_socket", user_id);
            dispatch(LogoutUser());
            window.localStorage.removeItem("auth");
            dispatch(modelPopUp(false));
            if (location.pathname !== "/" && location.pathname !== '/discussions' && location.pathname !== '/lost&found') {
              Navigate("/");
            }
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

import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  LogoutUser,
  modelPopUp,
} from "../../AStatemanagement/Actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NotificationPage from "../Notification/notificationPage";
const { io } = require("socket.io-client");
const socket = io(process.env.REACT_APP_API, { reconnection: true });

function Userbar({ updateNotification, setNotificationPending }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const Navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);
  const dispatch = useDispatch();
  const userData = JSON.parse(window.localStorage.getItem("mm_user_data"));
  const email = userData?.email;
  const avatar = userData?.profilePic;
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
  };

  return (
    <Box>
      <IconButton sx={{ p: 0.65, mr: { xs: 1, sm: 2 } }} onClick={BadgeHandler}>
        <Badge badgeContent={updateNotification} color="error">
          <Tooltip title="Notifications" arrow>
            <NotificationsIcon
              sx={{ fontSize: { xs: 20, sm: 24 }, color: "#263238" }}
            />
          </Tooltip>
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}
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
            src={avatar}
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
        <MenuItem
          onClick={() => {
            Navigate("/profile");
            handleCloseUserMenu();
          }}
        >
          <AccountCircleIcon sx={{ fontsize: 3, mr: 1 }} />
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            Navigate("/favourites");
            handleCloseUserMenu();
          }}
        >
          <FavoriteSharpIcon sx={{ fontsize: 3, mr: 1 }} />
          Favourites
        </MenuItem>
        <MenuItem
          onClick={() => {
            // const userData = JSON.parse(window.localStorage.getItem("auth"));
            // const user_id = userData?.user?.email;
            // socket.emit("log_out_socket", user_id);
            // window.localStorage.removeItem("auth");
            email && socket.emit("log_out_socket", email);
            dispatch(LogoutUser());
            dispatch(modelPopUp(false));
            Navigate(`/`);
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

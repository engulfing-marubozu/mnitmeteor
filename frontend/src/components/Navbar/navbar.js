import React, { useState, useEffect } from "react";
import axios from 'axios'
import {
  GlobalStyles,
  AppBar,
  Stack,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledMenu } from "./NavabarStyle";
import MymenuBar from "./Categories/MenuBar";
import { useNavigate } from "react-router-dom";
import Userbar from "./Userbar";
import { useSelector, useDispatch } from "react-redux";
import {
  SellNowclick,
  modelPopUp,
} from "../../AStatemanagement/Actions/userActions";
import NavbarTabs from "./navbarTabs";
const { io } = require("socket.io-client");
const socket = io("http://localhost:5000", { reconnection: true });
// =============================================================================================================================================================================================

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
  "&:hover": {
    backgroundColor: deepPurple[700],
    borderColor: deepPurple[700],
  },
}));
export const OutlinedButton = styled(Button)(({ theme }) => ({
  borderColor: deepPurple[500],
  color: "inherit",
  "&:hover": {
    backgroundColor: deepPurple[700],
    borderColor: deepPurple[700],
    boxShadow: "none",
    color: "#ffffff",
  },
}));

// ==========================================================================================================================================================================
function Navbar() {
  // const localUserData = useSelector((state) => state.loginlogoutReducer);
  // const token = localUserData.token;
  const Navigate = useNavigate();
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [postsPending, setpostPending] = useState(0);
  const [notificationPending, setNotificationPending] = useState(0);
  const open = Boolean(anchorEl);

  // =====================================================================================================================================================================
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // WINDOW SIZE DISPLAYING=======================NOT IMPORTANT============================================================================================================
  const sizeEventHandler = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", sizeEventHandler);
    return () => {
      window.removeEventListener("resize", sizeEventHandler);
    };
  }, [windowWidth]);
  // =============================================================================================================================================================
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const dispatch = useDispatch();
  // const LocalUserData=useSelector((state)=>loginlogoutReducer);
  // const isLoggedIn=localUserData.isLogin;
  // const
  console.log(notificationPending);
  // ========================================================SOCKET-IO==========================================================================================================

  React.useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("auth"));
    console.log("land2");
    // console.log(userData);
    userData && socket.emit("initialise_user", userData.user.email);
  }, []);

  React.useEffect(() => {
    
      const call =async ()=>{
        try {
          const userData = JSON.parse(window.localStorage.getItem("auth"));
          const token = userData.token
          console.log("fjne")
          const response =
         await axios.post(
           "http://localhost:5000/get_notif_alert_count",
           {  },
           {
             headers: {
               Authorization: `Bearer ${token}`,
             },
           }
         );
         // console.log(response.data);
         setNotificationPending( response.data.count  );
       } catch (err) {
         console.log(err);
       };
      }
   call();
  }, [notificationPending]);

  React.useEffect(() => {
    socket.on("approve_post_update", () => {
      // console.log("land1");
      setpostPending(postsPending + 1);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    socket.on("decline/approve/interesred_post_notification", () => {
      console.log("land");
      setNotificationPending((prev) => {
        // console.log(prev);
        return prev + 1;
      });
    });
  }, []);

  // ========================================================================================================================================================================
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="sticky"
        color="default"
        elevation={9}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              sx={{ p: 0 }}
              size="large"
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <StyledMenu
              // id="demo-customized-menu"
              // MenuListProps={{
              //   "aria-labelledby": "demo-customized-button",
              // }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MymenuBar menuClose={handleClose} />
            </StyledMenu>
          </Box>
          <Stack
            alignItems={"center"}
            direction="row"
            sx={{
              flexGrow: 1,
              ml: { xs: 0, md: 1.5, lg: 6 },
            }}
          >
            <AcUnitIcon
              sx={{
                color: "#512da8",
                display: { xs: "flex" },
                fontSize: { xs: 20, sm: 26 },
                mx: { xs: 0.5, sm: 1 },
              }}
            />
            <Typography
              variant="h5"
              color="inherit"
              noWrap
              sx={{
                fontWeight: 700,
                fontSize: { xs: "18px", md: "24px" },
                display: { xs: "flex" },
              }}
              onClick={() => {
                Navigate("/Adminpanel");
              }}
            >
              {windowWidth}
              {/* MNIT Market */}
            </Typography>
          </Stack>
          {windowWidth > 600 && (
            <Stack display={{ sm: "flex" }}>
              <NavbarTabs updateBadge={postsPending} />
            </Stack>
          )}
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            sx={{ mr: { xs: 0, md: 1.5, lg: 6 } }}
            direction="row"
          >
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              display={{ sm: "flex", xs: "none" }}
            >
              {!isLoggedIn && (
                <OutlinedButton
                  variant="outlined"
                  sx={{
                    fontSize: { sm: "12px", md: "15px" },
                    fontWeight: "bold",
                    ml: 2,
                  }}
                  onClick={() => {
                    dispatch(modelPopUp(true));
                    dispatch(SellNowclick(false));
                  }}
                >
                  Login
                </OutlinedButton>
              )}
            </Stack>
            {isLoggedIn && (
              <Userbar
                updateNotification={notificationPending}
                setNotificationPending={setNotificationPending}
              />
            )}
            {/* ================================================================================================= */}
            <ColorButton
              sx={{
                fontSize: { xs: "9px", sm: "12px", md: "15px" },
                fontWeight: "bold",
              }}
              variant="contained"
              onClick={() => {
                !isLoggedIn && dispatch(SellNowclick(true));
                !isLoggedIn && dispatch(modelPopUp(true));
                isLoggedIn && Navigate("/SellProduct");
              }}
            >
              Sell Now
            </ColorButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
export { socket };

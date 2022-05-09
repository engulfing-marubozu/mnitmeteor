import React, { useState, useEffect, } from "react";
import { styled } from "@mui/material/styles";
import axios from 'axios'
import GlobalStyles from "@mui/material/GlobalStyles";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import deepPurple from "@mui/material/colors/deepPurple";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";
import Userbar from "./Userbar";
import MymenuBar from "./Categories/MenuBar";
import NavbarTabs from "./navbarTabs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SellNowclick, modelPopUp, } from "../../AStatemanagement/Actions/userActions";
import { NavbarStyle } from "./NavabarStyle";
const { io } = require("socket.io-client");
const socket = io(process.env.REACT_APP_API, { reconnection: true });
// ===============================================================================================================================

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

// =================================================================================================
function Navbar() {
  console.log("navbar");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [postsPending, setpostPending] = useState(0);
  const [notificationPending, setNotificationPending] = useState(0);
  const [menuDrawer, setMenuDrawer] = useState(false);
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const isLogin = localUserData?.isLogin;
  const email = localUserData?.userData?.email;
  // ================================================================================================
  const handleClick = (event) => {
    setMenuDrawer(true);
  };
  const menuClose = () => {
    setMenuDrawer(false);
  }
  // WINDOW SIZE DISPLAYING=======================NOT IMPORTANT======================================
  const sizeEventHandler = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", sizeEventHandler);
    return () => {
      window.removeEventListener("resize", sizeEventHandler);
    };
  }, [windowWidth]);
  // ========================================================SOCKET-IO================================

  React.useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("mm_user_data"));
    const email = userData?.email;
    email && socket.emit("initialise_user", email);
  }, [email]);


  React.useEffect(() => {
    const call = async () => {
      try {
        const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
        const token = userAuthData?.xezzi;
        const response =
          await axios.post(
            `${process.env.REACT_APP_API}/get_notif_alert_count`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        setNotificationPending(response.data.count);
      } catch (err) {
        console.log(err);
      };
    }
    call();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationPending]);

  React.useEffect(() => {
    socket.on("approve_post_update", () => {
      setpostPending(postsPending + 1);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    socket.on("decline/approve/interesred_post_notification", () => {
      setNotificationPending((prev) => {
        return prev + 1;
      });
    });
  }, []);


  const classes = NavbarStyle();

  // ================================================================================================================
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="sticky"
        color="default"
        elevation={3}
      >
        <Toolbar>
          <Box className={classes.menuIcon}>
            <IconButton sx={{ p: 0 }} size="large" onClick={handleClick} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='left'
              open={menuDrawer}
              onClose={menuClose}
            >

              <MymenuBar menuClose={menuClose} />
            </Drawer>

          </Box>
          <Stack
            alignItems={"center"}
            direction="row"
            sx={{
              flexGrow: 1,
              ml: { xs: 0, md: 1.5, lg: 6 },
            }}
          >
            <AcUnitIcon className={classes.siteIcon} />
            <Typography variant="h5" color="inherit" noWrap
              sx={{
                fontWeight: 700,
                fontSize: { xs: "18px", md: "24px" },
                display: { xs: "flex" },
              }}
              onClick={() => {
                Navigate("/adminpanel");
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
              {!isLogin && (
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
            {isLogin && (
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
                !isLogin && dispatch(SellNowclick(true));
                !isLogin && dispatch(modelPopUp(true));
                isLogin && Navigate("/sellproduct");
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

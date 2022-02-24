import React, { useState, useEffect } from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledMenu } from "./NavabarStyle";
import MymenuBar from "./Categories/MenuBar";
import { useNavigate } from "react-router-dom";
// import Model from "../loginForm/Model";
import Userbar from "./Userbar";
import { useSelector, useDispatch } from "react-redux";
import {
  SellNowclick,
  modelPopUp,
} from "../../AStatemanagement/Actions/userActions";
import NavbarTabs from "./navbarTabs";

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

export const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function Navbar() {
  const Navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  // ===============================================================================
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [value, setValue] = React.useState(1);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // WINDOW SIZE DISPLAYING=======================NOT IMPORTANT================
  const sizeEventHandler = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", sizeEventHandler);
    return () => {
      window.removeEventListener("resize", sizeEventHandler);
    };
  }, [windowWidth]);
  // =========================================================================================================================================
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const dispatch = useDispatch();
  // console.log(`value of isLogged in ${isLoggedIn}`);
  return (
    <ThemeProvider theme={theme}>
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
              sx={{ p: 1 }}
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
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
              ml: { xs: 0, md: 4 ,lg :6},
            }}
          >
            <AcUnitIcon
              sx={{
                color: "#512da8",
                display: { xs: "flex" },
                fontSize: { xs: 20, sm: 26 },
                mr: { xs: 0.5, sm: 1 },
              }}
            />
            <Typography
              variant="h5"
              color="inherit"
              noWrap
              sx={{
                fontWeight: 700,
                fontSize: { xs: "18px",md: "24px" },
                display: { xs: "flex" },
              }}
              onClick={() => {
                Navigate("/Adminpanel");
              }}
            >
              {/* {windowWidth} */}
              MNIT Market
            </Typography>
          </Stack>
          <Stack display={{ sm: "flex", xs: "none" }} >
            <NavbarTabs />
          </Stack>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            sx={{ mr: { xs: 0, md: 4 , lg :6 } }}
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
                    ml:2,
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
            {isLoggedIn && <Userbar />}
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
    </ThemeProvider>
  );
}
export default Navbar;

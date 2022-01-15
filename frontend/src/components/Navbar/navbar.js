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
import { useSelector,useDispatch} from "react-redux";
import {
  SellNowclick,
  modelPopUp 
} from "../../AStatemanagement/Actions/userActions";

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
  "&:hover": {
    backgroundColor: deepPurple[700],
    borderColor: deepPurple[700],
  },
}));
const OutlinedButton = styled(Button)(({ theme }) => ({
  borderColor: deepPurple[500],
  color: "inherit",
  "&:hover": {
    backgroundColor: deepPurple[700],
    borderColor: deepPurple[700],
    boxShadow: "none",
    color: "#ffffff",
  },
}));

export const theme = createTheme();

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
  const dispatch=useDispatch();
  console.log(`value of isLogged in ${isLoggedIn}`);
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
              size="large"
              aria-label="account of current user"
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
            direction="row"
            justifyContent="center"
            sx={{
              flexGrow: 1,
              justifyContent: "flex-left",
              ml: { xs: 1, md: 10 },
            }}
          >
            <AcUnitIcon
              sx={{
                color: "#512da8",
                display: { xs: "flex" },
                fontSize: { xs: 20, sm: 26 },
                mr: 1,
              }}
            />
            <Typography
              variant="h5"
              color="inherit"
              noWrap
              sx={{
                fontWeight: 700,
                fontSize: { xs: "18px", sm: "24px" },
                display: { xs: "flex" },
              }}
              onClick={() => {
                Navigate("/Adminpanel");
              }}
            >
              MNIT Market
            </Typography>
          </Stack>

          <Stack
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ mr: { xs: 1, md: 10 } }}
            direction="row"
          >
            <Stack
              spacing={{ xs: 1, sm: 2, md: 3 }}
              direction="row"
              display={{ sm: "flex", xs: "none" }}
            >
              <Button
                variant="text"
                color="inherit"
                sx={{
                  fontSize: { sm: "12px", md: "15px" },
                  fontWeight: "bold",
                }}
                onClick={() => {
                  Navigate("/");
                }}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  fontSize: { sm: "12px", md: "15px" },
                  fontWeight: "bold",
                }}
                onClick={() => {
                  Navigate("/About");
                }}
              >
                About
              </Button>
              {!isLoggedIn && (
                <OutlinedButton
                  variant="outlined"
                  sx={{
                    fontSize: { sm: "12px", md: "15px" },
                    fontWeight: "bold",
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
            {/* ================================================================================================= */}
            {isLoggedIn &&<Userbar/>} 
            <ColorButton
              sx={{
                fontSize: { xs: "9px", sm: "12px", md: "15px" },
                fontWeight: "bold",
              }}
              variant="contained"
              onClick={() => {
<<<<<<< HEAD
                (!isLoggedIn&&dispatch(SellNowclick(true)));
               ( !isLoggedIn&&(dispatch(modelPopUp(true))) );
               (isLoggedIn && Navigate("/SellProduct"))
=======
                Navigate("SellProduct");


>>>>>>> b3e28b242e663542cb81c54394e2ab21a3a718c2
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

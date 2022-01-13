import React, {useState,useEffect} from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { StyledMenu } from "./NavabarStyle";
import MymenuBar from "./Categories/MenuBar";
import { useNavigate } from "react-router-dom";
import Model from "../loginForm/Model";
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
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [windowWidth,setwindowWidth]=useState(window.innerWidth);
  
  const sizeEventHandler=()=>{
    setwindowWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize",sizeEventHandler)
    return () => {
     window.removeEventListener("resize",sizeEventHandler)
    }
  }, [windowWidth])


const [loginModel,setloginModel]=useState(false);

const LoginModelHandler=()=>{
  setloginModel(false);
}


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
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`
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
                color:"#512da8",
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
            >
              MNIT  {windowWidth}
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
                sx={{ fontSize: { sm: "12px", md: "15px"  } ,fontWeight:"bold" }}
                onClick={() => {
                  Navigate("/");
                }}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ fontSize: { sm: "12px", md: "15px" }  ,fontWeight:"bold" }}
                onClick={() => {
                  Navigate("/About");
                }}
              >
               About
              </Button>
              <OutlinedButton
                variant="outlined"
                sx={{ fontSize: { sm: "12px", md: "15px" } ,fontWeight:"bold"  }}
                onClick={()=>{setloginModel(true)}}
              >
                Login
              </OutlinedButton>
            
            </Stack>
            <ColorButton
              sx={{ fontSize: { xs: "9px", sm: "12px", md: "15px" } ,fontWeight:"bold"  }}
              variant="contained"
              // onClick={()=>{setloginModel(true)}}
              onClick={()=>{ Navigate("ProductSellCard");}}
            >
              Sell Now
            </ColorButton>
            {loginModel&&<Model onClose={LoginModelHandler}></Model>}
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;

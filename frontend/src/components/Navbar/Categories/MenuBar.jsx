import React from "react";
import MenuItem from "@mui/material/MenuItem";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CategoryIcon from "@mui/icons-material/Category";
import ForumIcon from '@mui/icons-material/Forum';
import SellIcon from "@mui/icons-material/Sell";
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBarCategory from "./MenuBarCategories";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Collapse  from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { styled } from '@mui/material/styles';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LogoutUser, modelPopUp, SellNowclick } from "../../../AStatemanagement/Actions/userActions";
const { io } = require("socket.io-client");
const socket = io("http://localhost:5000", { reconnection: true });

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MymenuBar({ menuClose }) {
  const [expanded, setExpanded] = React.useState(false);
  const location = useLocation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  // ========================we can Handle page by this function

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const menuItemHandler = (input = "flag") => {
    if (input === "home") {
      Navigate("/");
    } else {
      Navigate(`${input}`);
    }
    menuClose();
  };
  //========================================================================================LOGIN PAGE POP UP=====================================
  return (
    <>
      <Box sx={{ width: "260px", p: "1rem", borderBottom: "2px solid  #bdbdbd" }}>
        <Stack
          alignItems={"center"}
          direction="row"
          sx={{ml:"1rem"}}
        >
          <AcUnitIcon sx={{ color: "#673ab7" }} />
          <Typography variant="h5" color="inherit" noWrap
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              ml: "6px",
            }}
            onClick={() => {
              Navigate("/adminpanel");
            }}
          >
            MNIT Market
          </Typography>
        </Stack>

      </Box>
      <Box sx={{ m: "1rem" }}>
        <MenuItem onClick={() => { menuItemHandler("home") }}>
          <HomeIcon sx={{ mr: 1 }} />
          Home
        </MenuItem>
        <MenuItem onClick={() => { menuItemHandler("discussions") }}>
          <ForumIcon sx={{ mr: 1 }} />
          Discussions
        </MenuItem>
        <MenuItem onClick={() => { menuItemHandler("lost&found") }}>
          <SearchIcon sx={{ mr: 1 }} />
          Lost&Found
        </MenuItem>
        <MenuItem >
          <CategoryIcon sx={{ mr: 1 }} />
          Categories
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </MenuItem>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <MenuBarCategory menuClose={menuClose} />
        </Collapse>
        <MenuItem onClick={() => {
          (!isLoggedIn && dispatch(SellNowclick(true)));
          (!isLoggedIn && dispatch(modelPopUp(true)));
          (isLoggedIn && menuItemHandler("sellproduct"));
          menuClose();
        }}>
          <SellIcon sx={{ mr: 1 }} />
          Sell Now
        </MenuItem>
        {!isLoggedIn && <MenuItem
          sx={{ color: "white", bgcolor: "#673ab7", mt: "0.8rem" }}
          onClick={() => {
            dispatch(modelPopUp(true));
            dispatch(SellNowclick(false));
            menuClose();
          }}>
          <LoginIcon sx={{ mr: 1 }} />
          Login
        </MenuItem>}
        {isLoggedIn && <MenuItem
          sx={{ color: "white", bgcolor: "#673ab7", mt: "0.8rem" }}
          onClick={() => {
            const userData = JSON.parse(window.localStorage.getItem("auth"));
            const user_id = userData?.user?.email;
            socket.emit("log_out_socket", user_id);
            window.localStorage.removeItem("auth");
            dispatch(modelPopUp(false));
            dispatch(LogoutUser());
            menuItemHandler();
            if (location.pathname !== "/" && location.pathname !== '/discussions' && location.pathname !== '/lost&found') {
              Navigate("/");
            }
          }}>
          <LogoutIcon sx={{ mr: 1 }} />
          Logout
        </MenuItem>}
      </Box>
    </>
  );
}

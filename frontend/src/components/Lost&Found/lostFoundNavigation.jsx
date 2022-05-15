import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ExploreIcon from "@mui/icons-material/Explore";
import CreateIcon from "@mui/icons-material/Create";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SearchIcon from "@mui/icons-material/Search";
import { NavTabs, NavTab, VerticalNavTab } from "../_Styling/tabStyling";
import { useNavigate, useLocation } from "react-router-dom";
import { verticalNavigationStyle } from "../_Styling/tabStyling";
import { useDispatch, useSelector } from "react-redux";
import { modelPopUp } from "../../AStatemanagement/Actions/userActions";

export function LostFoundNavigation() {
  const [value, setValue] = React.useState(0);
  const isLogin = useSelector((state) => state.loginlogoutReducer.isLogin);
  // const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  // const isLogin = userAuthData?.oamp;
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/lost&found") {
      setValue(0);
    } else if (location.pathname === "/lost&found/lostitems") {
      setValue(1);
    } else if (location.pathname === "/lost&found/founditems") {
      setValue(2);
    } else if (location.pathname === "/lost&found/lost&foundform") {
      setValue(3);
    } else if (location.pathname === "/lost&found/myitems") {
      setValue(4);
    } else {
      setValue(false);
    }
  }, [location.pathname, setValue]);
  function ResTabClickHandler(address) {
    if (isLogin) {
      Navigate(address);
    } else {
      dispatch(modelPopUp(true));
    }
  }
  function TabClickHandler(address) {
    Navigate(address);
  }

  return (
    <Paper sx={{ bgcolor: "white", display: "flex", justifyContent: "center" }}>
      <NavTabs value={value} variant="scrollable" scrollButtons={false}>
        <NavTab
          icon={<ExploreIcon />}
          label="Explore"
          onClick={() => {
            TabClickHandler("");
          }}
        />
        <NavTab
          icon={<QuestionMarkIcon />}
          label="Lost Items"
          onClick={() => {
            TabClickHandler("lostitems");
          }}
        />
        <NavTab
          icon={<SearchIcon />}
          label="Found Items"
          onClick={() => {
            TabClickHandler("founditems");
          }}
        />
        <NavTab
          icon={<CreateIcon />}
          label="Add an item."
          onClick={() => {
            ResTabClickHandler("lost&foundform");
          }}
        />
        <NavTab
          icon={<SearchIcon />}
          
          label="My Items"
          onClick={() => {
            ResTabClickHandler("myitems");
          }}
        />
      </NavTabs>
    </Paper>
  );
}

// export default DiscussionNavigation

export function LostFoundVerticalNavigation() {
  const [value, setValue] = React.useState(0);
  const classes = verticalNavigationStyle();
  const isLogin = useSelector((state) => state.loginlogoutReducer.isLogin);
  // const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  // const isLogin = userAuthData?.oamp;
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  function ResTabClickHandler(address) {
    if (isLogin) {
      Navigate(address);
    } else {
      dispatch(modelPopUp(true));
    }
  }
  function TabClickHandler(address) {
    Navigate(address);
  }
  useEffect(() => {
    if (location.pathname === "/lost&found") {
      setValue(0);
    } else if (location.pathname === "/lost&found/lostitems") {
      setValue(1);
    } else if (location.pathname === "/lost&found/founditems") {
      setValue(2);
    } else if (location.pathname === "/lost&found/lost&foundform") {
      setValue(3);
    } else if (location.pathname === "/lost&found/myitems") {
      setValue(4);
    } else {
      setValue(false);
    }
  }, [location.pathname, setValue]);

  return (
    <Box className={classes.outerBox}>
      <Paper className={classes.paperStyle}>
        <NavTabs value={value} orientation="vertical">
          <VerticalNavTab
            icon={<ExploreIcon />}
            label="Explore"
            onClick={() => {
              TabClickHandler("");
            }}
          />
          <VerticalNavTab
            icon={<QuestionMarkIcon />}
            label="Lost Items"
            onClick={() => {
              TabClickHandler("lostitems");
            }}
          />
          <VerticalNavTab
            icon={<SearchIcon />}
            label="Found Items"
            onClick={() => {
              TabClickHandler("founditems");
            }}
          />
          <VerticalNavTab
            icon={<CreateIcon />}
            label="Add an item"
            onClick={() => {
              ResTabClickHandler("lost&foundform");
            }}
          />
          <VerticalNavTab
            icon={<SearchIcon />}
            label="My Items"
            onClick={() => {
              ResTabClickHandler("myitems");
            }}
          />
        </NavTabs>
      </Paper>
    </Box>
  );
}

import React, { useEffect } from "react";
import { Paper, Box } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import CreateIcon from "@mui/icons-material/Create";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { NavTabs, NavTab, VerticalNavTab } from "../_Styling/tabStyling";
import { useNavigate, useLocation } from "react-router-dom";
import { verticalNavigationStyle } from "../_Styling/tabStyling";
import { modelPopUp } from "../../AStatemanagement/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";

export function DiscussionNavigation() {
  const [value, setValue] = React.useState(0);
  // const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  // const isLogin = userAuthData?.oamp;
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const isLogin = localUserData?.isLogin;
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/discussions") {
      setValue(0);
    } else if (location.pathname === "/discussions/createnewtopic") {
      setValue(1);
    } else if (location.pathname === "/discussions/savedtopics") {
      setValue(2);
    } else if (location.pathname === "/discussions/mytopics") {
      setValue(3);
    } else {
      setValue(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
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
          label="Explore Thread"
          onClick={() => {
            TabClickHandler("");
          }}
        />
        <NavTab
          icon={<CreateIcon />}
          label="Create Thread"
          onClick={() => {
            ResTabClickHandler("createnewtopic");
          }}
        />
        <NavTab 
          icon={<BookmarkAddedIcon />}
          label="Saved THREAD"
          onClick={() => {
            ResTabClickHandler("savedtopics");
          }}
        />
        <NavTab
          icon={<QuestionMarkIcon />}
          label="My Topics"
          onClick={() => {
            ResTabClickHandler("mytopics");
          }}
        />
      </NavTabs>
    </Paper>
  );
}

// export default DiscussionNavigation

export function DiscussionVerticalNavigation() {
  const classes = verticalNavigationStyle();
  // const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  // const isLogin = userAuthData?.oamp;
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const isLogin = localUserData?.isLogin;
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const Navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/discussions") {
      setValue(0);
    } else if (location.pathname === "/discussions/createnewtopic") {
      setValue(1);
    } else if (location.pathname === "/discussions/savedtopics") {
      setValue(2);
    } else if (location.pathname === "/discussions/mytopics") {
      setValue(3);
    } else {
      setValue(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

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
    <Box className={classes.outerBox}>
      <Paper className={classes.paperStyle}>
        <NavTabs value={value} orientation="vertical">
          <VerticalNavTab
            icon={<ExploreIcon />}
            label="Explore Threads"
            onClick={() => {
              TabClickHandler("");
            }}
          />
          <VerticalNavTab
            icon={<CreateIcon />}
            label="Create Thread"
            onClick={() => {
              ResTabClickHandler("createnewtopic");
            }}
          />
          <VerticalNavTab
            icon={<BookmarkAddedIcon />}
            label="Saved Threads"
            onClick={() => {
              ResTabClickHandler("savedtopics");
            }}
          />
          <VerticalNavTab
            icon={<QuestionMarkIcon />}
            label="My Threads"
            onClick={() => {
              ResTabClickHandler("mytopics");
            }}
          />
        </NavTabs>
      </Paper>
    </Box>
  );
}

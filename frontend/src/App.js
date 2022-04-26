import "./App.css";
import React, { useEffect } from "react";
import RouterCon from "./components/RouterConfig/RouterCon";
import Wrapper from "./components/RouterConfig/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { AuthUser } from "./AStatemanagement/Actions/userActions.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import AdminLogin from "./AdminPanel/AdminLogin/adminLogin";
// import AdminLogin from "./AdminPanel/AdminLogin/adminLogin";
// import AdminRouterCon from "./components/RouterConfig/AdminRoute";
const theme = createTheme({
  palette: {
    primary: {
      main: "#512da8",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
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

function App() {
  //  ==================================================================================================
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.AdminPanelReducer?.mode);
  const bool = Boolean(JSON.parse(window.localStorage.getItem("auth")))
  useEffect(() => {
    if (bool) {
      dispatch(AuthUser(JSON.parse(window.localStorage.getItem("auth"))));
    }
  }, [dispatch, mode, bool]);

  // ====================================================================================================
  return (
    <ThemeProvider theme={theme}>
      {<Wrapper>
        <RouterCon />
      </Wrapper>}
      {/* {mode && <AdminLogin />} */}
      {/* <AdminLogin /> */}
    </ThemeProvider>
  );
}
export default App;

import React, { useEffect } from "react";
import axios from "axios"
import RouterCon from "./components/RouterConfig/RouterCon";
import Wrapper from "./components/RouterConfig/Wrapper";
import { useDispatch } from "react-redux";
import { AuthUser, LogoutUser } from "./AStatemanagement/Actions/userActions.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
      'Cabin',
      'sans-serif'
    ].join(","),
  },
});

function App() {
  //  ==================================================================================================
  const dispatch = useDispatch();
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;
  const isLogin = userAuthData?.oamp;
  useEffect(() => {
    const call = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/auth_token`,
          {},
          {

            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data === "authorised_user") {
          const userData = JSON.parse(window.localStorage.getItem("mm_user_data"));
          const data = { userData: userData, isLogin: isLogin, token: token };
          dispatch(AuthUser(data));
        } else {
          dispatch(LogoutUser());
        }

      } catch (err) {
        console.log(err);
      }
    }
    if (userAuthData) {
      call();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ====================================================================================================
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <RouterCon />
      </Wrapper>
    </ThemeProvider>
  );
}
export default App;

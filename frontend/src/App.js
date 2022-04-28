import "./App.css";
import React, { useEffect } from "react";
import axios from "axios"

import RouterCon from "./components/RouterConfig/RouterCon";
import Wrapper from "./components/RouterConfig/Wrapper";
import { useDispatch } from "react-redux";
import { AuthUser } from "./AStatemanagement/Actions/userActions.jsx";
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
  const local_storage_data = JSON.parse(window.localStorage.getItem("auth"))
  useEffect(() => {
    // if (bool) {
    //   dispatch(AuthUser(JSON.parse(window.localStorage.getItem("auth"))));
    // }

const call = async()=>{
  try {
    const response =
   await axios.post(
     "http://localhost:5000/auth_token",
     {  },
     {
       headers: {
         Authorization: `Bearer ${local_storage_data.token}`,
       },
     }
   );
   console.log(response.data);
 } catch (err) {
   
   console.log(err);
 }
}
   
 if(local_storage_data)
   call();

  }, [dispatch, local_storage_data]);

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

import "./App.css";
import RouterCon from "./components/RouterConfig/RouterCon";
import Wrapper from "./components/RouterConfig/Wrapper";
import { useDispatch } from "react-redux";
import { AuthUser } from "./AStatemanagement/Actions/userActions.jsx";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
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
  console.log("first");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("visited use_effect");
    JSON.parse(window.localStorage.getItem("auth")) &&
      dispatch(AuthUser(JSON.parse(window.localStorage.getItem("auth"))));
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <RouterCon />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;

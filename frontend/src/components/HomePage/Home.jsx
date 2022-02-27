import * as React from "react";
import { useState, useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategorySlider from "./Slider";
import { useSelector } from "react-redux";
import { AccountContext } from "../-context/accountContext";
const theme = createTheme();
//const { io } = require("socket.io-client");
//const socket = io("http://localhost:5000", { reconnection: true });

function Home() {

  //...............................................................................................................................................................
  // SOCKET IO Implemented
 // const { userData } = useContext(AccountContext);
  const [postsPending, setpostPending] = useState(0);
  //console.log(userData);
  // React.useEffect(() => {
  //   console.log(userData.email);
  //   socket.emit("initialise user", userData.email);
  // });

  // React.useEffect(() => {
  //   socket.on("approved post update", () => {
  //     setpostPending(postsPending + 1);
  //   });
  // });
//..................................................................................................................................................................


  return (
 
    <ThemeProvider theme={theme}>
      <h1>hello {postsPending}</h1>
      <CssBaseline />
      {/* +======================================================================= */}
      <Paper
        display="flex"
        sx={{ bgcolor: "#212121", height: 280, borderRadius: 0 }}
      ></Paper>

      {/*  Bannner============================================================================== */}

      {/*  CATEGORY BAR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <CategorySlider></CategorySlider>
      <Outlet />
    </ThemeProvider>
    
  );
}

export default Home;
//export { socket };

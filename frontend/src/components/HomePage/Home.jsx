<<<<<<< HEAD
import * as React from "react";
import { useState, useContext } from "react";
=======
import  React , { useContext } from "react";
>>>>>>> 302391a09dfaa34f66b1d4cf1ca404103db19fa3
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategorySlider from "./Slider";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import { AccountContext } from "../-context/accountContext";
=======
import { AccountContext } from "../_ContextFolder/accountContext";
>>>>>>> 302391a09dfaa34f66b1d4cf1ca404103db19fa3
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


<<<<<<< HEAD
=======
export default function Home() {
  const userData = useContext(AccountContext)
  console.log(userData);
>>>>>>> 302391a09dfaa34f66b1d4cf1ca404103db19fa3
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

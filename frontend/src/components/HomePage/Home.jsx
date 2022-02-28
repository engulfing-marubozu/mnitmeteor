import  React , { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategorySlider from "./Slider";
const theme = createTheme();
const { io } = require("socket.io-client");
const socket = io("http://localhost:5000", { reconnection: true });

  export default function Home() {
  //...............................................................................................................................................................
  // SOCKET IO Implemented
  // const userData = useContext(AccountContext);
 const [postsPending, setpostPending] = useState(0);
 const [notificationPending, setNotificationPending]= useState(0);
  React.useEffect(() => {
    const userData=  JSON.parse(window.localStorage.getItem("auth"));
  console.log(userData);
  userData && socket.emit("initialise_user", userData.user.email);
  },[]);

  React.useEffect(() => {
    socket.on("approved_post_update", () => {
      setpostPending(postsPending + 1);
    });
  });
  
  React.useEffect(() => {
    console.log("aa gayaaaaa");
    socket.on("declined_post_notification", () => {
      console.log("aa gaya");
      console.log(notificationPending);
      setNotificationPending((prevValue)=>prevValue+ 1);
      console.log(notificationPending);
    });
  });
  console.log(notificationPending);
  React.useEffect(()=>{
    const userData=  JSON.parse(window.localStorage.getItem("auth"));
    console.log(userData);
    userData && setNotificationPending(userData.user.notification.length - userData.user.read_notif_count);
   })

   
//..................................................................................................................................................................


 

  return (
 
    <ThemeProvider theme={theme}>
      <h1>{postsPending} pending posts</h1>
      <br />
      <h1>{notificationPending} pending notifications</h1>
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


export { socket };
